runlatex.editorlines = 40;
runlatex.adddefaultpreamble = true;
runlatex.adddefaultengine = true;
runlatex.overleafURI = null;

runlatex.texts = {
  "Open in Overleaf": "",
  "TeXLive.net": "Compile",
  "Delete Output": "Delete Output",
  "Compiling PDF": "Compiling PDF or HTML",
  "Added Code": "",
  "End Added Code": "",
  "Top Caption": "",
};

window.addEventListener(
  "load",
  () => {
    // setup editor
    let ed = editors["pre0"];

    let store = window.localStorage;
    let cached = store.getItem("latex-code");
    if (cached) {
      ed.setValue(cached);
      ed.clearSelection();
    }

    ed.session.on("change", (delta) => {
      store.setItem("latex-code", ed.getValue());
    });
  },
  false
);


// stop runlatex generating a new iframe
ifr = document.getElementById("pre0ifr");
