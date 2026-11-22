let year = parseInt(prompt("Nhập năm:"));
let isLeapYear = false;

if (year % 400 == 0) {
  isLeapYear = true;
} else if (year % 4 == 0 && year % 100 != 0) {
  isLeapYear = true;
}

if (isLeapYear) {
  alert(year + ": Năm nhuận");
} else {
  alert(year + ": Năm không nhuận");
}
