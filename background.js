// background.js

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete' && tab.active) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         files: ['content.js']
//       });
//     }
//   });

// background.js

// const webdriver = require('selenium-webdriver');

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "handleBuyNowClick") {
//     handleBuyNowClick(sender.tab.id);
//   }
// });

// async function handleBuyNowClick(tabId) {

//     const driver = await new webdriver.Builder().forBrowser('chrome').build();
//     try {
//       await driver.get(chrome.tabs.get(tabId).url);
  
//       const buyNowButton = await driver.findElement(webdriver.By.className('_2KpZ6l _2U9uOA ihZ75k _3AWRsL'));
//       await buyNowButton.click();
  
//       // Wait for the second page to load
//       await driver.wait(webdriver.until.elementLocated(By.id("container")), 10000); // Adjust timeout as needed
  
//       // Send a message to the content script to execute the DOM manipulation code
//       chrome.tabs.sendMessage(tabId, { action: "scrapeData" });
//     } catch (error) {
//       console.error('Error handling Buy Now button click:', error);
//     } finally {
//       await driver.quit();
//     }
//   }
  
  // ... (code from previous response)



