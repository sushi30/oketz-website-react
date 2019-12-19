export function validateId(id) {
  if (id.length !== 9 || isNaN(Number.parseInt(id))) {
    return false;
  }
  let sum = 0;
  for (const i in id) {
    const digit = Number.parseInt(id[i]);
    let incNum = i % 2 ? digit * 2 : digit;
    if (incNum > 9) incNum -= 9;
    sum += incNum;
  }
  return sum % 10 === 0;
}
