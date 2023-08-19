function injectTheScript(scriptFunction) {
  // Wuery the active tab, which will be only one tab and inject the script function in it.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: scriptFunction,
    });
  });
}

function clickButton() {
  const button = document.querySelector(
    'button[data-testid="SyncActionButton"]'
  );
  if (button) {
    button.click();
  }
}

document.getElementById("inicioS").addEventListener("click", () => {
  console.log("Button clicked");
  injectTheScript(clickButton);
  setInterval(clickButton, 5000);
});
