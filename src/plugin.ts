penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);
interface ElementMessage {
  type: 'executeCode';
  createCode: string;
}

penpot.ui.onMessage<ElementMessage>((message) => {
  if (message.type === 'executeCode') {
    eval(message.createCode);
  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
