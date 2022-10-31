export default function phoneFormat(value) {
  let phone = "";
  value.split('').forEach((symbol, index) => {
    if (index === 1) phone += " (" + symbol;
    else if (index === 3) phone += symbol + ") ";
    else if (index === 7 || index === 9) phone += "-" + symbol;
    else phone += symbol;
  })
  return phone;
}
