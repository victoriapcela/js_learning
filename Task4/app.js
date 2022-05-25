let username = prompt("Введите свое имя");
let password = prompt("Введите свой новый пароль");
/*
let un = prompt("Введите повторно свое имя");
let pw = prompt("Введите повторно пароль");
if (!((un === "null")||(pw === "null"))) {
  if (username === un) {
    if (password === pw) {
      alert("Привет")
    } else {
      alert("Wrong password")
    }
  } else { 
    alert("Неверный пароль")
  }
}
*/


let un = prompt("Введите повторно свое имя");
if ((username === un)&&!(un === null)) {
  let pw = prompt("Введите повторно пароль");
  if ((password === pw)&&!(pw === null)) {
    alert("Привет", username)
  } else if (pw === null) {
    alert ("Ошибка")
  } else {
    alert ("Неверный пароль")
  }
} else if (un === null) {
  alert ("Ошибка")
} else {
  alert ("Неверный пароль")
}