import type { GuideData } from '@/types'

export const GUIDES: GuideData[] = [
  {
    slug: 'printer-setup',
    category: 'Setup',
    name: 'Printer Setup Guide',
    headline: 'How to Set Up a Printer — Complete Step-by-Step Guide',
    metaTitle: 'How to Set Up a Printer — Complete Setup Guide | GuidingPrinter',
    metaDescription:
      'Complete printer setup guide for Windows 10, Windows 11, and macOS. Covers USB and wireless printer installation for all major brands including HP, Canon, Epson, and Brother.',
    intro:
      'Setting up a printer correctly ensures reliable performance from the start. This guide covers how to physically install your printer, install the correct driver, connect via USB or Wi-Fi, and print a test page — for all major printer brands on Windows and Mac.',
    lastUpdated: '2025-05-14',
    readTime: '10 min read',
    steps: [
      {
        name: 'Unbox and prepare your printer',
        text: 'Remove all packaging materials, tape, and protective cardboard inserts from inside and outside the printer. Install ink cartridges or toner as directed by the quick start guide. Load paper in the paper tray or rear feeder.',
      },
      {
        name: 'Connect the printer to power',
        text: 'Plug the power cable into the printer and into a wall outlet. Press the Power button. Wait for the printer to complete its startup sequence and display the ready state on the control panel.',
      },
      {
        name: 'Connect to your computer (USB or Wi-Fi)',
        text: 'For USB: connect the USB cable from the printer to your computer. For wireless: use the printer control panel to run the Wireless Setup Wizard, select your Wi-Fi network, and enter your password. Wait for the connection to be confirmed.',
      },
      {
        name: 'Install the printer driver',
        text: 'On Windows: the printer may install automatically via Windows Update. If not, visit the manufacturer\'s website and download the driver for your model and OS. On Mac: go to System Preferences > Printers & Scanners > click + to add the printer. The driver installs automatically.',
      },
      {
        name: 'Add the printer to your computer',
        text: 'On Windows: go to Settings > Bluetooth & devices > Printers & scanners > Add device. Select your printer from the list. On Mac: go to System Preferences > Printers & Scanners > click + and select your printer.',
      },
      {
        name: 'Print a test page',
        text: 'On Windows: right-click the printer in Settings > Printers & scanners > Manage > Print a test page. On Mac: select the printer in Printers & Scanners > Options & Supplies > Utility > Print Test Page. A successful test page confirms the printer is working correctly.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to set up a printer?',
        answer:
          'Most printers can be fully set up in 10 to 20 minutes. Physical setup (unpacking, installing ink, loading paper) takes about 5 minutes. Driver installation and wireless connection typically take another 5 to 15 minutes depending on your internet speed and the printer model.',
      },
      {
        question: 'Do I need a CD to install a printer?',
        answer:
          'No. Modern operating systems (Windows 10, Windows 11, macOS Ventura and later) automatically install basic printer drivers via Windows Update or macOS Software Update. For full features (scanning, ink monitoring), download the manufacturer\'s software directly from their website.',
      },
      {
        question: 'Can I set up a printer without the manufacturer\'s app?',
        answer:
          'Yes. On Windows, you can add any printer via Settings > Printers & Scanners > Add a printer. On Mac, use System Preferences > Printers & Scanners. Basic printing will work without the manufacturer\'s app. However, features like scanning, ink level monitoring, and advanced settings may require the manufacturer\'s software.',
      },
      {
        question: 'Why is my printer not detected during setup?',
        answer:
          'If your printer is not detected: ensure the printer is powered on and connected to the same Wi-Fi network as your computer (for wireless). For USB, try a different USB port or cable. Restart both the printer and computer. On Windows, run the Printer Troubleshooter from Settings > System > Troubleshoot. Download and reinstall the driver from the manufacturer\'s website.',
      },
      {
        question: 'How do I set up a printer on Windows 11?',
        answer:
          'To set up a printer on Windows 11: go to Settings > Bluetooth & devices > Printers & scanners. Click "Add device" and Windows will search for available printers. Select your printer from the list. If it doesn\'t appear automatically, click "Add manually" and follow the prompts. For wireless printers, ensure both devices are on the same Wi-Fi network first.',
      },
    ],
    relatedGuides: ['wireless-printer-setup', 'printer-driver-installation', 'printer-troubleshooting'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'wireless-printer-setup',
    category: 'Wireless Setup',
    name: 'Wireless Printer Setup',
    headline: 'How to Set Up a Wireless Printer — Complete Wi-Fi Guide',
    metaTitle: 'Wireless Printer Setup Guide — Connect to Wi-Fi on Any Device | GuidingPrinter',
    metaDescription:
      'Step-by-step wireless printer setup guide for Windows, Mac, iPhone, iPad, and Android. Connect HP, Canon, Epson, Brother, and all major printer brands to your Wi-Fi network.',
    intro:
      'Wireless printing lets you print from any device in your home or office without cables. This guide explains how to connect your printer to Wi-Fi and set it up on Windows, macOS, iPhone, iPad, and Android devices.',
    lastUpdated: '2025-05-14',
    readTime: '8 min read',
    steps: [
      {
        name: 'Prepare your printer and router',
        text: 'Place your printer within range of your Wi-Fi router (within 15 feet for best signal). Power on the printer and ensure it is fully ready. Have your Wi-Fi network name (SSID) and password ready before starting the setup.',
      },
      {
        name: 'Run the Wireless Setup Wizard on the printer',
        text: 'On the printer control panel, navigate to Settings > Network > Wireless Setup Wizard (exact menu varies by model and brand). Select your Wi-Fi network name from the list. Enter your Wi-Fi password using the on-screen keyboard. Confirm and wait for the connection to be established.',
      },
      {
        name: 'Verify the wireless connection',
        text: 'A solid blue or green Wi-Fi indicator light confirms a successful connection. You can also print a Network Configuration Page from the printer settings to verify the IP address and connection status.',
      },
      {
        name: 'Install the printer on Windows',
        text: 'Go to Settings > Bluetooth & devices > Printers & scanners > Add device. Windows will scan and find the printer on your network. Select it and click Add device. Download and install the full driver from the manufacturer\'s website for complete functionality.',
      },
      {
        name: 'Install the printer on Mac',
        text: 'Go to System Settings > Printers & Scanners and click the + button. Select your printer from the list. macOS will automatically download and install the necessary driver. Click Add to complete the setup.',
      },
      {
        name: 'Print from iPhone, iPad, or Android',
        text: 'For iPhone/iPad: use AirPrint — tap Share in any app, select Print, choose your printer. For Android: use the Mopria Print Service (pre-installed on most Android devices) or install the manufacturer\'s print app. Both require the phone and printer to be on the same Wi-Fi network.',
      },
    ],
    faqs: [
      {
        question: 'How do I find my printer\'s Wi-Fi password?',
        answer:
          'Your printer does not have a Wi-Fi password — it connects to your existing home or office Wi-Fi network using your router\'s password. You need your router\'s Wi-Fi network name (SSID) and password, which is typically found on a sticker on the bottom or back of your router.',
      },
      {
        question: 'Why won\'t my printer connect to Wi-Fi?',
        answer:
          'Common reasons a printer won\'t connect to Wi-Fi: incorrect Wi-Fi password entered, printer is too far from the router, 5GHz Wi-Fi band not supported (most printers only support 2.4GHz), or the Wi-Fi network name contains special characters. Try moving the printer closer to the router and ensure you\'re selecting the 2.4GHz network.',
      },
      {
        question: 'Can I connect a printer to 5GHz Wi-Fi?',
        answer:
          'Most home printers only support 2.4GHz Wi-Fi, not 5GHz. If your router broadcasts separate 2.4GHz and 5GHz networks, make sure to connect your printer to the 2.4GHz network. Some newer printers (2022 and later) support both bands — check your printer specifications to confirm.',
      },
      {
        question: 'How do I print from my phone wirelessly?',
        answer:
          'On iPhone/iPad: use AirPrint — tap the Share icon in any app, select Print, and choose your printer. On Android: install the Mopria Print Service from Google Play or use your printer manufacturer\'s app. Both phone and printer must be connected to the same Wi-Fi network.',
      },
      {
        question: 'Do I need to reinstall the printer if I change my Wi-Fi password?',
        answer:
          'Yes. If you change your Wi-Fi password, the printer will lose its wireless connection. You need to reconnect the printer to Wi-Fi using the new password via the printer control panel Wireless Setup Wizard. You may also need to update the printer connection on each computer or device.',
      },
    ],
    relatedGuides: ['printer-setup', 'printer-driver-installation', 'printer-offline'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-driver-installation',
    category: 'Driver Installation',
    name: 'Printer Driver Installation',
    headline: 'How to Download and Install Printer Drivers — Complete Guide',
    metaTitle: 'Printer Driver Installation Guide — Download & Install on Windows & Mac | GuidingPrinter',
    metaDescription:
      'Learn how to download and install the correct printer driver for HP, Canon, Epson, Brother, and other brands on Windows 10, Windows 11, and macOS.',
    intro:
      'A printer driver is the software that allows your computer and printer to communicate. Installing the correct driver ensures full functionality including printing, scanning, and ink monitoring. This guide covers how to find, download, and install the right driver for your printer.',
    lastUpdated: '2025-05-14',
    readTime: '7 min read',
    steps: [
      {
        name: 'Identify your printer model',
        text: 'Find your exact printer model number on a label on the printer itself — typically on the front, back, or bottom. The model number is different from the product series name (e.g., "HP DeskJet 4155e" not just "HP DeskJet").',
      },
      {
        name: 'Identify your operating system and version',
        text: 'On Windows: press Win + I, go to System > About to find your Windows version (Windows 10, Windows 11) and system type (32-bit or 64-bit). On Mac: click Apple menu > About This Mac to find your macOS version.',
      },
      {
        name: 'Go to the manufacturer\'s support website',
        text: 'Visit the official support page for your printer brand: hp.com/support, canon.com/support, epson.com/support, or support.brother.com. Avoid downloading drivers from third-party websites to prevent malware.',
      },
      {
        name: 'Find and download the correct driver',
        text: 'Enter your printer model number in the support site search. Select your operating system from the dropdown menu. Choose the Full Feature Software or Full Driver Package (not just the basic driver) for complete functionality including scanning. Click Download.',
      },
      {
        name: 'Run the driver installer',
        text: 'Open the downloaded installer file. Follow the on-screen instructions. Choose your connection type (USB or Wireless) when prompted. The installer will detect your printer and complete the driver installation automatically.',
      },
      {
        name: 'Test the installation',
        text: 'After installation, go to Settings > Printers & Scanners (Windows) or System Preferences > Printers & Scanners (Mac). Confirm the printer appears in the list. Print a test page to verify the driver installed correctly.',
      },
    ],
    faqs: [
      {
        question: 'How do I know which printer driver to download?',
        answer:
          'Download the driver that matches your exact printer model number and your operating system version. For Windows, also match the bit version (32-bit or 64-bit). Always download from the official manufacturer website. The "Full Feature Software" or "Full Driver Package" is recommended over the basic driver as it includes scanning and all features.',
      },
      {
        question: 'Can I use Windows Update to install printer drivers?',
        answer:
          'Yes. Windows Update can automatically install basic printer drivers for most printers. Connect the printer via USB or ensure it is on the same Wi-Fi network, then go to Settings > Bluetooth & devices > Printers & scanners > Add device. Windows will find the printer and install a compatible driver. For full features, install the manufacturer\'s official software.',
      },
      {
        question: 'How do I update an existing printer driver?',
        answer:
          'To update a printer driver on Windows: open Device Manager (Win + X > Device Manager), expand Print queues, right-click your printer, and select Update driver > Search automatically for drivers. Alternatively, download the latest driver from the manufacturer\'s website and run the installer — it will update the existing driver.',
      },
      {
        question: 'What if the printer driver won\'t install?',
        answer:
          'If the printer driver won\'t install: run the installer as Administrator (right-click > Run as administrator). Temporarily disable antivirus software during installation. Remove the old driver first via Device Manager or the manufacturer\'s uninstall tool. Restart the computer and try again. Make sure you downloaded the correct driver for your OS version.',
      },
      {
        question: 'Do I need to reinstall the driver if I get a new computer?',
        answer:
          'Yes. Printer drivers are installed on each computer individually. If you get a new computer, download the driver from the manufacturer\'s website and install it on the new computer. The printer itself does not need any changes — just add it on the new computer after installing the driver.',
      },
    ],
    relatedGuides: ['printer-setup', 'wireless-printer-setup', 'printer-offline'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-offline',
    category: 'Troubleshooting',
    name: 'Printer Offline Fix',
    headline: 'How to Fix a Printer Showing Offline — Complete Troubleshooting Guide',
    metaTitle: 'Printer Offline Fix — How to Bring Your Printer Back Online | GuidingPrinter',
    metaDescription:
      'Fix a printer showing offline on Windows 10, Windows 11, and macOS. Step-by-step troubleshooting guide for HP, Canon, Epson, and Brother printers.',
    intro:
      'A printer showing "offline" is one of the most common printer problems. It occurs when your computer cannot communicate with the printer. This guide provides step-by-step solutions to bring your printer back online on Windows and Mac.',
    lastUpdated: '2025-05-14',
    readTime: '6 min read',
    steps: [
      {
        name: 'Restart the printer and computer',
        text: 'Power off the printer completely (not just sleep mode), wait 30 seconds, and power it back on. Restart your computer as well. This clears temporary connection errors and is the fix for many offline printer issues.',
      },
      {
        name: 'Check the printer connection',
        text: 'For wireless printers: check the Wi-Fi indicator light on the printer. If it is off or blinking, the printer has lost its Wi-Fi connection. Run the Wireless Setup Wizard from the printer control panel to reconnect. For USB: unplug and reconnect the USB cable, and try a different USB port.',
      },
      {
        name: 'Clear the print queue',
        text: 'Open Windows Settings > Bluetooth & devices > Printers & scanners > select your printer > Open print queue. Select all jobs and delete them. Stuck print jobs in the queue prevent new jobs from printing and can keep the printer in an offline state.',
      },
      {
        name: 'Set the printer as default and disable offline mode',
        text: 'In Windows: go to Settings > Printers & scanners > select your printer > Manage. Click "Set as default." Also open the print queue, click Printer in the menu bar, and ensure "Use Printer Offline" is NOT checked.',
      },
      {
        name: 'Restart the Print Spooler service (Windows)',
        text: 'Press Win + R, type services.msc, and press Enter. Find "Print Spooler" in the list, right-click it, and select Restart. This service manages all print jobs and restarting it resolves many offline printer errors.',
      },
      {
        name: 'Reinstall the printer driver',
        text: 'If the printer is still offline, remove it from Settings > Printers & scanners > Remove device. Download the latest driver from the manufacturer\'s website and reinstall. Add the printer again after installation. This resolves driver corruption issues that cause persistent offline status.',
      },
    ],
    faqs: [
      {
        question: 'Why does my printer keep going offline?',
        answer:
          'A printer that repeatedly goes offline is usually caused by an unstable Wi-Fi connection, an incorrect default printer setting, or a driver issue. Fixes: assign a static IP address to the printer in your router settings to prevent IP conflicts, set the printer as the default printer, ensure the printer is always on the same Wi-Fi network, and update the driver.',
      },
      {
        question: 'How do I fix a printer offline on Mac?',
        answer:
          'To fix a printer offline on Mac: go to System Settings > Printers & Scanners. Delete the printer (click - button) and add it again (click + button). macOS will reinstall the driver automatically. If the printer still shows offline, restart the printing system by right-clicking in the Printers & Scanners list and selecting "Reset printing system."',
      },
      {
        question: 'How do I stop my printer from going offline on Windows?',
        answer:
          'To prevent a printer from going offline on Windows: open the print queue, click Printer > Properties. Under the Ports tab, check "Enable bidirectional support." Assign a static IP to the printer via your router. Set the printer as the default printer. Keep the printer powered on when not in use instead of fully powering it off.',
      },
      {
        question: 'My wireless printer shows offline even though it is connected to Wi-Fi. Why?',
        answer:
          'If your printer is connected to Wi-Fi but still shows offline on your computer, the most common cause is that the printer\'s IP address has changed. Your computer is still looking for the printer at the old IP address. Fix this by removing the printer from your computer and adding it again, or by assigning a static IP address to the printer in your router settings.',
      },
    ],
    relatedGuides: ['printer-setup', 'wireless-printer-setup', 'printer-troubleshooting'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
  {
    slug: 'printer-troubleshooting',
    category: 'Troubleshooting',
    name: 'Printer Troubleshooting Hub',
    headline: 'Printer Troubleshooting Guide — Fix the Most Common Printer Problems',
    metaTitle: 'Printer Troubleshooting Guide — Fix Common Printer Problems | GuidingPrinter',
    metaDescription:
      'Troubleshoot and fix the most common printer problems including paper jams, print quality issues, offline errors, and connection problems for all major brands.',
    intro:
      'This troubleshooting guide covers the most frequently encountered printer problems and their solutions. Whether your printer is not printing, printing blank pages, showing offline, or experiencing paper jams, follow these step-by-step fixes.',
    lastUpdated: '2025-05-14',
    readTime: '12 min read',
    steps: [
      {
        name: 'Printer not printing at all',
        text: 'Verify the printer is powered on and connected. Check that it is set as the default printer. Clear the print queue. Restart the print spooler service (Windows). Reinstall the driver if the problem persists.',
      },
      {
        name: 'Printer printing blank pages',
        text: 'Check ink or toner levels — replace cartridges if low. Remove and reinstall the cartridges to ensure proper seating. Run the printer\'s print head cleaning utility from the software or control panel. Check that the paper is loaded correctly and is not damp.',
      },
      {
        name: 'Poor print quality (streaks, faded, smeared)',
        text: 'Run the print head cleaning utility 1-2 times from the printer software or control panel. Print the alignment page and follow instructions. Check ink or toner levels. Use the correct paper type for your printer and content. Ensure the paper is not glossy if using an inkjet printer without glossy paper mode.',
      },
      {
        name: 'Paper jam',
        text: 'Power off the printer. Open all access doors as directed in the manual. Gently pull jammed paper in the direction of paper travel — never pull against the paper path. Remove any small torn pieces. Close all doors, power on, and follow on-screen instructions. Check the paper tray for overfilling or incorrect paper size.',
      },
      {
        name: 'Printer shows offline',
        text: 'Restart the printer and computer. Check the Wi-Fi connection. Clear the print queue. Disable "Use Printer Offline" in Windows. Restart the Print Spooler service. See our dedicated Printer Offline Fix guide for complete steps.',
      },
      {
        name: 'Wireless connection problems',
        text: 'Ensure the printer and computer are on the same Wi-Fi network (2.4GHz for most printers). Move the printer closer to the router. Restart the router. Re-run the Wireless Setup Wizard on the printer. Assign a static IP to the printer to prevent IP address conflicts.',
      },
    ],
    faqs: [
      {
        question: 'Why is my printer printing but the pages come out blank?',
        answer:
          'Blank pages are typically caused by empty or dried-out ink cartridges, incorrectly installed cartridges, or a clogged print head. Check ink levels first, then remove and reinstall the cartridges. Run the print head cleaning utility from the printer software 1-2 times. If still blank, the cartridge may need replacement.',
      },
      {
        question: 'Why is my printer printing so slowly?',
        answer:
          'Slow printing is often caused by: printing in high-quality mode (switch to Normal or Draft for faster printing), complex graphics or large file sizes, low computer memory, or an old/incorrect driver. Also check for updates to the printer driver and firmware. Connecting via USB instead of Wi-Fi can also speed up printing.',
      },
      {
        question: 'How do I fix a paper jam?',
        answer:
          'To fix a paper jam: turn off the printer. Open the rear access door and/or front cover. Gently pull the jammed paper out in the direction it would normally travel through the printer. Never force or pull against the paper path. Remove any torn pieces. Check the input tray for overloaded paper or wrong paper size. Close all doors, power on, and print a test page.',
      },
      {
        question: 'Why are there lines or streaks on my printed pages?',
        answer:
          'Lines or streaks on printed pages indicate a clogged print head or low ink. Run the print head cleaning and print quality diagnostic from the printer software. Print the nozzle check pattern to identify which color is clogged. Run the cleaning utility 2-3 times if needed. If the problem persists after multiple cleanings and a new cartridge, the print head may need professional cleaning or replacement.',
      },
    ],
    relatedGuides: ['printer-setup', 'wireless-printer-setup', 'printer-offline'],
    relatedBrands: ['hp', 'canon', 'epson', 'brother'],
  },
]

export const GUIDE_MAP: Record<string, GuideData> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g])
)

export function getRelatedGuides(currentSlug: string): GuideData[] {
  const guide = GUIDE_MAP[currentSlug]
  if (!guide) return []
  return guide.relatedGuides
    .map((slug) => GUIDE_MAP[slug])
    .filter((g): g is GuideData => g !== undefined)
}
