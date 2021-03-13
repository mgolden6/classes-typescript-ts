const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];

pepsi[0] = 'brown';

const carSpecs = {
  hp: 400,
  weight: 3356,
};
