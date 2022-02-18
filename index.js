const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const adder = (acc, current) => acc + current;
const totalBatteries = batteryBatches.reduce(adder);