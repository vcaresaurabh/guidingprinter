import type { BrandData } from '@/types'

export const BRANDS: BrandData[] = [
  {
    slug: 'hp',
    name: 'HP',
    fullName: 'Hewlett-Packard',
    pageSlug: 'hp-printer-setup',
    color: 'bg-blue-600',
    headline: 'HP Printer Setup & Troubleshooting Guide',
    metaTitle: 'HP Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete HP printer setup guide for wireless connection, driver installation, and troubleshooting. Covers HP DeskJet, OfficeJet, LaserJet, and ENVY series printers.',
    intro:
      "HP is the world's largest printer manufacturer, offering a wide range of home and office printers including the DeskJet, OfficeJet, LaserJet, and ENVY series. This guide covers everything you need to set up, connect, and troubleshoot your HP printer on Windows, macOS, iPhone, and Android.",
    popularModels: [
      'HP DeskJet 2755e',
      'HP DeskJet 4155e',
      'HP OfficeJet Pro 9015e',
      'HP OfficeJet Pro 8025e',
      'HP ENVY 6055e',
      'HP ENVY Inspire 7955e',
      'HP LaserJet Pro M404n',
      'HP LaserJet MFP M428fdw',
    ],
    wirelessSetupSteps: [
      {
        name: 'Connect printer to power',
        text: 'Plug in your HP printer and press the Power button. Wait for the printer to fully initialize before proceeding.',
      },
      {
        name: 'Open Wireless Setup Wizard',
        text: "Press the Wireless button on the control panel, or navigate to Settings > Wireless Setup Wizard. On touchscreen models, swipe down to reveal the dashboard and tap the Wireless icon.",
      },
      {
        name: 'Select your Wi-Fi network',
        text: 'Your HP printer will scan for available networks. Select your home or office Wi-Fi network name (SSID) from the list.',
      },
      {
        name: 'Enter your Wi-Fi password',
        text: 'Use the on-screen keyboard or keypad to enter your Wi-Fi password. Passwords are case-sensitive. Tap or press OK to confirm.',
      },
      {
        name: 'Confirm connection',
        text: 'Wait for the wireless indicator light to turn solid blue. This confirms your HP printer is connected to the network. A connection report will print automatically on some models.',
      },
      {
        name: 'Install HP Smart and add printer',
        text: 'Download HP Smart from hp.com/smart or your device app store. Open HP Smart, click "Add Printer," and select your HP printer from the discovered devices to complete setup.',
      },
    ],
    driverInstallSteps: [
      {
        name: 'Go to HP Support',
        text: 'Open your browser and navigate to hp.com/support. This is the only official source for HP drivers — avoid third-party driver sites.',
      },
      {
        name: 'Search your printer model',
        text: 'Enter your full printer model number (e.g., HP DeskJet 2755e) in the search box. Click on your printer in the results.',
      },
      {
        name: 'Select your operating system',
        text: 'HP Support will auto-detect your OS. Verify it is correct — select Windows 10, Windows 11, macOS 13, or your specific version from the dropdown if needed.',
      },
      {
        name: 'Download HP Smart or Full Feature Software',
        text: 'For Windows 10/11 and macOS: download HP Smart (recommended). For older systems: download the Full Feature Software & Drivers package.',
      },
      {
        name: 'Run the installer',
        text: 'Open the downloaded file. Follow the HP setup wizard. When prompted, choose "Wireless" as the connection type and allow the installer to find your printer on the network.',
      },
      {
        name: 'Verify and print a test page',
        text: 'After installation, go to Settings > Bluetooth & devices > Printers & scanners, select your HP printer, and click Print a test page to confirm everything works.',
      },
    ],
    commonIssues: [
      {
        issue: 'HP Printer Shows Offline',
        solution:
          'Restart both the printer and your computer. In Windows, go to Settings > Printers & scanners, select your HP printer, and uncheck "Use Printer Offline." Clear any pending print jobs, then set the HP printer as your default printer.',
      },
      {
        issue: 'Wi-Fi Connection Dropping',
        solution:
          "Move the printer within 10 feet of the router for setup. After setup, check that both are on the 2.4GHz band. Re-run the Wireless Setup Wizard if the printer disconnects. Assign the printer a static IP via your router's DHCP settings to prevent connection drops.",
      },
      {
        issue: 'Ink Cartridge Not Recognized',
        solution:
          'Remove the cartridge and reinstall it firmly until it clicks. Clean the copper contact strip on the cartridge with a dry, lint-free cloth. If the issue persists, the cartridge may be defective — replace with a genuine HP cartridge.',
      },
      {
        issue: 'Paper Jam',
        solution:
          'Turn off the printer. Remove all paper from the input tray. Open all doors and gently pull out jammed paper in the direction of paper travel — do not tear. Check all paper paths including the rear access door. Reload fresh, properly aligned paper and power on.',
      },
    ],
    guides: [
      {
        title: 'HP Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your HP printer to Wi-Fi on any device',
      },
      {
        title: 'HP Driver Download & Installation',
        href: '/printer-driver-installation/',
        description: 'Get the correct HP driver for Windows or macOS',
      },
      {
        title: 'HP Printer Offline Fix',
        href: '/printer-offline/',
        description: 'Resolve HP printer showing offline errors',
      },
      {
        title: 'HP Printer Troubleshooting',
        href: '/printer-troubleshooting/',
        description: 'Diagnose and fix common HP printer problems',
      },
    ],
    faqs: [
      {
        question: 'How do I set up my HP printer for the first time?',
        answer:
          "To set up your HP printer for the first time: unbox the printer and remove all packing materials. Install ink cartridges and load paper. Power on the printer and follow the control panel setup wizard. For wireless setup, select your Wi-Fi network and enter the password. Then download HP Smart from hp.com or your device's app store, add your printer, and print a test page.",
      },
      {
        question: 'How do I connect my HP printer to Wi-Fi?',
        answer:
          'To connect your HP printer to Wi-Fi: press the Wireless button on the control panel or go to Settings > Wireless Setup Wizard. Select your Wi-Fi network name, enter the password, and confirm. The wireless light should turn solid blue when connected. Then add the printer on your computer via Settings > Printers & Scanners > Add Printer.',
      },
      {
        question: 'Where can I download HP printer drivers?',
        answer:
          "Download official HP printer drivers from hp.com/support. Enter your printer model number in the search box, select your operating system, and download the Full Feature Software or Basic Driver. Avoid third-party driver sites to prevent malware. HP Smart is the recommended all-in-one app for Windows 10/11 and macOS.",
      },
      {
        question: 'Why is my HP printer showing offline?',
        answer:
          'HP printers show offline when the computer cannot communicate with the printer. Common fixes: restart both the printer and computer. Set the HP printer as the default printer. Clear the print queue. Disable "Use Printer Offline" in Windows printer settings. Reinstall the HP driver. For wireless printers, ensure both devices are on the same Wi-Fi network.',
      },
      {
        question: 'How do I print from my iPhone to an HP printer?',
        answer:
          "HP printers with wireless capability support AirPrint. On your iPhone, open the document or photo you want to print, tap the Share icon, select Print, choose your HP printer from the list, set print options, and tap Print. Your iPhone and HP printer must be on the same Wi-Fi network. If the printer doesn't appear, ensure AirPrint is enabled in the HP printer settings.",
      },
    ],
    relatedBrands: ['canon', 'epson', 'brother'],
  },
  {
    slug: 'canon',
    name: 'Canon',
    fullName: 'Canon Inc.',
    pageSlug: 'canon-printer-setup',
    color: 'bg-red-600',
    headline: 'Canon Printer Setup & Troubleshooting Guide',
    metaTitle: 'Canon Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete Canon printer setup guide covering wireless setup, driver installation, and troubleshooting for Canon PIXMA, MAXIFY, and imageCLASS printers.',
    intro:
      'Canon produces reliable home and office printers across the PIXMA, MAXIFY, and imageCLASS series. This guide covers wireless setup, driver installation, and troubleshooting for Canon printers on Windows, macOS, and mobile devices.',
    popularModels: [
      'Canon PIXMA MG3620',
      'Canon PIXMA TR4720',
      'Canon PIXMA TS8320',
      'Canon MAXIFY GX7020',
      'Canon imageCLASS MF743Cdw',
      'Canon PIXMA G620',
    ],
    wirelessSetupSteps: [
      {
        name: 'Power on the printer',
        text: 'Press the Power button on your Canon printer and wait for it to fully initialize. Ensure it is within range of your Wi-Fi router.',
      },
      {
        name: 'Start Wi-Fi setup via WPS (fastest method)',
        text: 'Press and hold the Wi-Fi button on the printer for 3 seconds until the Wi-Fi lamp flashes rapidly. Then press the WPS button on your router within 2 minutes. The lamp will stop flashing and stay lit when connected.',
      },
      {
        name: 'Or use the Wireless Setup Wizard',
        text: "On models with a display, press the Home or Menu button, navigate to LAN settings > Wi-Fi > Wi-Fi setup > Wi-Fi Setup Wizard. Select your network name and enter your Wi-Fi password.",
      },
      {
        name: 'Confirm connection',
        text: 'The Wi-Fi indicator light will remain lit (not flashing) once the Canon printer is connected. On display models, the screen shows the network name and a signal strength icon.',
      },
      {
        name: 'Download Canon IJ Setup',
        text: 'Visit canon.com/ijsetup on your computer or phone. Select your printer model and download the Canon IJ Setup or Canon PRINT Inkjet/SELPHY app for mobile.',
      },
      {
        name: 'Complete driver installation',
        text: 'Run the Canon installer. When it detects your printer on the network, select it and complete the guided setup. Print a nozzle check pattern to verify the printer is working correctly.',
      },
    ],
    driverInstallSteps: [
      {
        name: 'Go to Canon Support',
        text: 'Navigate to usa.canon.com/support in your browser. This is the official source for Canon drivers and software.',
      },
      {
        name: 'Search for your printer model',
        text: 'Enter your Canon printer model number in the search field (e.g., PIXMA MG3620, imageCLASS MF743Cdw). Select your printer from the results.',
      },
      {
        name: 'Select your operating system',
        text: 'Choose your operating system from the dropdown. Canon supports Windows 10, Windows 11, macOS, and Linux for most current models.',
      },
      {
        name: 'Download the driver package',
        text: 'Click Drivers & Downloads. Download the recommended "Full Driver & Software Package" which includes the printer driver, scanner driver, and utilities.',
      },
      {
        name: 'Run the Canon IJ Setup installer',
        text: 'Open the downloaded file. The Canon IJ Setup wizard will launch. Agree to the license terms and select your connection type — choose Wireless LAN Connection.',
      },
      {
        name: 'Detect printer and finish',
        text: 'The installer will scan your network and find your Canon printer. Select it from the list. Follow remaining prompts to complete installation and print a test page.',
      },
    ],
    commonIssues: [
      {
        issue: 'Canon Printer Shows Offline',
        solution:
          "Restart the printer and computer. Open Windows Settings > Printers & scanners, right-click the Canon printer, select See what's printing, and uncheck Use Printer Offline. Delete any stuck jobs. If the issue persists, remove the printer and re-add it using Add a printer.",
      },
      {
        issue: 'Low Ink Warning Preventing Print',
        solution:
          'Canon printers may refuse to print when a cartridge is detected as low. If the cartridge still has ink, open Printer Properties, go to Maintenance, and disable the low-ink warning temporarily. For a permanent fix, replace the cartridge with a genuine Canon cartridge.',
      },
      {
        issue: 'Poor Print Quality or Streaks',
        solution:
          'Run the print head cleaning utility from Canon IJ Printer Utility (Windows) or the printer control panel under Maintenance > Cleaning. Print a nozzle check pattern after cleaning. If quality does not improve after 3 cleaning cycles, the print heads may need deep cleaning or replacement.',
      },
      {
        issue: 'Paper Not Feeding',
        solution:
          'Remove all paper from the tray. Fan the paper sheets to separate them before loading. Ensure paper weight is within Canon specifications (usually 64–105 g/m²). Clean the paper pick rollers with a slightly damp lint-free cloth and allow to dry before reloading.',
      },
    ],
    guides: [
      {
        title: 'Canon Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your Canon printer to Wi-Fi',
      },
      {
        title: 'Canon Driver Download & Installation',
        href: '/printer-driver-installation/',
        description: 'Get the correct Canon driver for your OS',
      },
      {
        title: 'Canon Printer Offline Fix',
        href: '/printer-offline/',
        description: 'Fix Canon printer showing offline',
      },
      {
        title: 'Canon Printer Troubleshooting',
        href: '/printer-troubleshooting/',
        description: 'Diagnose and fix Canon printer problems',
      },
    ],
    faqs: [
      {
        question: 'How do I set up my Canon PIXMA printer?',
        answer:
          'To set up a Canon PIXMA printer: remove all packaging and install the ink tanks or cartridges as directed. Load paper in the rear tray. Press the Power button. For wireless setup, press the Wi-Fi button until the lamp flashes, then use the WPS button on your router, or run the Wireless Setup utility from the Canon IJ Network Device Setup Utility software. Install the Canon PIXMA driver from canon.com/ijsetup.',
      },
      {
        question: 'How do I connect my Canon printer to Wi-Fi?',
        answer:
          'Connect a Canon printer to Wi-Fi using the Easy Wireless Connect method: download the Canon PRINT Inkjet/SELPHY app, open it, select your printer, and follow the wireless connection prompts. Alternatively, use the WPS method by pressing and holding the Wi-Fi button on the printer for 3 seconds, then press the WPS button on your router within 2 minutes.',
      },
      {
        question: 'Where do I download Canon printer drivers?',
        answer:
          'Download Canon printer drivers from usa.canon.com/support or canon.com/ijsetup. Enter your printer model, select your operating system, and download the recommended driver package. The Canon IJ Setup or Quick Menu software includes the full driver, scanning software, and utilities.',
      },
      {
        question: 'Why does my Canon printer say offline?',
        answer:
          "If your Canon printer says offline, try these fixes: restart the printer and your computer. Open Windows Printers & Scanners, select the Canon printer, and uncheck 'Use Printer Offline.' Clear any stuck print jobs. Check that the printer is connected to the correct Wi-Fi network. Uninstall and reinstall the Canon driver if the problem persists.",
      },
    ],
    relatedBrands: ['hp', 'epson', 'brother'],
  },
  {
    slug: 'epson',
    name: 'Epson',
    fullName: 'Seiko Epson Corporation',
    pageSlug: 'epson-printer-setup',
    color: 'bg-indigo-600',
    headline: 'Epson Printer Setup & Troubleshooting Guide',
    metaTitle: 'Epson Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete Epson printer setup guide for wireless connection, driver installation, and troubleshooting. Covers Epson EcoTank, WorkForce, and Expression series.',
    intro:
      'Epson offers popular home and business printers including the EcoTank, WorkForce, and Expression series. This guide covers wireless setup, driver downloads, and troubleshooting for Epson printers on Windows, macOS, and mobile devices.',
    popularModels: [
      'Epson EcoTank ET-2800',
      'Epson EcoTank ET-4850',
      'Epson WorkForce WF-7820',
      'Epson Expression Home XP-4205',
      'Epson WorkForce Pro WF-4830',
      'Epson EcoTank ET-16650',
    ],
    wirelessSetupSteps: [
      {
        name: 'Power on the Epson printer',
        text: 'Press the Power button and wait for the printer to finish its startup routine. The status light will stop blinking when ready.',
      },
      {
        name: 'Open Wi-Fi settings on the control panel',
        text: "Press the Home button to access the main menu. Select Wi-Fi Setup (on some models: Network Settings > Wi-Fi Setup) then select Wi-Fi Setup Wizard.",
      },
      {
        name: 'Select your Wi-Fi network',
        text: 'The printer will display a list of nearby networks. Select your Wi-Fi network name (SSID) from the list. If your network is hidden, select Other Networks and enter the SSID manually.',
      },
      {
        name: 'Enter your Wi-Fi password',
        text: 'Use the on-screen keyboard to type your Wi-Fi password. Epson passwords are case-sensitive. Select Done or OK when finished.',
      },
      {
        name: 'Wait for connection confirmation',
        text: 'The Wi-Fi indicator light will turn solid (green or blue depending on model) when connected. A connection confirmation screen will appear on display models.',
      },
      {
        name: 'Install Epson software on your computer',
        text: 'Visit epson.com/support and download the Epson Connect Printer Setup Utility or Epson Smart Panel app. Run the installer, choose Wi-Fi, and select your Epson printer when it is detected.',
      },
    ],
    driverInstallSteps: [
      {
        name: 'Visit Epson Support',
        text: 'Open your browser and go to epson.com/support. This is the official Epson support portal for drivers and software.',
      },
      {
        name: 'Find your Epson printer',
        text: 'Search by your printer model name (e.g., EcoTank ET-2800, WorkForce WF-7820). Click your printer in the results to open its support page.',
      },
      {
        name: 'Select your operating system',
        text: 'Choose your OS from the dropdown: Windows 10, Windows 11, macOS Sonoma, etc. Epson will display only compatible downloads for your system.',
      },
      {
        name: 'Download the printer driver',
        text: 'Under Drivers, download the Printer Driver package. For full functionality including scanning, also download the Epson Scan 2 or Epson Print and Scan software.',
      },
      {
        name: 'Run the Epson installer',
        text: 'Open the downloaded installer file. Select Wi-Fi as your connection type when prompted. The installer will detect your Epson printer on the network automatically.',
      },
      {
        name: 'Complete setup and test',
        text: 'Follow the remaining on-screen steps to finish driver installation. Print a nozzle check from the printer control panel or Epson software to verify print quality.',
      },
    ],
    commonIssues: [
      {
        issue: 'Epson Printer Offline Error',
        solution:
          "Restart the Epson printer and your computer. In Windows, go to Settings > Printers & scanners, remove the Epson printer, then click Add a device to re-add it. When re-adding, choose the wireless version of the printer (e.g., EPSON ET-2800 Series — not the USB entry). Ensure both the printer and computer are on the same Wi-Fi network.",
      },
      {
        issue: 'Ink Pad Full / End of Service Life',
        solution:
          'Epson printers use an internal ink pad that absorbs waste ink during cleaning cycles. When full, the printer displays "Service Required" or "Parts inside your printer are at the end of their service life." Contact Epson service or an authorized technician to replace the ink pad. Do not continue printing when this error appears.',
      },
      {
        issue: 'Clogged Print Head / Missing Lines',
        solution:
          'Run a nozzle check from the printer control panel (Settings > Maintenance > Nozzle Check). If lines are missing, run the Print Head Cleaning utility. Run up to 3 cleaning cycles. If still not resolved, run the Power Cleaning utility (EcoTank models) — note this uses significant ink.',
      },
      {
        issue: 'Epson Printer Not Connecting to Wi-Fi',
        solution:
          'Epson EcoTank and WorkForce models support only 2.4GHz Wi-Fi bands — not 5GHz. If your router broadcasts both bands with the same SSID, force the printer to connect to 2.4GHz by temporarily disabling the 5GHz band. Also check that your Wi-Fi password does not contain special characters the on-screen keyboard cannot enter.',
      },
    ],
    guides: [
      {
        title: 'Epson Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your Epson printer to Wi-Fi',
      },
      {
        title: 'Epson Driver Download & Installation',
        href: '/printer-driver-installation/',
        description: 'Get the correct Epson driver for your OS',
      },
      {
        title: 'Epson Printer Offline Fix',
        href: '/printer-offline/',
        description: 'Fix Epson printer showing offline',
      },
      {
        title: 'Epson Printer Troubleshooting',
        href: '/printer-troubleshooting/',
        description: 'Diagnose and fix common Epson printer problems',
      },
    ],
    faqs: [
      {
        question: 'How do I set up my Epson printer wirelessly?',
        answer:
          'To set up an Epson printer wirelessly: press the Home button on the control panel, select Wi-Fi Setup, then Wi-Fi Setup Wizard. Select your network name, enter the password, and confirm. The Wi-Fi indicator will turn green when connected. Download the Epson Connect Printer Setup Utility from epson.com/connect to complete the setup on your computer.',
      },
      {
        question: 'Where can I download Epson printer drivers?',
        answer:
          'Download Epson printer drivers from epson.com/support. Select your product category, find your printer model, and choose your operating system. Download the Epson Universal Print Driver for Windows or the standard printer driver package. The Epson Print and Scan app on Windows 11 is the recommended option for newer models.',
      },
      {
        question: 'Why is my Epson printer offline?',
        answer:
          'Fix an Epson printer showing offline by restarting both the printer and computer. Verify the printer is connected to Wi-Fi by checking the signal icon on the control panel. Open Windows Settings > Printers & Scanners, remove the Epson printer, and add it again. Ensure you select the correct wireless network version of the printer when re-adding.',
      },
      {
        question: 'Why does my Epson EcoTank show an ink pad error?',
        answer:
          "The ink pad full error means the internal waste ink pad has reached capacity from cleaning cycles. This is a hardware service requirement — the pad must be replaced by an Epson service technician. Do not attempt to override this error, as continuing to print can damage the printer.",
      },
    ],
    relatedBrands: ['hp', 'canon', 'brother'],
  },
  {
    slug: 'brother',
    name: 'Brother',
    fullName: 'Brother Industries',
    pageSlug: 'brother-printer-setup',
    color: 'bg-emerald-600',
    headline: 'Brother Printer Setup & Troubleshooting Guide',
    metaTitle: 'Brother Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete Brother printer setup guide for wireless connection, driver installation, and troubleshooting. Covers Brother HL, MFC, DCP, and ADS series printers.',
    intro:
      'Brother manufactures reliable laser and inkjet printers for home and office use, including the HL, MFC, DCP, and ADS series. This guide provides step-by-step instructions for wireless setup, driver installation, and resolving common Brother printer issues.',
    popularModels: [
      'Brother HL-L2350DW',
      'Brother MFC-L2750DW',
      'Brother HL-L3270CDW',
      'Brother MFC-J995DW',
      'Brother DCP-L2550DW',
      'Brother HL-L5200DW',
    ],
    wirelessSetupSteps: [
      {
        name: 'Power on the Brother printer',
        text: 'Press the power button and wait for the printer to complete initialization. For laser models, allow extra time for the drum to warm up.',
      },
      {
        name: 'Access Network settings',
        text: 'Press the Menu button on the control panel. Navigate using the arrow keys to Network, press OK. Select WLAN (for wireless LAN), then press OK.',
      },
      {
        name: 'Start Setup Wizard',
        text: "Select Setup Wizard from the WLAN menu. When asked if you want to enable wireless, select Yes. The printer will scan for available Wi-Fi networks.",
      },
      {
        name: 'Select your Wi-Fi network',
        text: 'Use the arrow keys to scroll through the detected networks and select your Wi-Fi network name. If your network is hidden, select <New SSID> to enter the name manually.',
      },
      {
        name: 'Enter your Wi-Fi password',
        text: 'Enter your Wi-Fi password using the printer keypad. Hold a key to cycle through characters. Press OK when done. Brother supports WPA/WPA2 security.',
      },
      {
        name: 'Confirm and complete setup',
        text: "The display will show 'Connected' when the Brother printer joins your Wi-Fi network. Install the Full Driver & Software Package from support.brother.com to add the printer to your computer.",
      },
    ],
    driverInstallSteps: [
      {
        name: 'Go to Brother Support',
        text: 'Open your browser and navigate to support.brother.com. Select your country or region to access the correct support page.',
      },
      {
        name: 'Search your Brother model',
        text: 'Enter your printer model number (e.g., HL-L2350DW, MFC-J995DW) in the model search field. Click your model in the results.',
      },
      {
        name: 'Select your operating system',
        text: 'Choose your OS from the dropdown. Brother provides drivers for Windows 10, Windows 11, macOS, and various Linux distributions.',
      },
      {
        name: 'Download Full Driver & Software Package',
        text: 'Click on Downloads. Download the Full Driver & Software Package — this includes the printer driver, scanner driver (for MFC models), and management utilities.',
      },
      {
        name: 'Run the Brother installer',
        text: "Open the installer file. Accept the license agreement. When prompted for connection type, select Wireless Network Connection. The installer will search for your Brother printer on the network.",
      },
      {
        name: 'Select printer and finish',
        text: "Select your Brother printer from the detected devices list. Follow the remaining prompts to complete installation. Print a test page using Windows' Printer Properties to confirm the setup.",
      },
    ],
    commonIssues: [
      {
        issue: 'Brother Printer Shows Offline',
        solution:
          "Restart the Brother printer and your computer. In Windows, open the print queue for the Brother printer and uncheck 'Use Printer Offline' under the Printer menu. If the printer is wireless, verify it is connected to Wi-Fi by printing a network configuration report (press and hold the Wi-Fi button for 3 seconds on most models).",
      },
      {
        issue: 'Drum Unit Replace Warning',
        solution:
          'This warning appears after approximately 12,000 pages and indicates the drum unit is nearing the end of its life. If the drum is new or recently replaced, reset the drum counter: open the front cover, press and hold the OK button for 4 seconds until "Accepted" appears. Replace the drum unit when print quality degrades.',
      },
      {
        issue: 'Toner Low on New Cartridge',
        solution:
          "If a new genuine Brother toner cartridge shows 'Toner Low,' the cartridge may not have been registered correctly. Open the front cover and close it again to trigger re-detection. If the message persists, remove the cartridge, rock it gently side-to-side to distribute toner evenly, and reinsert it.",
      },
      {
        issue: 'Cannot Connect to 5GHz Wi-Fi',
        solution:
          'Brother laser printers (HL and MFC series) support only 2.4GHz Wi-Fi networks — they do not connect to 5GHz bands. If your router uses one SSID for both bands, log into your router settings and separate the 2.4GHz and 5GHz networks. Connect the Brother printer to the 2.4GHz network.',
      },
    ],
    guides: [
      {
        title: 'Brother Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your Brother printer to Wi-Fi',
      },
      {
        title: 'Brother Driver Download & Installation',
        href: '/printer-driver-installation/',
        description: 'Get the correct Brother driver for your OS',
      },
      {
        title: 'Brother Printer Offline Fix',
        href: '/printer-offline/',
        description: 'Fix Brother printer showing offline',
      },
      {
        title: 'Brother Printer Troubleshooting',
        href: '/printer-troubleshooting/',
        description: 'Diagnose and fix common Brother printer problems',
      },
    ],
    faqs: [
      {
        question: 'How do I connect my Brother printer to Wi-Fi?',
        answer:
          "To connect a Brother printer to Wi-Fi: press the Menu button, navigate to Network > WLAN > Setup Wizard, select your Wi-Fi network name, and enter the password. The display will show 'Connected' when successful. For MFC models with a touchscreen, go to Settings > All Settings > Network > Wi-Fi > Setup Wizard.",
      },
      {
        question: 'How do I download Brother printer drivers?',
        answer:
          "Download Brother printer drivers from support.brother.com. Select your country, search for your printer model, choose your operating system, and download the Full Driver & Software Package. Brother's installer will guide you through driver installation and wireless network setup automatically.",
      },
      {
        question: 'Why does my Brother printer show as offline?',
        answer:
          "A Brother printer showing offline is often caused by a communication error. Try these fixes: restart the printer and computer. On Windows, go to Printers & Scanners, right-click the Brother printer, and select 'See what's printing,' then uncheck 'Use Printer Offline.' Verify the printer is on the same Wi-Fi network. You may need to reinstall the driver using the full Brother installer.",
      },
      {
        question: 'How do I reset my Brother printer to factory settings?',
        answer:
          "To factory reset a Brother printer: press Menu, navigate to Initial Setup (or Machine Info on some models) > Reset > All Settings > Yes > Yes. This clears all network settings, speed dials, and custom settings. You will need to re-run the wireless setup wizard after the reset. Note: the page counter is NOT reset by this procedure.",
      },
    ],
    relatedBrands: ['hp', 'canon', 'epson'],
  },
  {
    slug: 'lexmark',
    name: 'Lexmark',
    fullName: 'Lexmark International',
    pageSlug: 'lexmark-printer-setup',
    color: 'bg-amber-600',
    headline: 'Lexmark Printer Setup & Troubleshooting Guide',
    metaTitle: 'Lexmark Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete Lexmark printer setup guide covering wireless connection, driver installation, and troubleshooting for Lexmark home and office printers.',
    intro:
      'Lexmark produces professional-grade printers for home and business environments. This guide covers setting up your Lexmark printer wirelessly, installing drivers, and resolving common connectivity and printing issues.',
    popularModels: [
      'Lexmark MB2236adw',
      'Lexmark MB3442adw',
      'Lexmark CS431dw',
      'Lexmark MS431dw',
      'Lexmark MC3426adw',
    ],
    guides: [
      {
        title: 'Lexmark Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your Lexmark printer to Wi-Fi',
      },
      {
        title: 'Lexmark Driver Installation',
        href: '/printer-driver-installation/',
        description: 'Download and install Lexmark drivers',
      },
    ],
    faqs: [
      {
        question: 'How do I set up my Lexmark printer wirelessly?',
        answer:
          'To set up a Lexmark printer wirelessly: on the printer control panel, navigate to Settings > Network/Ports > Wireless. Select Network Name and choose your Wi-Fi network. Enter your Wi-Fi password and save. Download the Lexmark setup software from lexmark.com/support to complete driver installation on your computer.',
      },
      {
        question: 'Where can I download Lexmark printer drivers?',
        answer:
          'Download Lexmark drivers from lexmark.com/support. Enter your printer model, select your operating system, and download the Universal Print Driver or the model-specific driver package. Lexmark also offers a Driver Install Wizard that automatically detects your printer and installs the correct driver.',
      },
    ],
    relatedBrands: ['hp', 'brother', 'canon'],
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    fullName: 'Samsung Electronics',
    pageSlug: 'samsung-printer-setup',
    color: 'bg-slate-700',
    headline: 'Samsung Printer Setup & Troubleshooting Guide',
    metaTitle: 'Samsung Printer Setup Guide — Step-by-Step Instructions | GuidingPrinter',
    metaDescription:
      'Complete Samsung printer setup guide for wireless connection, driver installation, and troubleshooting. Note: Samsung printers are now supported under the HP brand.',
    intro:
      "Samsung's printer division was acquired by HP in 2017. If you have a Samsung-branded printer, it may now use HP drivers and support. This guide covers setting up Samsung printers and finding the correct software for your specific model.",
    popularModels: [
      'Samsung Xpress M2020W',
      'Samsung Xpress M2070FW',
      'Samsung ProXpress M4020ND',
      'Samsung Xpress C1810W',
      'Samsung ProXpress C3060FW',
    ],
    guides: [
      {
        title: 'Samsung Wireless Printer Setup',
        href: '/wireless-printer-setup/',
        description: 'Connect your Samsung printer to Wi-Fi',
      },
      {
        title: 'Samsung Driver Installation',
        href: '/printer-driver-installation/',
        description: 'Download Samsung / HP-Samsung drivers',
      },
    ],
    faqs: [
      {
        question: 'How do I set up my Samsung printer wirelessly?',
        answer:
          'To connect a Samsung printer to Wi-Fi: press the WPS button on the printer for 2 seconds, then press the WPS button on your router within 2 minutes. Alternatively, use the Samsung Easy Printer Manager software on Windows. Note: if your Samsung printer was purchased after 2017, you may need to use HP drivers — check hp.com/support and search for your Samsung model number.',
      },
      {
        question: 'Where can I download Samsung printer drivers?',
        answer:
          'Samsung printer drivers are now available through HP Support. Visit hp.com/support and search for your Samsung printer model. For older Samsung printers, drivers may also be available on the Samsung support site or through Windows Update. The Samsung Unified Linux Driver is available for Linux users.',
      },
    ],
    relatedBrands: ['hp', 'canon', 'brother'],
  },
]

export const BRAND_MAP: Record<string, BrandData> = Object.fromEntries(
  BRANDS.map((b) => [b.slug, b])
)

export function getBrandByPageSlug(pageSlug: string): BrandData | undefined {
  return BRANDS.find((b) => b.pageSlug === pageSlug)
}

export function getRelatedBrands(currentSlug: string): BrandData[] {
  const brand = BRAND_MAP[currentSlug]
  if (!brand) return []
  return brand.relatedBrands
    .map((slug) => BRAND_MAP[slug])
    .filter((b): b is BrandData => b !== undefined)
}
