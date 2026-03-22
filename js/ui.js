function updateTime(){
  const time = new Date().toLocaleTimeString();
  document.getElementById("time").textContent = time;
}

setInterval(updateTime, 1000);
updateTime();
