# Hidden Cost Finder Chrome Extension

## Overview

This Chrome extension is designed to detect hidden costs or dark patterns on e-commerce websites like Amazon, Flipkart, and others. It helps users by identifying additional charges (such as hidden shipping fees, taxes, and other expenses) that may not be clear during the purchasing process and displaying them prominently on the extension's interface.

## Features

- **Automatic Detection**: Scans popular e-commerce sites for hidden costs and dark patterns during the checkout process.
- **User-Friendly Display**: The identified hidden costs are shown directly in the extension popup for easy access.
- **Support for Multiple Sites**: Currently optimized for major websites like Flipkart and Amazon, with more websites to be added in the future.

## How It Works

1. The extension automatically analyzes the webpage when the user visits a supported e-commerce site.
2. It extracts potential hidden fees or extra costs that might appear during the checkout or product browsing phases.
3. These costs are then displayed within the extension’s interface, giving the user clarity about the true total price.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right corner).
4. Click on **Load unpacked** and select the folder where you cloned/downloaded this repository.
5. The extension will now be added to Chrome, and you should see its icon in the extensions bar.

## Usage

1. Visit an e-commerce site (e.g., Amazon, Flipkart).
2. Browse products or proceed to the checkout process.
3. Click the extension icon in the toolbar.
4. The extension will analyze the webpage and display any hidden costs it identifies.

## Technologies Used

- **JavaScript**: Core functionality of the extension.
- **HTML/CSS**: Extension popup and front-end interface.
- **Chrome Extension API**: For interaction with the browser and the web pages.

## Future Enhancements

- Add support for more e-commerce websites.
- Improve detection algorithms for more accurate cost identification.
- Provide a detailed breakdown of all fees and charges.

## Contributing

Feel free to contribute to the project by submitting a pull request or reporting issues. We welcome feedback and suggestions for future improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
