// ─────────────────────────────────────────
// NOCTURNE SYSTEMS ENGINE
// ─────────────────────────────────────────

const input = document.querySelector("input, textarea");
const analyzeBtn = document.querySelector("button");
const output = document.querySelector(".system-output, #output");
const logBox = document.querySelector(".system-log, pre");

// stats
const analysesCountEl = document.querySelector("#analysesCount");
const accuracyEl = document.querySelector("#accuracy");

let analysesCount = 0;

// fake intelligence engine
function analyzeText(text) {
  text = text.toLowerCase();

  if (!text.trim()) {
    return {
      result: " No input detected.",
      accuracy: "0%"
    };
  }

  if (text.includes("brand")) {
    return {
      result: "Strong brand intent detected. Suggest identity refinement & positioning strategy.",
      accuracy: "98%"
    };
  }

  if (text.includes("money") || text.includes("rich")) {
    return {
      result: "Luxury positioning signal detected. Recommend premium visual language.",
      accuracy: "96%"
    };
  }

  if (text.length < 10) {
    return {
      result: "Input too vague. Provide more context.",
      accuracy: "70%"
    };
  }

  return {
    result: "General analysis complete. No strong signals detected.",
    accuracy: "89%"
  };
}

// typing effect (terminal vibe)
function typeLog(text) {
  logBox.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      logBox.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 20);
    }
  }

  typing();
}

// MAIN ACTION
analyzeBtn.addEventListener("click", () => {
  const text = input.value;

  // log animation
  typeLog(`
> initializing systems...
> loading modules...
> analyzing input...
> complete.
`);

  // run analysis
  const res = analyzeText(text);

  // update UI
  output.innerHTML = res.result;

  analysesCount++;
  if (analysesCountEl) analysesCountEl.innerText = analysesCount;
  if (accuracyEl) accuracyEl.innerText = res.accuracy;
});
