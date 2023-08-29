function createCalculator() {
  return {
    display: document.querySelector(".display"),

    begin() {
      this.buttonClick();
    },
    clearDisplay() {
      this.display.value = "";
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    buttonOnDisplay(value) {
      this.display.value += value;
    },

    buttonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.buttonOnDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }
      });
    },
  };
}

const calculator = createCalculator();
calculator.begin();
