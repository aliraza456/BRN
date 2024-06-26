import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { CategoriesContext } from "../context/CategoriesContext";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>

    <h2 className="category-title" >{category}</h2>
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </>
  );
};

export default Category;
