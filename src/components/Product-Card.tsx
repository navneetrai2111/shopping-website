import React from "react";
interface propsType {
  image: string;
  price: number;
  name: string;
  color: string;
}

const ProductCard: React.FC<propsType> = ({image,price,name,color}) => {
  return(
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
      <h2>{name}</h2>
      <p style={{ color }}>{price}</p>
    </div>
  )
};

export default ProductCard;
