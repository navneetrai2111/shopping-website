import React from "react";
import ProductCard from "./Product-Card";

const NewProducts = () => {
  const products = [
    {
      productName: "Classic Fit Oxford Shirt",
      price: 49.99,
      color: "Blue",
      imageUrl:
        "https://placehold.co/400x300/0000FF/FFFFFF.png?text=Oxford+Shirt",
    },
    {
      productName: "Slim Fit Chino Pants",
      price: 59.99,
      color: "Khaki",
      imageUrl:
        "https://placehold.co/400x300/D2B48C/000000.png?text=Chino+Pants",
    },
    {
      productName: "Premium Cotton T-Shirt",
      price: 24.99,
      color: "Black",
      imageUrl: "https://placehold.co/400x300/000000/FFFFFF.png?text=T-Shirt",
    },
    {
      productName: "Wool Blend Blazer",
      price: 149.99,
      color: "Navy",
      imageUrl: "https://placehold.co/400x300/000080/FFFFFF.png?text=Blazer",
    },
    {
      productName: "Stretch Denim Jeans",
      price: 79.99,
      color: "Dark Blue",
      imageUrl: "https://placehold.co/400x300/00008B/FFFFFF.png?text=Jeans",
    },
    {
      productName: "Crew Neck Sweater",
      price: 69.99,
      color: "Gray",
      imageUrl: "https://placehold.co/400x300/808080/FFFFFF.png?text=Sweater",
    },
    {
      productName: "Performance Polo Shirt",
      price: 39.99,
      color: "Green",
      imageUrl:
        "https://placehold.co/400x300/008000/FFFFFF.png?text=Polo+Shirt",
    },
    {
      productName: "Lightweight Bomber Jacket",
      price: 119.99,
      color: "Black",
      imageUrl:
        "https://placehold.co/400x300/000000/FFFFFF.png?text=Bomber+Jacket",
    },
    {
      productName: "Athletic Fit Joggers",
      price: 45.99,
      color: "Charcoal",
      imageUrl: "https://placehold.co/400x300/36454F/FFFFFF.png?text=Joggers",
    },
    {
      productName: "Half-Zip Pullover",
      price: 89.99,
      color: "Burgundy",
      imageUrl: "https://placehold.co/400x300/800020/FFFFFF.png?text=Pullover",
    },
    {
      productName: "Button-Down Flannel Shirt",
      price: 54.99,
      color: "Red Plaid",
      imageUrl:
        "https://placehold.co/400x300/FF0000/FFFFFF.png?text=Flannel+Shirt",
    },
    {
      productName: "Tailored Dress Pants",
      price: 89.99,
      color: "Charcoal",
      imageUrl:
        "https://placehold.co/400x300/36454F/FFFFFF.png?text=Dress+Pants",
    },
    {
      productName: "Graphic Print T-Shirt",
      price: 29.99,
      color: "White",
      imageUrl:
        "https://placehold.co/400x300/FFFFFF/000000.png?text=Graphic+Tee",
    },
    {
      productName: "Hooded Sweatshirt",
      price: 64.99,
      color: "Navy",
      imageUrl: "https://placehold.co/400x300/000080/FFFFFF.png?text=Hoodie",
    },
    {
      productName: "Lightweight Linen Shirt",
      price: 59.99,
      color: "Beige",
      imageUrl:
        "https://placehold.co/400x300/F5F5DC/000000.png?text=Linen+Shirt",
    },
  ];
  return (
    <div className="container">
      <div className=" pt-16">
        <h2 className="font-medium text-2xl pb-4 ">New Products</h2>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.imageUrl}
            name={product.productName}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
