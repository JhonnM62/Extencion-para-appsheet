function injectTheScript(scriptFunction) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: scriptFunction,
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

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Attach the event listener to the button
  document.getElementById("inicioS").addEventListener("click", () => {
    const button = document.getElementById("inicioS"); // Obtener referencia al botón

    // Cambiar el color al hacer clic
    button.style.backgroundColor = "red"; // Cambiar el color de fondo a verde
    const syncTimeInput = document.getElementById("syncTime");
    const inputValue = syncTimeInput.value;
    // Inject the script once
    injectTheScript(clickButton);

    // Call clickButton every 5 seconds
    setInterval(() => {
      injectTheScript(clickButton);
    }, inputValue * 1000);
  });
});
