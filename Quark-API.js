//EXPORT PNG URI QUARK API
window.addEventListener(
  "message",
  (event) => {
    if (event.data == "downloadPNG") {
      let uri = getCanvasURI();
      let type = "downloadPNG";
      event.source.postMessage(
        {
          type: type,
          uri: uri,
        },
        event.origin
      );
    } else {
      return;
    }
  },
  false
);

function getCanvasURI() {
  let URI = document.getElementById("defaultCanvas0").toDataURL();
  return URI;
}
