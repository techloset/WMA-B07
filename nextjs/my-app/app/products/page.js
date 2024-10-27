

// loaddata from fakestore api

import Button from "../components/button/Button";

const loadProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export default async function Products() {
    const products = await loadProducts();
    console.log(products);
  return (
    <div>Products
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
    <Button title="click me in file"/>
    </div>
  )
}
