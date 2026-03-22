const logs = [
  "initializing systems...",
  "loading AI modules...",
  "connecting to automation layer...",
  "analyzing patterns...",
  "system ready."
];

let i = 0;

function startSystem() {
  const terminal = document.getElementById("terminal");

  function typeLog(){
    if(i < logs.length){
      const line = document.createElement("div");
      line.textContent = "> " + logs[i];
      terminal.appendChild(line);
      i++;
      setTimeout(typeLog, 700);
    }
  }

  typeLog();
}

function runSimulation(){
  const terminal = document.getElementById("terminal");
  const line = document.createElement("div");
  line.textContent = "> simulation complete ✔";
  terminal.appendChild(line);
}
