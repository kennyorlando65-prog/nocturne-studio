const responses = [
  {
    test: (text) => text.includes("?"),
    output: "User is seeking information."
  },
  {
    test: (text) => text.toLowerCase().includes("love"),
    output: "Positive emotional tone detected."
  },
  {
    test: (text) => text.toLowerCase().includes("hate"),
    output: "Negative sentiment detected."
  }
];

const defaultResponse = "Neutral / analytical input.";
