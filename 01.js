//Напиши функцию которая принимает аргумент числор Н и возвращает сумму элементов cчётчика кратного 3 5 7
const getSumm = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(getSumm(10));
