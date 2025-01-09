
const revenueByState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};


const totalRevenue = Object.values(revenueByState).reduce((sum, value) => sum + value, 0);


console.log('Percentage Representation by State:');
for (const [state, revenue] of Object.entries(revenueByState)) {
    const percentage = (revenue / totalRevenue) * 100;
    console.log(`${state}: ${percentage.toFixed(2)}%`);
}