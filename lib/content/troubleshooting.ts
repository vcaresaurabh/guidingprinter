import type { TroubleshootingData, RelatedLink } from '@/types'
import { BRAND_MAP } from './brands'

export const TROUBLESHOOTING_ISSUES: TroubleshootingData[] = [
  {
    slug: 'printer-offline',
    name: 'Printer Offline Fix',
    headline: 'How to Fix a Printer Showing Offline — Step-by-Step Guide',
    metaTitle: 'Printer Offline Fix — Bring Your Printer Back Online | GuidingPrinter',
    metaDescription:
      'Fix a printer showing offline on Windows 10, Windows 11, and macOS. Step-by-step troubleshooting for HP, Canon, Epson, and Brother printers.',
    intro:
      'A printer showing "Offline" means your computer has lost communication with the printer. This is one of the most common printer problems and is almost always fixable in a few minutes without reinstalling anything.',
    lastUpdated: '2025-05-14',
    readTime: '5 min read',
    symptoms: [
      'Printer status shows "Offline" in Windows Printers & Scanners',
      'Print jobs are stuck in the queue and not printing',
      '"Use Printer Offline" appears checked in the print queue menu',
      'Printer worked before but stopped after a restart or Wi-Fi change',
    ],
    quickFix:
      'Restart both your printer and computer — this resolves the majority of printer offline errors in under 2 minutes.',
    steps: [
      {
        name: 'Restart printer and computer',
        text: 'Power off the printer completely (not just sleep mode), wait 30 seconds, and power it back on. Restart your computer as well. This re-establishes the communication channel and is the fix for most offline printer issues.',
      },
      {
        name: 'Check the Wi-Fi or USB connection',
        text: 'For wireless printers: check the wireless indicator light. Solid blue or green means connected; blinking or off means disconnected. If disconnected, go to the printer control panel > Settings > Wireless Setup Wizard and reconnect. For USB: unplug and reconnect the cable, try a different USB port.',
      },
      {
        name: 'Disable "Use Printer Offline" mode',
        text: 'In Windows, go to Settings > Bluetooth & devices > Printers & scanners. Select your printer and click Open print queue. In the queue window, click Printer in the menu bar and ensure "Use Printer Offline" is unchecked.',
      },
      {
        name: 'Clear the print queue',
        text: 'In the print queue window, select all stuck jobs (Ctrl+A) and press Delete. Stuck jobs prevent new jobs from processing and can hold the printer in an offline state indefinitely.',
      },
      {
        name: 'Restart the Print Spooler service',
        text: 'Press Win+R, type services.msc, and press Enter. Find "Print Spooler" in the list, right-click it, and select Restart. The spooler manages all print communication — restarting it resolves many offline states without reinstalling anything.',
      },
      {
        name: 'Reinstall the printer driver',
        text: "If still offline: go to Settings > Printers & scanners, select your printer, and click Remove. Visit the manufacturer's support website, download the latest driver for your model, and reinstall. Add the printer again after installation.",
      },
    ],
    advancedSteps: [
      {
        name: 'Assign a static IP address to the printer',
        text: "A changing IP address is the most common cause of recurring offline errors. Log into your router admin panel (usually 192.168.1.1), find your printer in the DHCP client list, and assign it a static (reserved) IP. Then update the printer port in Windows (Printer Properties > Ports tab) to match the static IP.",
      },
      {
        name: 'Reset printing system on Mac',
        text: 'On macOS: go to System Settings > Printers & Scanners. Ctrl-click anywhere in the printers list and select "Reset printing system." This removes all printers and drivers. Re-add your printer by clicking the + button — macOS will reinstall the driver automatically.',
      },
    ],
    faqs: [
      {
        question: 'Why does my printer keep going offline?',
        answer:
          "Recurring offline issues are typically caused by a changing IP address (router reassigns it after restart), an unstable Wi-Fi connection, or a driver conflict. Fix permanently by assigning a static IP address to the printer in your router settings and setting the printer as the default printer in Windows.",
      },
      {
        question: 'How do I fix a printer offline error on Mac?',
        answer:
          'On Mac, go to System Settings > Printers & Scanners. Delete the printer (click the – button) and add it again (click the + button). macOS reinstalls the driver automatically. For persistent issues, right-click the printer list and select "Reset printing system."',
      },
      {
        question: 'Can a printer be offline even when connected to Wi-Fi?',
        answer:
          "Yes. A printer can be connected to Wi-Fi but still appear offline on your computer if its IP address has changed and the computer is still using the old address. Remove and re-add the printer on your computer, or assign a static IP to the printer in your router settings.",
      },
      {
        question: "How do I clear the print queue when jobs won't delete?",
        answer:
          "If print jobs won't delete: stop the Print Spooler (Win+R > services.msc > Print Spooler > Stop). Navigate to C:\\Windows\\System32\\spool\\PRINTERS and delete all files (not the folder). Restart the Print Spooler service. The queue will be empty.",
      },
    ],
    relatedIssues: ['printer-not-printing', 'print-queue-stuck', 'printer-wifi-issues'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-not-printing',
    name: 'Printer Not Printing Fix',
    headline: 'Printer Not Printing? Fix It in Minutes — Complete Guide',
    metaTitle: 'Printer Not Printing Fix — Step-by-Step Troubleshooting Guide | GuidingPrinter',
    metaDescription:
      'Fix a printer that is not printing on Windows 10, Windows 11, and macOS. Covers stuck queues, default printer settings, spooler issues, and driver problems.',
    intro:
      "Your printer is powered on and showing Ready, but nothing prints when you send a job. This frustrating issue almost always has a software-side cause — not a hardware failure. Follow these steps to diagnose and fix a printer that won't print.",
    lastUpdated: '2025-05-14',
    readTime: '6 min read',
    symptoms: [
      'Printer is powered on and shows Ready, but nothing prints',
      'Print jobs disappear from the queue immediately without printing',
      'Error light flashing with no visible paper jam or ink issue',
      'Printer printed fine yesterday but stopped working today',
    ],
    quickFix:
      "Check that the correct printer is set as the Default Printer in Windows — most 'not printing' issues are caused by jobs being sent to a different or virtual printer.",
    steps: [
      {
        name: 'Set the correct printer as default',
        text: 'Go to Settings > Bluetooth & devices > Printers & scanners. Find your physical printer, click on it, and select "Set as default." Check that you are not accidentally printing to Microsoft Print to PDF, XPS Document Writer, or an old printer entry that no longer exists.',
      },
      {
        name: 'Check ink levels and paper',
        text: "Confirm the printer has paper loaded correctly. Check ink or toner levels via the printer's control panel or the manufacturer app (HP Smart, Canon Quick Menu, Epson Status Monitor). A printer with critically low ink or no paper will refuse to print and may not show a clear error.",
      },
      {
        name: 'Clear the print queue',
        text: 'Go to Settings > Printers & scanners > select your printer > Open print queue. Delete all jobs (Ctrl+A then Delete). A corrupted job at the top of the queue blocks all subsequent jobs, making the printer appear unresponsive even when healthy.',
      },
      {
        name: 'Restart the Print Spooler service',
        text: 'Press Win+R, type services.msc, Enter. Find Print Spooler, right-click, select Restart. The Print Spooler is the Windows service that manages print jobs. A crashed spooler prevents any printing even when the printer hardware is fully operational.',
      },
      {
        name: 'Verify the printer connection',
        text: "For USB: unplug and reconnect the cable, try a different USB port. For Wi-Fi: confirm the printer and computer are on the same network. Print the printer's network configuration page to verify its IP address and connection status.",
      },
      {
        name: 'Reinstall or update the driver',
        text: 'Open Device Manager (Win+X > Device Manager > Print queues). Right-click your printer and select Update driver. If no update found, visit the manufacturer website, download the latest driver, uninstall the existing one, and reinstall from the fresh download.',
      },
    ],
    advancedSteps: [
      {
        name: 'Run the Windows Printer Troubleshooter',
        text: 'Go to Settings > System > Troubleshoot > Other troubleshooters. Find Printer and click Run. Windows automatically checks for and fixes common printer communication issues, driver problems, and spooler errors. This can resolve issues that manual steps miss.',
      },
      {
        name: 'Check for Windows Update driver conflicts',
        text: "A recent Windows Update may have replaced your printer driver with a generic incompatible version. Go to Settings > Windows Update > Update history and check if a recent update coincides with when printing stopped. Visit the manufacturer's website for a driver compatible with the updated Windows version.",
      },
    ],
    faqs: [
      {
        question: "Why does my printer say Ready but won't print?",
        answer:
          "If the printer displays Ready but won't print, the issue is almost always on the computer side. Check that the correct printer is set as default, the print queue is clear, and the Print Spooler service is running. Also verify you are sending the job to the physical printer and not a virtual printer like PDF or XPS.",
      },
      {
        question: 'Why do my print jobs disappear without printing?',
        answer:
          'Print jobs that vanish instantly are usually being sent to a virtual printer (Microsoft Print to PDF, XPS Document Writer) instead of the physical printer. Check the printer selection in the print dialog box. Also check the Documents folder for unexpected PDF files that confirm the misdirection.',
      },
      {
        question: 'How do I force my printer to print?',
        answer:
          'To force a print: clear the queue completely, restart the Print Spooler, set the printer as default, then go to Settings > Printers & scanners > select printer > Manage > Print a test page. This bypasses the application and sends directly to the printer driver, isolating whether the issue is app-specific or system-wide.',
      },
      {
        question: 'My printer worked yesterday but not today. What changed?',
        answer:
          "Common overnight changes that break printing: a Windows Update installed a driver update overnight, the printer IP address changed (router DHCP reassignment), or the printer sleep mode timed out and entered a non-responsive state. Restart both devices and check Device Manager for a yellow warning icon on the printer.",
      },
    ],
    relatedIssues: ['printer-offline', 'print-queue-stuck', 'printer-driver-unavailable'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-wifi-issues',
    name: 'Printer Wi-Fi Connection Issues',
    headline: 'Printer Not Connecting to Wi-Fi? Complete Fix Guide',
    metaTitle: 'Printer Wi-Fi Connection Fix — Troubleshoot Wireless Printer Issues | GuidingPrinter',
    metaDescription:
      'Fix wireless printer connection issues on Windows and Mac. Solve Wi-Fi setup failures, dropped connections, and network detection problems for all printer brands.',
    intro:
      "Wi-Fi printer connection problems are among the most common setup issues. Whether your printer won't connect to your network during setup or keeps dropping its connection, this guide covers every fix — from simple restarts to static IP assignment.",
    lastUpdated: '2025-05-14',
    readTime: '7 min read',
    symptoms: [
      'Printer Wi-Fi indicator light is off or blinking rapidly',
      'Wireless Setup Wizard shows "Connection failed" or "Network not found"',
      'Printer connects to Wi-Fi then drops the connection after a few minutes',
      'Computer cannot find the printer on the network after successful Wi-Fi connection',
    ],
    quickFix:
      'Restart your router and printer, then wait 60 seconds before reconnecting — most Wi-Fi connection failures are caused by a stale router session and resolve with a fresh restart.',
    steps: [
      {
        name: 'Restart router and printer',
        text: 'Power off the printer. Unplug your router, wait 30 seconds, and plug it back in. Wait for the router to fully restart (all indicator lights stable, usually 60–90 seconds). Then power the printer back on and allow it to fully initialize before attempting wireless setup.',
      },
      {
        name: 'Verify the Wi-Fi band (2.4GHz required)',
        text: 'Most printers only support 2.4GHz Wi-Fi — not 5GHz. If your router broadcasts both bands (often shown as "NetworkName" and "NetworkName_5G" or both with the same name), connect the printer to the 2.4GHz band specifically. In your router settings, temporarily disable the 5GHz band during printer setup if needed.',
      },
      {
        name: 'Re-run the Wireless Setup Wizard',
        text: "On the printer control panel, navigate to Settings > Network > Wireless Setup Wizard (exact path varies by brand — see your model's manual). Select your Wi-Fi network name from the list. Enter your password carefully — passwords are case-sensitive and the on-screen keyboard can be tricky.",
      },
      {
        name: 'Verify your Wi-Fi password and network name',
        text: "Double-check the password by testing it on another device. Ensure your SSID (Wi-Fi name) does not contain special characters that the printer keyboard cannot type. If your password is complex, consider temporarily setting a simpler router password for initial setup, then changing it back after the printer connects.",
      },
      {
        name: 'Check router security settings',
        text: 'Log into your router admin panel and check: MAC address filtering (add the printer MAC if filtering is enabled), AP Isolation (disable it — this setting prevents devices on the same network from seeing each other), and any firewall rules that might block printer discovery (UDP port 5353 for mDNS/Bonjour).',
      },
      {
        name: 'Assign a static IP and reinstall the driver',
        text: "After the printer connects to Wi-Fi, log into your router and assign the printer a static (reserved) IP address based on its MAC address. Then reinstall the printer driver on your computer — choose to connect by IP address rather than auto-discovery. This permanently prevents future IP-change-related disconnections.",
      },
    ],
    advancedSteps: [
      {
        name: 'Move printer next to router for initial setup',
        text: "If setup consistently fails, temporarily place the printer directly next to the router during the initial Wi-Fi connection attempt. A weak signal during WPA2 handshake causes intermittent setup failures even with correct credentials. Once connected, move the printer to its normal location — the connection will persist.",
      },
      {
        name: 'Check for Wi-Fi interference',
        text: "Microwaves, cordless phones, and neighboring networks can disrupt the 2.4GHz band. In your router settings, manually set the Wi-Fi channel to 1, 6, or 11 (non-overlapping for 2.4GHz). If your neighborhood has many networks on those channels, a Wi-Fi analyzer app can identify the least congested channel.",
      },
    ],
    faqs: [
      {
        question: 'Why does my printer keep disconnecting from Wi-Fi?',
        answer:
          "A printer that repeatedly disconnects is usually caused by a changing DHCP IP address, the printer entering deep sleep mode and losing the Wi-Fi session, or poor signal strength. Fix permanently: assign a static IP via your router, reduce the printer's auto-off or sleep timer in its settings, and ensure the printer is within reasonable range of the router.",
      },
      {
        question: "Why won't my printer connect to my new router?",
        answer:
          "After changing your router or router password, the printer must be reconnected manually. Go to the printer control panel > Wireless Setup Wizard and select the new network name. The printer does not migrate settings automatically. Also ensure the new router uses WPA2 security (not WEP) and broadcasts a 2.4GHz band.",
      },
      {
        question: 'Can I use a Wi-Fi extender or mesh node with my printer?',
        answer:
          'Yes, but this often causes issues. Many extenders create a separate network segment, and printers on the extender cannot communicate with computers on the main router network. If possible, connect both the printer and computers to the same router or mesh node. If using an extender, ensure it bridges (not NATs) the connection.',
      },
      {
        question: "How do I print the printer's network configuration page?",
        answer:
          "The network configuration page shows the printer's IP address, MAC address, and Wi-Fi connection status. To print: on HP printers, hold the Wireless and Cancel buttons simultaneously. On Canon: Settings > Device Settings > Device Information. On Epson: Settings > Network Status. On Brother: Menu > Print Reports > Network Config. This confirms whether the printer is actually connected.",
      },
    ],
    relatedIssues: ['printer-offline', 'printer-not-printing', 'printer-driver-unavailable'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-driver-unavailable',
    name: 'Printer Driver Unavailable Fix',
    headline: 'How to Fix "Driver Unavailable" Printer Error on Windows',
    metaTitle: 'Printer Driver Unavailable Fix — Reinstall & Resolve on Windows 10/11 | GuidingPrinter',
    metaDescription:
      'Fix the "Driver unavailable" printer error on Windows 10 and Windows 11. Download the correct driver and resolve printer driver conflicts step by step.',
    intro:
      'The "Driver unavailable" error appears when Windows cannot find or load the printer driver needed to communicate with the printer. This usually happens after a Windows Update, OS upgrade, or when the driver becomes corrupted. The fix is straightforward: reinstall the correct driver from the manufacturer.',
    lastUpdated: '2025-05-14',
    readTime: '6 min read',
    symptoms: [
      '"Driver unavailable" error message when trying to print',
      'Yellow warning triangle (!) on the printer icon in Device Manager',
      'Printer stopped working after a Windows Update',
      '"No driver found" message in Printers & Scanners settings',
    ],
    quickFix:
      "Download and reinstall the printer driver from the manufacturer's official website — Windows generic drivers are often incompatible with specific printer models.",
    steps: [
      {
        name: 'Check Device Manager for the error code',
        text: 'Press Win+X and select Device Manager. Expand "Print queues" (or "Printers"). If your printer shows a yellow warning icon (!), right-click it and select Properties to see the error code. Common codes: Code 28 (driver not installed), Code 39 (driver corrupted or missing), Code 43 (driver failed to load).',
      },
      {
        name: 'Uninstall the broken driver',
        text: 'In Device Manager, right-click the printer and select Uninstall device. Check "Delete the driver software for this device" if that checkbox appears. Click Uninstall. Also go to Settings > Printers & scanners, find your printer, and click Remove device to clean up the system entry.',
      },
      {
        name: 'Download the official driver',
        text: "Visit your printer manufacturer's support site: hp.com/support, usa.canon.com/support, epson.com/support, or support.brother.com. Enter your exact printer model number (e.g., HP DeskJet 4155e — not just HP DeskJet). Select your Windows version and bit type. Download the Full Feature Software or Full Driver Package.",
      },
      {
        name: 'Run the installer as Administrator',
        text: 'Right-click the downloaded installer file and select "Run as administrator." Running without admin rights is a common cause of silent driver installation failures on Windows 10 and 11. Follow the installation wizard. Choose your connection type (USB or Wireless) when prompted.',
      },
      {
        name: 'Add the printer after driver installation',
        text: 'After the driver installs, go to Settings > Bluetooth & devices > Printers & scanners > Add device. Allow Windows to discover your printer on the network or via USB. Select it from the list and click Add device. The printer should now appear without a warning icon.',
      },
      {
        name: 'Restart and verify',
        text: 'Restart your computer after driver installation. Open Device Manager and confirm there is no warning icon on the printer under Print queues. Go to Settings > Printers & scanners, select the printer, and click Print a test page to verify the driver is fully functional.',
      },
    ],
    advancedSteps: [
      {
        name: 'Remove old drivers using Print Management',
        text: 'Press Win+R, type printmanagement.msc, Enter. In the left panel, expand All Drivers. Remove all old entries for your printer manufacturer. This clears cached driver packages that silently conflict with new installations — a step that the standard uninstall process often skips.',
      },
      {
        name: 'Clear the Windows driver store',
        text: 'Run Command Prompt as Administrator. Type pnputil /enum-drivers and find your printer\'s "oem#.inf" entry. Remove it with: pnputil /delete-driver oem#.inf /uninstall (replace # with the actual number). This removes the cached driver from the Windows driver store, ensuring the fresh installation has no remnants to conflict with.',
      },
    ],
    faqs: [
      {
        question: 'Why did my printer driver become unavailable after a Windows Update?',
        answer:
          "Windows updates sometimes replace third-party printer drivers with generic Microsoft versions that lack full model-specific functionality. After a Windows Update breaks your printer, visit the manufacturer's website and download the latest driver package released for Windows 10/11. Manufacturer drivers always take priority over Windows generic drivers.",
      },
      {
        question: "How do I find my printer's exact model number for driver download?",
        answer:
          'The model number is on a label on the printer body — typically on the front panel, back, or bottom. It includes a specific number (e.g., HP DeskJet 4155e, Canon PIXMA MG3620). Do not use just the series name — the full model number is required to download the correct driver that matches your hardware revision.',
      },
      {
        question: 'Can I use a universal print driver instead of the model-specific one?',
        answer:
          "Yes. HP, Epson, and Lexmark offer Universal Print Drivers (UPD) that work across multiple models. These are useful in corporate environments with many printer models. However, universal drivers may lack scanning support, ink monitoring, and advanced print settings. For home users, the model-specific Full Feature driver is recommended.",
      },
      {
        question: "The driver installed without errors but the printer still won't work. What next?",
        answer:
          "If the driver installed cleanly but the printer still won't work: check Device Manager for a warning icon. Try printing a test page directly from Settings > Printers & scanners > printer > Manage. If the test page fails, the issue is likely a connection problem (USB cable, Wi-Fi network) rather than the driver. Check the physical connection next.",
      },
    ],
    relatedIssues: ['printer-not-printing', 'printer-offline', 'printer-wifi-issues'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'scanner-not-working',
    name: 'Scanner Not Working Fix',
    headline: 'Scanner Not Working or Not Detected? Complete Fix Guide',
    metaTitle: 'Scanner Not Working Fix — Troubleshoot Printer Scanner on Windows & Mac | GuidingPrinter',
    metaDescription:
      'Fix a printer scanner not working or not detected on Windows 10, Windows 11, and macOS. Covers driver installation, WIA service, and network scanning issues.',
    intro:
      "Your printer prints fine but the scanner won't work or isn't detected. This is almost always caused by incomplete driver installation — the scanner requires a separate driver component that is not included in the basic print driver. This guide walks you through every fix.",
    lastUpdated: '2025-05-14',
    readTime: '6 min read',
    symptoms: [
      'Scanner is not detected in Windows or Mac scanning apps',
      '"No scanner found" or "Scanner unavailable" error message',
      'Scan button on the printer does nothing when pressed',
      'Scanner worked before but stopped after a driver update or Windows update',
    ],
    quickFix:
      "Install the Full Driver & Software Package from the manufacturer's website — most scanner 'not found' errors are caused by installing only the basic print driver, which does not include the scanner component.",
    steps: [
      {
        name: 'Verify the physical connection',
        text: "For USB: confirm the cable is firmly connected at both ends. Try a different USB cable and a different USB port on your computer. For wireless: ensure the printer is connected to Wi-Fi and that your computer is on the same network. The printer and computer must be on the same subnet for wireless scanning to work.",
      },
      {
        name: 'Install the Full Driver & Software Package',
        text: "Visit your manufacturer's support site and download the Full Feature Software or Full Driver & Software Package — not the basic driver. This includes the TWAIN/WIA scanner driver, manufacturer scanning app (HP Scan, Canon IJ Scan Utility, Epson Scan 2), and all supporting components required for scanning.",
      },
      {
        name: 'Check Windows Image Acquisition (WIA) service',
        text: 'Press Win+R, type services.msc, Enter. Find "Windows Image Acquisition (WIA)." Ensure its Startup Type is Automatic and its Status is Running. Right-click and select Start if stopped. This service is required for all scanning in Windows — if WIA is not running, no scanner will be detected.',
      },
      {
        name: 'Use the manufacturer scanning app instead of Windows Fax and Scan',
        text: 'Windows Fax and Scan often fails to detect network scanners. Try the manufacturer app: HP Smart (includes HP Scan), Canon IJ Scan Utility, Epson Scan 2, or Brother iPrint&Scan. These apps are specifically designed for your hardware and communicate directly with the device driver.',
      },
      {
        name: 'Check antivirus or firewall blocking',
        text: "Security software can block scanner communication ports. Temporarily disable your antivirus and try scanning. If scanning works with antivirus disabled, add the manufacturer's scanning application and UDP/TCP port 9220 (or 9100) to your security software's exception list.",
      },
      {
        name: 'Reinstall scanner drivers',
        text: "Uninstall the current printer software via Settings > Apps > find the manufacturer software > Uninstall. Restart the computer. Download a fresh Full Driver Package from the manufacturer website and reinstall. After installation, open Device Manager and expand Imaging Devices to confirm the scanner is listed without a warning icon.",
      },
    ],
    advancedSteps: [
      {
        name: 'Add scanner manually by IP address (network scanners)',
        text: "If the scanner is not auto-detected over Wi-Fi: open the scanning app and look for an option to add scanner manually by IP address. Print the printer's Network Configuration Page to find its IP address. Enter this IP directly in the scanning app to establish a direct connection.",
      },
      {
        name: 'Open firewall ports for network scanning',
        text: 'Network scanning requires specific ports: TCP 9220 (Epson scan), TCP 9100 (HP/Brother), and UDP 5353 (mDNS/Bonjour for discovery). If Windows Defender Firewall or a third-party firewall blocks these, printing may work but scanning fails. Add an inbound rule to allow these ports in Windows Defender Firewall Advanced Settings.',
      },
    ],
    faqs: [
      {
        question: "Why does my printer print fine but the scanner doesn't work?",
        answer:
          "Printing and scanning use separate driver components. Basic print drivers include only print functionality. The scanner requires a TWAIN or WIA driver that is only included in the Full Feature Software package. Download and install the full software package from the manufacturer's website to enable scanning.",
      },
      {
        question: 'How do I scan wirelessly to my computer?',
        answer:
          "For wireless scanning: ensure the full software package is installed and the printer is on the same Wi-Fi network as your computer. Open the manufacturer scanning app, select your printer from the scanner list. If it does not appear, add it manually using its IP address (found via the printer's network configuration page). Both devices must be on the same subnet.",
      },
      {
        question: "My scanner appears in Device Manager but won't scan. Why?",
        answer:
          "If the scanner shows in Device Manager without a warning icon but won't scan, the scanning software may be the issue rather than the driver. Uninstall and reinstall the manufacturer's scanning app. Also verify the Windows Image Acquisition (WIA) service is running. Try scanning from a different app (IrfanView, GIMP) to determine if the issue is app-specific or driver-level.",
      },
      {
        question: 'Can I scan from my phone using a wireless printer?',
        answer:
          "Yes. Most modern all-in-one printers support mobile scanning. Use the manufacturer app: HP Smart, Canon PRINT, Epson Smart Panel, or Brother iPrint&Scan. On Apple devices, Continuity Camera allows scanning directly to a Mac from an iPhone. Both the phone and printer must be on the same Wi-Fi network.",
      },
    ],
    relatedIssues: ['printer-not-printing', 'printer-driver-unavailable', 'printer-wifi-issues'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'print-queue-stuck',
    name: 'Print Queue Stuck Fix',
    headline: 'Print Queue Stuck? Clear It in Minutes — Complete Fix Guide',
    metaTitle: 'Print Queue Stuck Fix — Clear Stuck Print Jobs on Windows | GuidingPrinter',
    metaDescription:
      'Fix a stuck print queue on Windows 10 and Windows 11. Clear print jobs that won\'t delete, restart the Print Spooler, and prevent queue issues from recurring.',
    intro:
      'A stuck print queue is one of the most frustrating printer problems — jobs that refuse to delete block all printing until cleared. The root cause is almost always a frozen Print Spooler service or a corrupted print job. This guide gets your queue cleared in minutes.',
    lastUpdated: '2025-05-14',
    readTime: '5 min read',
    symptoms: [
      "Print jobs stuck in queue showing 'Deleting' but never disappear",
      "Queue appears empty but printer still says 'Printing'",
      'Printer stopped printing after a large or failed print job',
      'All new print jobs immediately show as error or stuck',
    ],
    quickFix:
      'Restart the Windows Print Spooler service — this clears a frozen queue in seconds without needing to restart your computer.',
    steps: [
      {
        name: 'Try deleting jobs from the queue',
        text: "Go to Settings > Bluetooth & devices > Printers & scanners. Select your printer and click Open print queue. Select all jobs (Ctrl+A) and press Delete. If jobs delete successfully, you're done. If they remain stuck on 'Deleting,' proceed to the next step.",
      },
      {
        name: 'Restart the Print Spooler service',
        text: 'Press Win+R, type services.msc, Enter. Scroll to "Print Spooler." Right-click and select Stop. Wait 5 seconds. Right-click again and select Start. Open the print queue — stuck jobs should now be gone. This is the fastest fix for a frozen queue.',
      },
      {
        name: 'Manually clear the spooler folder',
        text: 'If jobs persist after restarting the spooler: stop the Print Spooler service first (do NOT restart it yet). Open File Explorer and navigate to C:\\Windows\\System32\\spool\\PRINTERS. Delete all files inside this folder (do not delete the PRINTERS folder itself). Return to Services and Start the Print Spooler. The queue is now completely empty.',
      },
      {
        name: 'Power cycle the printer',
        text: "Power off the printer, wait 30 seconds, then power it back on. A stuck job sometimes persists because the printer has the job cached in its internal memory. A full power cycle clears the printer's internal buffer and ensures it starts fresh.",
      },
      {
        name: 'Re-send the print job',
        text: 'After clearing the queue and restarting the printer, verify it is set as the default printer in Windows. Re-send your document. Monitor the print queue to confirm the job appears, processes, and clears as the document prints.',
      },
      {
        name: 'Check for port configuration issues',
        text: "If print jobs consistently get stuck, the printer port may be misconfigured. Go to Control Panel > Devices and Printers. Right-click your printer > Printer Properties > Ports tab. Verify the correct port is selected: a WSD port for wireless printers, or the correct USB port for wired. A wireless printer pointing to an old IP address accepts jobs but never delivers them.",
      },
    ],
    advancedSteps: [
      {
        name: 'Use Command Prompt to force-clear the queue',
        text: 'Run Command Prompt as Administrator and execute these three commands in sequence:\n1. net stop spooler\n2. del /Q /F /S "%systemroot%\\System32\\spool\\PRINTERS\\*.*"\n3. net start spooler\nThis stops the service, deletes all queued job files, and restarts — all in one pass.',
      },
      {
        name: 'Identify and isolate problematic applications',
        text: "If a specific application consistently causes stuck jobs, the app's print output may be incompatible with the current driver. Test by printing to Microsoft Print to PDF — if that works without sticking, the issue is between the app and the printer driver. Update the driver and try adjusting the app's print settings (lower DPI, different paper size).",
      },
    ],
    faqs: [
      {
        question: "Why are my print jobs stuck and can't be deleted?",
        answer:
          "Print jobs get stuck when the Print Spooler service has crashed or frozen, when the printer is disconnected or offline, or when a corrupted job is blocking the queue. The fastest fix: stop the Print Spooler in services.msc, delete all files from C:\\Windows\\System32\\spool\\PRINTERS, then restart the Spooler. This clears the queue completely within 60 seconds.",
      },
      {
        question: 'How do I clear the print queue in Windows 11?',
        answer:
          'In Windows 11: go to Settings > Bluetooth & devices > Printers & scanners. Select your printer and click Open print queue. Select all jobs and press Delete. If jobs are stuck, press Win+R, type services.msc, find Print Spooler, right-click > Restart. Return to the queue and delete the remaining jobs.',
      },
      {
        question: 'How do I stop a print job that is already printing?',
        answer:
          "To stop a mid-print job: open the print queue (Settings > Printers & scanners > printer > Open print queue). Right-click the active job and select Cancel. The printer may finish the current page before stopping. If the job won't cancel, restart the Print Spooler. Most printers also have a physical Cancel button that stops printing immediately.",
      },
      {
        question: 'Why does my print queue get stuck every time I print?',
        answer:
          "A consistently stuck queue indicates a driver issue or port misconfiguration. The printer driver may be corrupted or incompatible with your Windows version. Download and reinstall the driver from the manufacturer's official website. Also verify the printer port — a wireless printer with an outdated port IP address will accept every job but never print any of them.",
      },
    ],
    relatedIssues: ['printer-not-printing', 'printer-offline', 'printer-driver-unavailable'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
]

export const TROUBLESHOOTING_MAP: Record<string, TroubleshootingData> = Object.fromEntries(
  TROUBLESHOOTING_ISSUES.map((i) => [i.slug, i])
)

export function getRelatedTroubleshootingLinks(currentSlug: string): RelatedLink[] {
  const issue = TROUBLESHOOTING_MAP[currentSlug]
  if (!issue) return []
  return issue.relatedIssues
    .map((slug) => TROUBLESHOOTING_MAP[slug])
    .filter((i): i is TroubleshootingData => i !== undefined)
    .map((i) => ({
      label: i.name,
      href: `/${i.slug}/`,
      description: i.metaDescription.split('.')[0] + '.',
    }))
}

export function getTroubleshootingBrandLinks(currentSlug: string): RelatedLink[] {
  const issue = TROUBLESHOOTING_MAP[currentSlug]
  if (!issue) return []
  return issue.relatedBrands
    .map((slug) => BRAND_MAP[slug])
    .filter(Boolean)
    .map((brand) => ({
      label: `${brand!.name} Printer Fixes`,
      href: `/${brand!.pageSlug}/`,
      description: `${brand!.name}-specific setup and troubleshooting guides.`,
    }))
}
