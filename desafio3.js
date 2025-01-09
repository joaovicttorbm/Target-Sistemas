  // Desafio 3

  const fs = require('fs');


const dailyRevenue = JSON.parse(fs.readFileSync('revenue.json', 'utf-8'));

// Filter days with revenue greater than 0
const daysWithRevenue = dailyRevenue.filter(day => day.value > 0);

// Calculate the lowest and highest revenue values
const lowestRevenue = Math.min(...daysWithRevenue.map(day => day.value));
const highestRevenue = Math.max(...daysWithRevenue.map(day => day.value));

// Calculate the monthly average, ignoring days with no revenue
const totalRevenue = daysWithRevenue.reduce((acc, day) => acc + day.value, 0);
const averageMonthlyRevenue = totalRevenue / daysWithRevenue.length;

// Count days with revenue above the monthly average
const daysAboveAverage = daysWithRevenue.filter(day => day.value > averageMonthlyRevenue).length;


console.log('Menor valor de faturamento:', lowestRevenue.toFixed(2));
console.log('Maior valor de faturamento:', highestRevenue.toFixed(2));
console.log('Número de dias acima da média mensal:', daysAboveAverage);