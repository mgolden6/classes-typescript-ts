const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const carsByMake: string[][] = [];

// Help with interfence when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10', { x: 12 }];
importantDates.push('2030-4-4');
