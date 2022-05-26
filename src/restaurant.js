const createMenu = (object) => {
  const menuObject = {};
  const addConsumption = (string) => menuObject.consumption.push(string);

  menuObject.fetchMenu = () => object;
  menuObject.consumption = [];
  menuObject.order = addConsumption;

  const sumConsumption = () => {
    let total = 0;
    const food = Object.keys(object.food);
    const drink = Object.keys(object.drink);

    menuObject.consumption.forEach((i) => {
      if (food.includes(i)) total += object.food[i];
      if (drink.includes(i)) total += object.drink[i];
    });

    return total + (10 * total) / 100;
  };

  menuObject.pay = sumConsumption;

  return menuObject;
};

module.exports = createMenu;
