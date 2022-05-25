const dividers = (number) => {
    if (number > 0) {
      for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
          console.log(i);
        }
      }
    } else {
      alert("Пожалуйста введите положительное число")
    }
  }
  
  dividers(prompt("Введите число"));