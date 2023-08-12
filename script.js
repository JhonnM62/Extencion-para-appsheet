console.log("Extensión de sincronización automática");
document.addEventListener("DOMContentLoaded", function () {
  const syncbutton = document.getElementById("inicioS");
  syncbutton.addEventListener("click", clickButton);

  function clickButton() {
    console.log("click");

    const button = document.querySelector(
      'button[data-testid="SyncActionButton"]'
    );
    if (button) {
      button.click();
    }
  }
  setInterval(clickButton, 5000);
});
