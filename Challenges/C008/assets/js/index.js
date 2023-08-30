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

    doACalculation() {
      let calculation = this.display.value;
      try {
        calculation = eval(calculation);
        if (!calculation) {
          alert("Conta Inválida !!!");
          this.display.value = "";
          return;
        }
        this.display.value = String(calculation);
      } catch (error) {
        alert("Conta Inválida !!!");
        this.display.value = "";
      }
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
        if (el.classList.contains("btn-eq")) {
          this.doACalculation();
        }
      });
    },
  };
}

const calculator = createCalculator();
calculator.begin();
