import data from '../data.json';
const fakeSeries = [];

for (let index = 0; index < 60; index++) {
  const randomItem = data.serires[Math.floor(Math.random() * (data.serires.length - 1))];

  fakeSeries.push(randomItem);
}

export default fakeSeries;