const display = document.getElementById("display");

const appendValue = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    console.log(err);
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1500);
  }
};
