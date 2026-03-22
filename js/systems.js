const terminal = document.getElementById("terminal");
const result = document.getElementById("result");

const boot = [
  "initializing systems...",
  "loading modules...",
  "system ready."
];

let i = 0;

function bootSystem(){
  if(i < boot.length){
    const line = document.createElement("div");
    line.textContent = "> " + boot[i];
    terminal.appendChild(line);
    i++;
    setTimeout(bootSystem, 500);
  }
}

bootSystem();

function analyze(){
  const input = document.getElementById("userInput").value;
  if(!input) return;

  const steps = [
    "scanning input...",
    "processing...",
    "generating result..."
  ];

  let j = 0;

  function run(){
    if(j < steps.length){
      const line = document.createElement("div");
      line.textContent = "> " + steps[j];
      terminal.appendChild(line);
      j++;
      setTimeout(run, 400);
    } else {

      let output = defaultResponse;

      for(let r of responses){
        if(r.test(input)){
          output = r.output;
          break;
        }
      }

      result.innerHTML = `
        <h3>System Output</h3>
        <p>${output}</p>
      `;
    }
  }

  run();
}
