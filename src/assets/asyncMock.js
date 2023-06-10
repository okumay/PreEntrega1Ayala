const products = [
  {
    id: "1",
    title: "Remera Mickey",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 14.99,
    imgUrl: "/img/shirt-mickey.webp",
    catId: "1",
    stock: 10,
  },
  {
    id: "2",
    title: "Remera Pac-Man",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 13.99,
    imgUrl: "/img/shirt-pacman.webp",
    catId: "1",
    stock: 4,
  },
  {
    id: "3",
    title: "Gorra Mario",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 9.99,
    imgUrl: "/img/hats-mario.webp",
    catId: "2",
    stock: 7,
  },
  {
    id: "4",
    title: "Reloj Goofy",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 12.99,
    imgUrl: "/img/acc-goofy.jpg",
    catId: "3",
    stock: 1,
  },
  {
    id: "5",
    title: "Gafas Pixel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 13.99,
    imgUrl: "/img/acc-pixel.webp",
    catId: "3",
    stock: 2,
  },
  {
    id: "6",
    title: "Remera Donkey Kong",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam officia quod temporibus doloremque animi pariatur, saepe nulla dolor repellendus.",
    price: 16.99,
    imgUrl: "/img/shirt-dk.jpeg",
    catId: "1",
    stock: 0,
  },
];

const categories = [
  {
    id: "1",
    category: "Remeras",
  },
  {
    id: "2",
    category: "Gorras",
  },
  {
    id: "3",
    category: "Accesorios",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.catId === categoryId));
    }, 2000);
  });
};

export const getCategoryName = (categoryId) => {
  return categories.find((category) => category.id === categoryId).category;
};
