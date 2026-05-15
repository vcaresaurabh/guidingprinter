'use client'

import { useState, useEffect, useRef } from 'react'

type FlowStep = 1 | 2 | 3 | 4

interface FormData {
  brand: string
  model: string
  os: string
}

const BRANDS = [
  { id: 'hp', name: 'HP' },
  { id: 'canon', name: 'Canon' },
  { id: 'epson', name: 'Epson' },
  { id: 'brother', name: 'Brother' },
  { id: 'lexmark', name: 'Lexmark' },
  { id: 'samsung', name: 'Samsung' },
]

const OS_OPTIONS = [
  'Windows 11',
  'Windows 10',
  'Windows 8.1',
  'Windows 7',
  'macOS Sonoma (14)',
  'macOS Ventura (13)',
  'macOS Monterey (12)',
]

const DRIVER_INFO: Record<string, { version: string; size: string; date: string; file: string }> = {
  hp:      { version: '48.1.4713.0', size: '156.4 MB', date: 'April 2025',    file: 'HP_UniversalPrintDriver_x64_v48.exe' },
  canon:   { version: '3.11.0.0',    size: '98.7 MB',  date: 'March 2025',    file: 'Canon_IJ_FullDriverSuite_v3.11.exe' },
  epson:   { version: '9.52.0.0',    size: '72.3 MB',  date: 'April 2025',    file: 'Epson_PrinterDriver_9.52_Win.exe' },
  brother: { version: '1.6.4.0',     size: '84.1 MB',  date: 'March 2025',    file: 'Brother_FullSoftwarePackage_1.6.4.exe' },
  lexmark: { version: '12.0.1.0',    size: '45.8 MB',  date: 'February 2025', file: 'Lexmark_UniversalDriver_12.0.exe' },
  samsung: { version: '6.10.0.0',    size: '63.2 MB',  date: 'January 2025',  file: 'Samsung_PrintDriver_6.10_Win.exe' },
}

// Brand identity colors — official palette references
const BRAND_COLORS: Record<string, { bg: string; dark: string }> = {
  hp:      { bg: '#0096D6', dark: '#0079AA' }, // HP blue
  canon:   { bg: '#CC0000', dark: '#9E0000' }, // Canon red
  epson:   { bg: '#003087', dark: '#001E55' }, // Epson navy
  brother: { bg: '#003F87', dark: '#002656' }, // Brother dark blue
  lexmark: { bg: '#0069B4', dark: '#004E86' }, // Lexmark blue
  samsung: { bg: '#1428A0', dark: '#0D1C72' }, // Samsung blue
}

function getBrandBg(id: string): string  { return BRAND_COLORS[id]?.bg   ?? '#2563EB' }
function getBrandDark(id: string): string { return BRAND_COLORS[id]?.dark ?? '#1D4ED8' }

function getProgressPhase(progress: number): string {
  if (progress < 8)  return 'Connecting to server...'
  if (progress < 42) return 'Downloading driver package...'
  if (progress < 64) return 'Verifying file integrity...'
  return 'Preparing installation...'
}

// Realistic piecewise curve — stalls at 81% after exactly 25 s
function calcProgress(elapsedMs: number): number {
  const t = Math.min(elapsedMs, 25000)
  if (t < 3000)  return (t / 3000) * 15
  if (t < 9000)  return 15 + ((t - 3000)  / 6000) * 27
  if (t < 15000) return 42 + ((t - 9000)  / 6000) * 22
  if (t < 20000) return 64 + ((t - 15000) / 5000) * 11
  return           75 + ((t - 20000) / 5000) * 6
}

function CheckCircle({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'w-2.5 h-2.5' : 'w-4 h-4'
  return (
    <svg className={s} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function StepIndicator({ current, brandId }: { current: FlowStep; brandId: string }) {
  const bg = getBrandBg(brandId)
  const steps = [
    { num: 1 as FlowStep, label: 'Enter Model' },
    { num: 2 as FlowStep, label: 'Driver Found' },
    { num: 3 as FlowStep, label: 'Downloading' },
    { num: 4 as FlowStep, label: 'Get Help' },
  ]
  return (
    <div className="flex items-start justify-center mb-10 px-2">
      {steps.map((s, i) => {
        const done   = current > s.num
        const active = current === s.num
        return (
          <div key={s.num} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${done ? 'bg-brand-success text-white' : active ? 'text-white shadow-md' : 'bg-gray-200 text-gray-500'}`}
                style={active ? { background: bg } : undefined}
              >
                {done ? <CheckCircle /> : s.num}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block whitespace-nowrap transition-colors ${done ? 'text-brand-success' : active ? '' : 'text-brand-muted'}`}
                style={active ? { color: bg } : undefined}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-12 sm:w-20 h-0.5 mx-1 mb-5 transition-colors duration-300 ${current > s.num ? 'bg-brand-success' : 'bg-gray-200'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export function DriverDownloadFlow({ defaultBrand = '' }: { defaultBrand?: string }) {
  const [step, setStep]         = useState<FlowStep>(1)
  const [form, setForm]         = useState<FormData>({ brand: defaultBrand, model: '', os: 'Windows 11' })
  const [errors, setErrors]     = useState<Partial<Record<keyof FormData, string>>>({})
  const [progress, setProgress] = useState(0)
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const b = params.get('brand')
    const m = params.get('model')
    setForm(f => ({
      ...f,
      ...(b && BRANDS.some(x => x.id === b) ? { brand: b } : {}),
      ...(m ? { model: decodeURIComponent(m) } : {}),
    }))
  }, [])

  useEffect(() => {
    if (step !== 3) return
    setProgress(0)
    const startMs = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startMs
      setProgress(calcProgress(elapsed))
      if (elapsed >= 25000) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setTimeout(() => setStep(4), 800)
      }
    }, 100)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [step])

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.brand)        e.brand = 'Please select your printer brand'
    if (!form.model.trim()) e.model = 'Please enter your printer model number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const driverInfo = DRIVER_INFO[form.brand] ?? DRIVER_INFO['hp']
  const brandName  = BRANDS.find(b => b.id === form.brand)?.name ?? form.brand
  const brandBg    = getBrandBg(form.brand)
  const brandDark  = getBrandDark(form.brand)

  return (
    <div className="max-w-2xl mx-auto px-4">
      <StepIndicator current={step} brandId={form.brand} />

      {/* ── STEP 1: Enter Model ───────────────────────── */}
      {step === 1 && (
        <div className="bg-white rounded-2xl border border-brand-border shadow-card-hover overflow-hidden">
          <div className="px-6 py-5 flex items-center gap-3" style={{ background: brandBg }}>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Find Your Printer Driver</h2>
              <p className="text-white/75 text-xs mt-0.5">Independent third-party support service</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm text-brand-muted mb-6 pb-5 border-b border-brand-border">
              Enter your printer details to locate the correct driver for your operating system.
            </p>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-brand-text mb-2">
                Printer Brand <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {BRANDS.map(b => {
                  const selected = form.brand === b.id
                  const bBg = BRAND_COLORS[b.id]?.bg
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => {
                        setForm(f => ({ ...f, brand: b.id }))
                        setErrors(e => ({ ...e, brand: undefined }))
                      }}
                      className={`py-2.5 px-2 rounded-lg border-2 text-xs font-bold transition-all duration-150 ${selected ? 'text-white' : 'border-brand-border text-brand-text hover:border-primary hover:text-primary'}`}
                      style={selected && bBg ? { background: bBg, borderColor: bBg } : undefined}
                    >
                      {b.name}
                    </button>
                  )
                })}
              </div>
              {errors.brand && <p className="text-red-500 text-xs mt-1.5">{errors.brand}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-brand-text mb-2">
                Printer Model Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.model}
                onChange={e => {
                  setForm(f => ({ ...f, model: e.target.value }))
                  setErrors(err => ({ ...err, model: undefined }))
                }}
                placeholder="e.g., DeskJet 2755, PIXMA MG3620, EcoTank ET-2800"
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm text-brand-text placeholder:text-brand-muted outline-none transition-all ${errors.model ? 'border-red-400 bg-red-50' : 'border-brand-border focus:border-primary'}`}
              />
              {errors.model
                ? <p className="text-red-500 text-xs mt-1.5">{errors.model}</p>
                : <p className="text-xs text-brand-muted mt-1.5">Find your model number on a label on the back or bottom of your printer.</p>
              }
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-brand-text mb-2">Operating System</label>
              <select
                value={form.os}
                onChange={e => setForm(f => ({ ...f, os: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-2 border-brand-border focus:border-primary text-sm text-brand-text outline-none transition-all bg-white"
              >
                {OS_OPTIONS.map(os => <option key={os} value={os}>{os}</option>)}
              </select>
            </div>

            <button
              type="button"
              onClick={() => { if (validate()) setStep(2) }}
              className="w-full py-4 text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2.5 hover:opacity-90"
              style={{ background: brandBg }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search for Compatible Driver
            </button>

            <p className="text-center text-xs text-brand-muted mt-4 leading-relaxed">
              GuidingPrinter is an independent third-party support service — not affiliated with HP, Canon, Epson, Brother, Lexmark, or Samsung.
            </p>
          </div>
        </div>
      )}

      {/* ── STEP 2: Driver Found ──────────────────────── */}
      {step === 2 && (
        <div className="bg-white rounded-2xl border border-brand-border shadow-card-hover overflow-hidden">
          <div className="px-6 py-5 flex items-center gap-3" style={{ background: brandBg }}>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Compatible Driver Located</h2>
              <p className="text-white/75 text-xs mt-0.5">1 driver found matching your printer</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-surface rounded-xl border border-brand-border p-5 mb-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-border">
                <span className="font-bold text-brand-text text-sm">Driver Details</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">✓ Compatible</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {[
                  ['Brand', brandName],
                  ['Model', form.model || 'Universal'],
                  ['Operating System', form.os],
                  ['Driver Version', driverInfo.version],
                  ['File Size', driverInfo.size],
                  ['Release Date', driverInfo.date],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-brand-muted text-xs mb-0.5">{label}</p>
                    <p className="font-semibold text-brand-text">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-brand-border">
                <p className="text-brand-muted text-xs mb-1">File Name</p>
                <p className="font-mono text-xs bg-gray-50 px-3 py-2 rounded-lg break-all" style={{ color: brandBg }}>{driverInfo.file}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              {['Secure Download', 'No Adware', 'Free'].map(label => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-full py-4 text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2.5 hover:opacity-90"
              style={{ background: brandBg }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Driver Now — Free
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full mt-2 py-2.5 text-sm text-brand-muted hover:text-primary transition-colors text-center"
            >
              ← Search for a different printer
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Downloading ───────────────────────── */}
      {step === 3 && (
        <div className="bg-white rounded-2xl border border-brand-border shadow-card-hover overflow-hidden">
          <div className="px-6 py-5 flex items-center gap-3" style={{ background: `linear-gradient(to right, ${brandBg}, ${brandDark})` }}>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Downloading &amp; Installing</h2>
              <p className="text-white/75 text-xs mt-0.5">Please do not close this window</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-surface rounded-xl border border-brand-border px-4 py-3 mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: brandBg + '18' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ color: brandBg }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-brand-text truncate">{driverInfo.file}</p>
                <p className="text-xs text-brand-muted">{driverInfo.size} &bull; Driver Package</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-brand-text">{getProgressPhase(progress)}</span>
                <span className="text-sm font-bold tabular-nums" style={{ color: brandBg }}>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%`, background: `linear-gradient(to right, ${brandBg}, ${brandDark})` }}
                />
              </div>
            </div>

            <div className="space-y-2.5 mb-6">
              {[
                { label: 'Driver package located',     done: progress > 5 },
                { label: 'Downloading driver files',   done: progress > 42 },
                { label: 'Verifying file integrity',   done: progress > 64 },
                { label: 'Installing driver components', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${item.done ? 'text-white' : 'border-2 border-gray-300 bg-white'}`}
                    style={item.done ? { background: brandBg } : undefined}
                  >
                    {item.done && <CheckCircle size="sm" />}
                  </div>
                  <span className={`text-sm transition-colors ${item.done ? 'text-brand-text font-medium' : 'text-brand-muted'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2.5">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-amber-700">Do not close this window or restart your computer during installation.</p>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 4: Setup Failed ──────────────────────── */}
      {step === 4 && (
        <div className="rounded-2xl border border-brand-border shadow-card-hover overflow-hidden">
          <div className="px-6 py-6 text-center" style={{ background: brandDark }}>
            <h2 className="text-white font-bold text-xl leading-tight mb-1">
              Setup Failed — {brandName} Printer Driver
            </h2>
          </div>

          <div className="px-6 pb-8 text-center" style={{ background: brandDark }}>
            <p className="text-white text-sm mb-1">{brandName} Printer Driver installation has failed.</p>
            <p className="text-white text-sm font-semibold mb-6">
              Error Code: Fatal Error &ldquo;C0000022&rdquo;
            </p>

            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <svg className="w-20 h-20 text-white/80" fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
                  <rect x="8"  y="20" width="48" height="28" rx="4" fill="currentColor" opacity="0.9"/>
                  <rect x="16" y="12" width="32" height="10" rx="2" fill="currentColor" opacity="0.7"/>
                  <rect x="20" y="38" width="24" height="14" rx="2" fill="white"        opacity="0.15"/>
                  <circle cx="50" cy="26" r="4" fill="white" opacity="0.5"/>
                </svg>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-white font-semibold text-base mb-6">
              Contact {brandName} Chat Support to resolve this problem!
            </p>

            <a
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white font-bold text-base rounded-lg hover:bg-gray-50 transition-colors mb-6"
              style={{ color: brandDark }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support Now
            </a>

            <div className="bg-yellow-400 rounded-lg px-4 py-3 mb-4">
              <p className="text-yellow-900 text-xs font-semibold leading-relaxed">
                <strong>Note:</strong> Do not attempt to retry the installation as it can damage the printer and void the product warranty.
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-4">
            <button
              type="button"
              onClick={() => { setStep(1); setProgress(0) }}
              className="w-full py-3 bg-surface border border-brand-border text-brand-text hover:border-primary hover:text-primary text-sm font-semibold rounded-xl transition-colors"
            >
              ← Try a Different Printer
            </button>
            <p className="text-center text-xs text-brand-muted mt-4 leading-relaxed">
              GuidingPrinter is an independent third-party support service. Not affiliated with or endorsed by any printer manufacturer. Service fees may apply.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
