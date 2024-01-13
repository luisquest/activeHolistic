import ProductsData from "@/app/data/products";
import TemplateList from "./templateList";

const Products = () => {
    return (
        <div>
            {ProductsData.map((product, index) => (
                <TemplateList
                    key={index}
                    product={product}
                    className={index === ProductsData.length - 1 ? "border-b-0" : ""}
                />
            ))}
        </div>
    );
}

export default Products;