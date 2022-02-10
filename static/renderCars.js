function generateImagePath(imageName) {
  return `../images/${imageName}.png`;
}

const cars = [
  {
    name: "Porsche 911 Carrera 4s",
    type: "Coupe",
    engine: "3.0l Twin Turbo",
    color: "Szary",
    power: "450",
    price: "1990",
    image: generateImagePath("Porsche 911 Carrera 4s"),
  },
  {
    name: "Porsche 718 Cayman",
    type: "Coupe",
    engine: "2.0l Turbo",
    color: "Żółty",
    power: "450",
    price: "1990",
    image: generateImagePath("Porsche 718 Cayman"),
  },
  {
    name: "Mercedes A45 AMG",
    type: "Hothatch",
    engine: "2.0l Turbo",
    color: "Żółty",
    power: "421",
    price: "990",
    image: generateImagePath("Mercedes A45 AMG"),
  },
  {
    name: "BMW M5 Competition",
    type: "Coupe",
    engine: "4.4l Twin Turbo",
    color: "Granatowy",
    power: "625",
    price: "990",
    image: generateImagePath("BMW M5 Competition"),
  },
  {
    name: "BMW M4",
    type: "Coupe",
    engine: "3.0l Twin Turbo",
    color: "Złoty",
    power: "450",
    price: "1990",
    image: generateImagePath("BMW M4"),
  },
  {
    name: "Nissan GT-R",
    type: "Coupe",
    engine: "3.8l Twin Turbo",
    color: "Pomarańczowy",
    power: "570",
    price: "1990",
    image: generateImagePath("Porsche 718 Cayman"),
  },
  {
    name: "Audi R8 V10 Plus",
    type: "Coupe",
    engine: "5.2l V10 Plus",
    color: "Niebieski",
    power: "610",
    price: "1990",
    image: generateImagePath("Porsche 718 Cayman"),
  },
  {
    name: "Lamborghini Gallardo",
    type: "Coupe",
    engine: "5.2l V10",
    color: "Biały",
    power: "570",
    price: "1990",
    image: generateImagePath("Porsche 718 Cayman"),
  },
  {
    name: "Lamborghini Huracan",
    type: "Coupe",
    engine: "5.2l V10",
    color: "Pomarańczowy",
    power: "610",
    price: "1990",
    image: generateImagePath("Porsche 718 Cayman"),
  },
  {
    name: "Lamborghini Aventador",
    type: "Coupe",
    engine: "6.5l V12",
    color: "Biały",
    power: "700",
    price: "3453",
    image: generateImagePath("Porsche 718 Cayman"),
  },
];

Vue.createApp({
  data() {
    return {
      cars: cars.slice(0, 6),
    };
  },
}).mount(".cars_container");
