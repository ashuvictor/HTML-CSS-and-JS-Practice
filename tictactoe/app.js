const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container");
let turn0 = true; // Tracks the current turn ("0" or "X")

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

// Add event listener to the parent container for event delegation
document.querySelector(".board").addEventListener("click", (e) => {
  const box = e.target;

  if (!box.classList.contains("box") || box.innerText !== "") {
    return; // Ignore clicks on non-box elements or already filled boxes
  }

  box.innerText = turn0 ? "0" : "X"; // Place "0" or "X"
  turn0 = !turn0; // Toggle turn

  checkWinner(); // Check if there's a winner
});

// Function to check if there's a winner
const checkWinner = () => {
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

  // Check for a draw
  if ([...boxes].every((box) => box.innerText !== "")) {
    showWinner("No one! It's a draw");
  }
};

// Function to display the winner message
const showWinner = (winner) => {
  msgContainer.innerText = `Congratulations! The winner is ${winner}`;
  msgContainer.classList.remove("hide");
  toggleBoxes(false); // Disable all boxes
};

// Function to reset the game
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
