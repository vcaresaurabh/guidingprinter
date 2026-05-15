'use client'

import { useState } from 'react'

type WizardScreen = 'brand' | 'task' | 'steps' | 'done'
type TaskType = 'wireless' | 'driver' | 'troubleshoot' | 'offline'

interface BrandOption {
  id: string
  name: string
  color: string
  initial: string
}

interface TaskOption {
  id: TaskType
  label: string
  description: string
  icon: React.ReactNode
}

const BRANDS: BrandOption[] = [
  { id: 'hp', name: 'HP', color: 'bg-blue-600', initial: 'HP' },
  { id: 'canon', name: 'Canon', color: 'bg-red-600', initial: 'Ca' },
  { id: 'epson', name: 'Epson', color: 'bg-indigo-600', initial: 'Ep' },
  { id: 'brother', name: 'Brother', color: 'bg-emerald-600', initial: 'Br' },
  { id: 'lexmark', name: 'Lexmark', color: 'bg-amber-600', initial: 'Lx' },
  { id: 'samsung', name: 'Samsung', color: 'bg-slate-700', initial: 'Sa' },
]

// Step-by-step content per brand per task
const WIZARD_CONTENT: Record<string, Record<TaskType, Array<{ name: string; text: string }>>> = {
  hp: {
    wireless: [
      { name: 'Power on the printer', text: 'Plug in your HP printer and press the Power button. Wait for full initialization before proceeding.' },
      { name: 'Open Wireless Setup Wizard', text: 'Press the Wireless button on the control panel, or go to Settings > Wireless Setup Wizard. On touchscreen models, tap the Wireless icon from the dashboard.' },
      { name: 'Select your Wi-Fi network', text: 'Your printer will scan for available networks. Select your home or office Wi-Fi network name (SSID) from the list.' },
      { name: 'Enter Wi-Fi password', text: 'Use the on-screen keyboard to enter your Wi-Fi password (case-sensitive). Press OK to confirm.' },
      { name: 'Confirm connection', text: 'Wait for the wireless indicator light to turn solid blue — this confirms the HP printer is on your network.' },
      { name: 'Install HP Smart and add printer', text: 'Download HP Smart from hp.com/smart. Open HP Smart, click "Add Printer," and select your HP printer to complete setup.' },
    ],
    driver: [
      { name: 'Go to HP Support', text: 'Open your browser and navigate to hp.com/support. Only use the official HP site to avoid malware.' },
      { name: 'Search your printer model', text: 'Enter your full printer model number (e.g., HP DeskJet 2755e) in the search box.' },
      { name: 'Select your operating system', text: 'HP will auto-detect your OS. Verify it is correct — select Windows 10, Windows 11, or your macOS version if needed.' },
      { name: 'Download HP Smart or Full Software', text: 'For Windows 10/11 and macOS: download HP Smart. For older systems: download the Full Feature Software & Drivers package.' },
      { name: 'Run the installer', text: 'Open the downloaded file. Follow the HP setup wizard. Choose "Wireless" as the connection type and allow the installer to find your printer.' },
      { name: 'Verify and print a test page', text: 'Go to Settings > Printers & scanners, select your HP printer, and click Print a test page to confirm setup.' },
    ],
    troubleshoot: [
      { name: 'HP Printer Shows Offline', text: 'Restart both the printer and your computer. In Windows, go to Settings > Printers & scanners, select your HP printer, and uncheck "Use Printer Offline." Clear pending print jobs.' },
      { name: 'Wi-Fi Connection Dropping', text: 'Move the printer within 10 feet of the router. Ensure both are on the 2.4GHz band. Re-run the Wireless Setup Wizard if needed.' },
      { name: 'Ink Cartridge Not Recognized', text: 'Remove and reinstall the cartridge firmly until it clicks. Clean the copper contact strip with a dry lint-free cloth.' },
      { name: 'Paper Jam', text: 'Turn off the printer. Remove paper from the input tray. Open all doors and gently pull out jammed paper in the direction of paper travel.' },
    ],
    offline: [
      { name: 'Restart printer and computer', text: 'Power off the HP printer completely, wait 30 seconds, power back on, and restart your computer.' },
      { name: 'Check Wi-Fi connection', text: 'Verify the wireless indicator light is solid blue. If blinking, re-run the Wireless Setup Wizard from the printer control panel.' },
      { name: 'Clear the print queue', text: 'Go to Settings > Printers & scanners > your HP printer > Open print queue. Delete all stuck jobs.' },
      { name: 'Disable offline mode', text: 'Open the print queue, click the Printer menu, and ensure "Use Printer Offline" is NOT checked.' },
      { name: 'Restart Print Spooler', text: 'Press Win+R, type services.msc, find "Print Spooler," right-click, and select Restart.' },
    ],
  },
  canon: {
    wireless: [
      { name: 'Power on the printer', text: 'Press the Power button on your Canon printer and wait for full initialization. Ensure it is within range of your Wi-Fi router.' },
      { name: 'Use WPS (fastest method)', text: 'Press and hold the Wi-Fi button on the printer for 3 seconds until the Wi-Fi lamp flashes rapidly. Then press the WPS button on your router within 2 minutes.' },
      { name: 'Or use Wireless Setup Wizard', text: 'On models with a display, press Home/Menu, navigate to LAN settings > Wi-Fi > Wi-Fi Setup Wizard. Select your network and enter the password.' },
      { name: 'Confirm connection', text: 'The Wi-Fi indicator light will remain lit (not flashing) once the Canon printer is connected successfully.' },
      { name: 'Download Canon IJ Setup', text: 'Visit canon.com/ijsetup on your computer. Select your printer model and download the Canon IJ Setup or Canon PRINT Inkjet/SELPHY app.' },
      { name: 'Complete driver installation', text: 'Run the Canon installer. When it detects your printer on the network, select it and complete the guided setup.' },
    ],
    driver: [
      { name: 'Go to Canon Support', text: 'Navigate to usa.canon.com/support in your browser. This is the official source for Canon drivers.' },
      { name: 'Search for your printer model', text: 'Enter your Canon printer model number (e.g., PIXMA MG3620) in the search field.' },
      { name: 'Select your operating system', text: 'Choose your OS from the dropdown. Canon supports Windows 10, Windows 11, and macOS.' },
      { name: 'Download the driver package', text: 'Under Drivers & Downloads, download the "Full Driver & Software Package" which includes printer, scanner, and utilities.' },
      { name: 'Run the Canon IJ Setup installer', text: 'Open the downloaded file. Agree to the license terms. Select Wireless LAN Connection as the connection type.' },
      { name: 'Detect printer and finish', text: 'The installer will scan your network and find your Canon printer. Select it and follow remaining prompts to complete.' },
    ],
    troubleshoot: [
      { name: 'Canon Printer Shows Offline', text: 'Restart the printer and computer. Open Windows Settings > Printers & scanners, right-click Canon printer > See what\'s printing, uncheck Use Printer Offline.' },
      { name: 'Low Ink Preventing Print', text: 'If the cartridge still has ink, open Printer Properties > Maintenance and disable the low-ink warning temporarily. Replace with a genuine Canon cartridge when empty.' },
      { name: 'Poor Print Quality or Streaks', text: 'Run the print head cleaning utility from Canon IJ Printer Utility or the printer control panel under Maintenance > Cleaning.' },
      { name: 'Paper Not Feeding', text: 'Remove all paper, fan the sheets to separate them, and reload. Clean the paper pick rollers with a slightly damp lint-free cloth.' },
    ],
    offline: [
      { name: 'Restart devices', text: 'Restart the Canon printer and your computer completely.' },
      { name: 'Check Wi-Fi signal', text: 'Verify the Wi-Fi indicator light is solid. If not, press and hold the Wi-Fi button for 3 seconds and re-connect using the Wireless Setup Wizard.' },
      { name: 'Remove and re-add the printer', text: 'In Windows Settings > Printers & scanners, remove the Canon printer. Click Add a device and add it again.' },
      { name: 'Clear stuck print jobs', text: 'Open the print queue and delete all pending jobs that may be blocking communication.' },
    ],
  },
  epson: {
    wireless: [
      { name: 'Power on the Epson printer', text: 'Press the Power button and wait for the startup routine to finish. The status light stops blinking when ready.' },
      { name: 'Open Wi-Fi settings', text: 'Press the Home button. Select Wi-Fi Setup (or Network Settings > Wi-Fi Setup) then select Wi-Fi Setup Wizard.' },
      { name: 'Select your Wi-Fi network', text: 'The printer displays nearby networks. Select your Wi-Fi network name. For hidden networks, select "Other Networks" and enter the SSID manually.' },
      { name: 'Enter Wi-Fi password', text: 'Use the on-screen keyboard to type your password (case-sensitive). Select Done or OK.' },
      { name: 'Wait for confirmation', text: 'The Wi-Fi indicator light turns solid green or blue when connected. A confirmation screen appears on display models.' },
      { name: 'Install Epson software', text: 'Visit epson.com/support and download the Epson Connect Printer Setup Utility or Epson Smart Panel. Run the installer and choose Wi-Fi.' },
    ],
    driver: [
      { name: 'Visit Epson Support', text: 'Open epson.com/support in your browser — the official Epson driver portal.' },
      { name: 'Find your Epson printer', text: 'Search by your printer model (e.g., EcoTank ET-2800, WorkForce WF-7820). Click your printer in the results.' },
      { name: 'Select your operating system', text: 'Choose your OS: Windows 10, Windows 11, macOS Sonoma, etc.' },
      { name: 'Download the printer driver', text: 'Under Drivers, download the Printer Driver package. Also download Epson Scan 2 for scanning functionality.' },
      { name: 'Run the Epson installer', text: 'Open the installer, select Wi-Fi as your connection type. The installer will detect your Epson printer automatically.' },
      { name: 'Complete setup and test', text: 'Follow remaining steps. Print a nozzle check from the control panel to verify print quality.' },
    ],
    troubleshoot: [
      { name: 'Epson Printer Offline Error', text: 'Remove the Epson printer from Windows Settings > Printers & scanners and re-add it. Choose the wireless version of the printer (not the USB entry).' },
      { name: 'Ink Pad Full Error', text: 'This "Service Required" error means the waste ink pad is full. Contact Epson service or an authorized technician to replace the ink pad.' },
      { name: 'Clogged Print Head', text: 'Run a nozzle check (Settings > Maintenance > Nozzle Check). If lines are missing, run the Print Head Cleaning utility up to 3 times.' },
      { name: 'Not Connecting to Wi-Fi', text: 'Epson printers support only 2.4GHz Wi-Fi. If your router broadcasts both bands with the same SSID, temporarily disable the 5GHz band during setup.' },
    ],
    offline: [
      { name: 'Restart printer and computer', text: 'Power off the Epson printer, wait 30 seconds, power on, and restart your computer.' },
      { name: 'Verify Wi-Fi connection', text: 'Check the Wi-Fi signal icon on the control panel. If no signal, re-run the Wi-Fi Setup Wizard.' },
      { name: 'Remove and re-add the printer', text: 'Go to Windows Settings > Printers & scanners, remove the Epson printer, and add it again selecting the wireless version.' },
      { name: 'Ensure same Wi-Fi network', text: 'Verify both the printer and your computer are connected to the same Wi-Fi network name (SSID).' },
    ],
  },
  brother: {
    wireless: [
      { name: 'Power on the Brother printer', text: 'Press the power button and wait for initialization. For laser models, allow extra time for the drum to warm up.' },
      { name: 'Access Network settings', text: 'Press the Menu button. Navigate to Network > WLAN > Setup Wizard. When asked to enable wireless, select Yes.' },
      { name: 'Select your Wi-Fi network', text: 'Use arrow keys to scroll through detected networks and select your Wi-Fi name. For hidden networks, select <New SSID> to enter it manually.' },
      { name: 'Enter your Wi-Fi password', text: 'Enter your Wi-Fi password using the printer keypad. Hold a key to cycle through characters. Press OK when done.' },
      { name: 'Confirm connection', text: 'The display shows "Connected" when the Brother printer joins your Wi-Fi network.' },
      { name: 'Install Full Driver & Software Package', text: 'Download the Full Driver & Software Package from support.brother.com and install it on your computer.' },
    ],
    driver: [
      { name: 'Go to Brother Support', text: 'Navigate to support.brother.com and select your country or region.' },
      { name: 'Search your Brother model', text: 'Enter your printer model number (e.g., HL-L2350DW, MFC-J995DW) in the model search field.' },
      { name: 'Select your operating system', text: 'Choose your OS from the dropdown. Brother supports Windows 10, Windows 11, macOS, and Linux.' },
      { name: 'Download Full Driver & Software Package', text: 'Click Downloads and download the Full Driver & Software Package — includes printer driver, scanner, and utilities.' },
      { name: 'Run the Brother installer', text: 'Open the installer. Accept the license agreement. Select "Wireless Network Connection" as the connection type.' },
      { name: 'Select printer and finish', text: 'Select your Brother printer from the detected devices. Follow remaining prompts and print a test page.' },
    ],
    troubleshoot: [
      { name: 'Brother Printer Shows Offline', text: 'Open the print queue for the Brother printer and uncheck "Use Printer Offline" under the Printer menu. Print a network configuration report to verify Wi-Fi.' },
      { name: 'Drum Unit Replace Warning', text: 'If the drum is new, reset the drum counter: open the front cover, press and hold OK for 4 seconds until "Accepted" appears.' },
      { name: 'Toner Low on New Cartridge', text: 'Open the front cover and close it again to trigger re-detection. Remove the cartridge, rock it side-to-side to distribute toner, and reinsert.' },
      { name: 'Cannot Connect to 5GHz Wi-Fi', text: 'Brother laser printers support only 2.4GHz Wi-Fi. Log into your router and separate the 2.4GHz and 5GHz networks, then connect the printer to 2.4GHz.' },
    ],
    offline: [
      { name: 'Restart printer and computer', text: 'Restart the Brother printer and your computer completely.' },
      { name: 'Print a network configuration report', text: 'Press and hold the Wi-Fi button for 3 seconds on most models to print the network report and verify the Wi-Fi connection.' },
      { name: 'Disable offline mode', text: 'Open the print queue, click Printer menu, and uncheck "Use Printer Offline."' },
      { name: 'Remove and reinstall driver', text: 'Uninstall the Brother driver via Control Panel > Programs, then re-download and reinstall the Full Driver Package from support.brother.com.' },
    ],
  },
  lexmark: {
    wireless: [
      { name: 'Power on the printer', text: 'Press the power button and wait for the printer to fully initialize and display the home screen.' },
      { name: 'Access wireless settings', text: 'On the printer control panel, navigate to Settings > Network/Ports > Wireless.' },
      { name: 'Select your network', text: 'Select Network Name and choose your Wi-Fi network name (SSID) from the list.' },
      { name: 'Enter your password', text: 'Enter your Wi-Fi password carefully (passwords are case-sensitive). Save the settings.' },
      { name: 'Confirm connection', text: 'A confirmation message will appear when connected. The wireless indicator light will be steady.' },
      { name: 'Install Lexmark software', text: 'Download the Lexmark setup software from lexmark.com/support to complete driver installation on your computer.' },
    ],
    driver: [
      { name: 'Visit Lexmark Support', text: 'Open lexmark.com/support in your browser.' },
      { name: 'Enter your printer model', text: 'Type your Lexmark printer model number and select it from the results.' },
      { name: 'Select your OS', text: 'Choose your operating system from the dropdown.' },
      { name: 'Download the driver', text: 'Download the Universal Print Driver or model-specific driver package.' },
      { name: 'Run the installer', text: 'Open the installer and follow the on-screen prompts. Select wireless as the connection type when prompted.' },
      { name: 'Complete setup', text: 'The installer will detect your Lexmark printer on the network. Follow remaining prompts and print a test page.' },
    ],
    troubleshoot: [
      { name: 'Printer Not Responding', text: 'Restart the printer and ensure it is connected to the same Wi-Fi network as your computer.' },
      { name: 'Driver Issues', text: 'Uninstall the current Lexmark driver via Control Panel, restart, and reinstall the latest driver from lexmark.com/support.' },
      { name: 'Paper Jam', text: 'Turn off the printer, open all access covers, and gently remove jammed paper in the direction of paper travel.' },
      { name: 'Poor Print Quality', text: 'Run the print quality diagnostic from the printer settings menu. Replace toner if low.' },
    ],
    offline: [
      { name: 'Restart both devices', text: 'Restart the Lexmark printer and your computer.' },
      { name: 'Check network connection', text: 'Verify the printer shows a steady network indicator. Navigate to Settings > Network/Ports to check connection status.' },
      { name: 'Remove and re-add the printer', text: 'In Windows Settings > Printers & scanners, remove the Lexmark printer and add it again.' },
      { name: 'Reinstall the driver', text: 'Download and reinstall the latest driver from lexmark.com/support if the problem persists.' },
    ],
  },
  samsung: {
    wireless: [
      { name: 'Power on the printer', text: 'Press the power button and wait for the printer to initialize.' },
      { name: 'Use WPS button', text: 'Press the WPS button on the Samsung printer for 2 seconds, then press the WPS button on your router within 2 minutes.' },
      { name: 'Or use Samsung Easy Printer Manager', text: 'Download Samsung Easy Printer Manager (Windows). Open the app, select your printer, and follow the wireless connection setup.' },
      { name: 'Note for newer Samsung printers', text: 'If your Samsung printer was purchased after 2017, check hp.com/support — Samsung\'s printer division is now part of HP and may use HP drivers.' },
      { name: 'Confirm connection', text: 'The network indicator light will be steady when connected to Wi-Fi.' },
      { name: 'Add printer to your computer', text: 'Go to Settings > Printers & scanners > Add device, select your Samsung printer, and complete the setup.' },
    ],
    driver: [
      { name: 'Visit HP Support', text: 'For Samsung printers (acquired by HP in 2017), go to hp.com/support and search your Samsung printer model number.' },
      { name: 'Or visit Samsung Support', text: 'For older Samsung printers, check samsung.com/us/support or look for drivers via Windows Update.' },
      { name: 'Select your OS', text: 'Choose your operating system version from the dropdown.' },
      { name: 'Download the driver', text: 'Download the recommended driver package for your Samsung printer model.' },
      { name: 'Run the installer', text: 'Open the installer and follow the prompts. Select wireless as the connection type.' },
      { name: 'Complete setup', text: 'The installer detects your Samsung printer on the network. Complete setup and print a test page.' },
    ],
    troubleshoot: [
      { name: 'Driver Compatibility', text: 'Check hp.com/support for the latest drivers — Samsung printers now fall under HP support for models made after 2017.' },
      { name: 'Wi-Fi Connection Issues', text: 'Samsung printers use 2.4GHz Wi-Fi only. Ensure you are connecting to the 2.4GHz band on your router.' },
      { name: 'Printer Offline Error', text: 'Remove and re-add the printer in Windows Settings > Printers & scanners. Reinstall the driver if needed.' },
      { name: 'Print Quality Problems', text: 'Run the print quality report from the printer settings menu. Replace the toner cartridge if low or empty.' },
    ],
    offline: [
      { name: 'Restart both devices', text: 'Restart the Samsung printer and your computer completely.' },
      { name: 'Check Wi-Fi connection', text: 'Verify the network indicator light is steady. If blinking, re-run the wireless setup.' },
      { name: 'Remove and re-add printer', text: 'In Windows Settings > Printers & scanners, remove the Samsung printer and add it again.' },
      { name: 'Update the driver', text: 'Download the latest driver from hp.com/support (for post-2017 models) or Windows Update.' },
    ],
  },
}

const BRAND_GUIDE_LINKS: Record<string, Record<TaskType, string>> = {
  hp: { wireless: '/hp-printer-setup/#wireless-setup', driver: '/driver-download/?brand=hp', troubleshoot: '/hp-printer-setup/#common-issues', offline: '/printer-offline/' },
  canon: { wireless: '/canon-printer-setup/#wireless-setup', driver: '/driver-download/?brand=canon', troubleshoot: '/canon-printer-setup/#common-issues', offline: '/printer-offline/' },
  epson: { wireless: '/epson-printer-setup/#wireless-setup', driver: '/driver-download/?brand=epson', troubleshoot: '/epson-printer-setup/#common-issues', offline: '/printer-offline/' },
  brother: { wireless: '/brother-printer-setup/#wireless-setup', driver: '/driver-download/?brand=brother', troubleshoot: '/brother-printer-setup/#common-issues', offline: '/printer-offline/' },
  lexmark: { wireless: '/lexmark-printer-setup/', driver: '/driver-download/?brand=lexmark', troubleshoot: '/printer-troubleshooting/', offline: '/printer-offline/' },
  samsung: { wireless: '/samsung-printer-setup/', driver: '/driver-download/?brand=samsung', troubleshoot: '/printer-troubleshooting/', offline: '/printer-offline/' },
}

const TASK_OPTIONS: TaskOption[] = [
  {
    id: 'wireless',
    label: 'Wireless / Wi-Fi Setup',
    description: 'Connect my printer to Wi-Fi',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    id: 'driver',
    label: 'Driver Installation',
    description: 'Download and install the printer driver',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    id: 'troubleshoot',
    label: 'Troubleshooting',
    description: 'Fix a problem with my printer',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'offline',
    label: 'Printer Offline Fix',
    description: 'My printer shows as offline',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
]

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100)
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          Step {step} of {total}
        </span>
        <span className="text-xs text-brand-muted">{pct}% complete</span>
      </div>
      <div className="h-1.5 bg-primary-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function SetupWizard() {
  const [screen, setScreen] = useState<WizardScreen>('brand')
  const [selectedBrand, setSelectedBrand] = useState<BrandOption | null>(null)
  const [selectedTask, setSelectedTask] = useState<TaskOption | null>(null)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const reset = () => {
    setScreen('brand')
    setSelectedBrand(null)
    setSelectedTask(null)
    setCompletedSteps(new Set())
  }

  const steps =
    selectedBrand && selectedTask
      ? WIZARD_CONTENT[selectedBrand.id]?.[selectedTask.id] ?? []
      : []

  const fullGuideHref =
    selectedBrand && selectedTask
      ? BRAND_GUIDE_LINKS[selectedBrand.id]?.[selectedTask.id] ?? '/printer-setup/'
      : '/printer-setup/'

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white border-y border-brand-border py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Interactive Setup Guide
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">
            Set Up Your Printer in Minutes
          </h2>
          <p className="text-brand-muted text-base max-w-xl mx-auto">
            Select your brand and what you need help with — we will walk you through each step.
          </p>
        </div>

        {/* Wizard card */}
        <div className="bg-white rounded-2xl border border-brand-border shadow-card p-6 md:p-8">

          {/* SCREEN: Brand selection */}
          {screen === 'brand' && (
            <div>
              <ProgressBar step={1} total={3} />
              <h3 className="text-lg font-bold text-brand-text mb-6">Select your printer brand</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => {
                      setSelectedBrand(brand)
                      setScreen('task')
                    }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-brand-border hover:border-primary hover:shadow-card-hover hover:bg-primary-50 transition-all duration-200 text-center group"
                  >
                    <div className={`w-12 h-12 rounded-full ${brand.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {brand.initial}
                    </div>
                    <span className="font-semibold text-brand-text text-sm group-hover:text-primary transition-colors">
                      {brand.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN: Task selection */}
          {screen === 'task' && selectedBrand && (
            <div>
              <ProgressBar step={2} total={3} />
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full ${selectedBrand.color} flex items-center justify-center text-white font-bold text-xs`}>
                  {selectedBrand.initial}
                </div>
                <h3 className="text-lg font-bold text-brand-text">
                  What do you need help with?
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TASK_OPTIONS.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => {
                      setSelectedTask(task)
                      setScreen('steps')
                    }}
                    className="flex items-start gap-4 p-4 rounded-xl border-2 border-brand-border hover:border-primary hover:shadow-card-hover hover:bg-primary-50 transition-all duration-200 text-left group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      {task.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-text text-sm group-hover:text-primary transition-colors">
                        {task.label}
                      </p>
                      <p className="text-xs text-brand-muted mt-0.5">{task.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setScreen('brand')}
                className="mt-4 text-sm text-brand-muted hover:text-primary transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to brand selection
              </button>
            </div>
          )}

          {/* SCREEN: Steps */}
          {screen === 'steps' && selectedBrand && selectedTask && (
            <div>
              <ProgressBar step={3} total={3} />
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${selectedBrand.color} flex items-center justify-center text-white font-bold text-xs`}>
                    {selectedBrand.initial}
                  </div>
                  <h3 className="text-lg font-bold text-brand-text">
                    {selectedBrand.name} — {selectedTask.label}
                  </h3>
                </div>
                <span className="text-xs text-brand-muted bg-surface px-3 py-1 rounded-full border border-brand-border">
                  {completedSteps.size}/{steps.length} completed
                </span>
              </div>

              <p className="text-sm text-brand-muted mb-5">
                Check each step as you complete it. All steps are required for a successful setup.
              </p>

              <ol className="space-y-3">
                {steps.map((step, index) => {
                  const done = completedSteps.has(index)
                  return (
                    <li
                      key={index}
                      className={`flex gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        done
                          ? 'border-brand-success bg-emerald-50'
                          : 'border-brand-border bg-surface hover:border-primary hover:bg-primary-50'
                      }`}
                      onClick={() => toggleStep(index)}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        done ? 'bg-brand-success text-white' : 'bg-primary text-white'
                      }`}>
                        {done ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm mb-1 transition-colors ${done ? 'text-emerald-700 line-through decoration-emerald-400' : 'text-brand-text'}`}>
                          {step.name}
                        </p>
                        <p className={`text-xs leading-relaxed transition-colors ${done ? 'text-emerald-600' : 'text-brand-muted'}`}>
                          {step.text}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ol>

              {/* Completion message */}
              {completedSteps.size === steps.length && steps.length > 0 && (
                <div className="mt-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-emerald-800 text-sm">All steps completed!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Your {selectedBrand.name} printer should now be set up. Print a test page to confirm.
                    </p>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={fullGuideHref}
                  className="flex-1 text-center px-5 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
                >
                  View Full {selectedBrand.name} Guide →
                </a>
                <button
                  onClick={reset}
                  className="flex-1 px-5 py-3 bg-surface text-brand-text rounded-xl font-semibold text-sm border border-brand-border hover:border-primary hover:text-primary transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
