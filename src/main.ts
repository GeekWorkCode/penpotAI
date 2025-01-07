import "./style.css";

// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

document.querySelector("[data-handler='create-text']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-text", "*");
});

document.querySelector("[data-handler='execute-code']")?.addEventListener("click", () => {
  const codeInput = document.querySelector("#codeInput") as HTMLTextAreaElement;
  const code = codeInput.value.trim();
  
  if (code) {
    parent.postMessage({
      type: 'executeCode',
      createCode: code
    }, "*");
  }
});

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});
