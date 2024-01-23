import React from "react";
import ProductsData from "@/app/data/products";
import TemplateList from "./templateList";

interface ProductsProps {
    className?: string;
}

const Products: React.FC<ProductsProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            {ProductsData.map((product, index) => (
                <TemplateList
                    key={index}
                    product={product}
                    className={index !== ProductsData.length - 1 ? "border-b-2 border-gray-300" : ""}
                />
            ))}
        </div>
    );
};

export default Products;
