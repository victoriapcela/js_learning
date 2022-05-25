const age = Number(prompt("Введите возраст"));
if ((age <= 14)||(age >= 90)) {
  alert("True")
} else {
  alert("False")
}
if (!((age >= 14)&&(age <= 90))) {
  alert("True")
} else {
  alert("False")
}