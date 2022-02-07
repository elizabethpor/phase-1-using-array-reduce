const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const totalBatteries = batteryBatches.reduce(reducer, 0);
totalBatteries;
