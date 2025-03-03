const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container");
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.innerText !== "") return;
    box.innerText = turn0 ? "0" : "X";
    turn0 = !turn0; // Toggle the turn
    checkWinner();
  });
});
function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    const [val1, val2, val3] = [
      boxes[a].innerText,
      boxes[b].innerText,
      boxes[c].innerText,
    ];
    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }
  if ([...boxes].every((box) => box.innerText !== "")) {
    showWinner("Its a draw");
  }
}

const showWinner = (winner) => {
  msgContainer.innerText = `Congratulations! The winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
const resetGame = () => {
  turn0 = true; // Reset turn
  msgContainer.classList.add("hide"); // Hide winner message
  boxes.forEach((box) => (box.innerText = "")); // Clear all boxes
  toggleBoxes(true); // Enable all boxes
};

// Helper function to toggle box interactivity
const toggleBoxes = (enable) => {
  boxes.forEach((box) => (box.disabled = !enable));
};

// Event listener for reset button
resetBtn.addEventListener("click", resetGame);
