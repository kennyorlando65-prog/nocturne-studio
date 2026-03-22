function updateTime(){
  const time = new Date().toLocaleTimeString();
  document.getElementById("time").textContent = time;
}

setInterval(updateTime, 1000);
updateTime();

/* FAKE LIVE ACTIVITY */
setInterval(() => {
  const terminal = document.getElementById("terminal");
  const logs = [
    "syncing data...",
    "monitoring signals...",
    "updating models...",
    "tracking inputs..."
  ];

  const random = logs[Math.floor(Math.random()*logs.length)];

  const line = document.createElement("div");
  line.textContent = "> " + random;
  line.style.opacity = "0.6";

  terminal.appendChild(line);

  if(terminal.children.length > 20){
    terminal.removeChild(terminal.firstChild);
  }

}, 3000); updateTime(){
  const time = new Date().toLocaleTimeString();
  document.getElementById("time").textContent = time;
}

setInterval(updateTime, 1000);
updateTime();
