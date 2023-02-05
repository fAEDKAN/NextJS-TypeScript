import { CardProduct } from "@/components/CardProduct";
import { ProductModel } from "@/models/product";
import Link from "next/link";
import { useState } from "react";

const List = () => {
    let list: ProductModel[] = [
        {
            id: 1,
            name: "shoes",
            price: 9999,
        },
        {
            id: 2,
            name: "shoes",
            price: 8888,
        },
        {
            id: 3,
            name: "shoes",
            price: 7777,
        },
    ];
    const [products, setProducts] = useState<ProductModel[]>(list);

    return (
        <div>
            <h2> Soy la página de productos</h2>
            {products.map((product, index) => {
                return <CardProduct product={product} key={index} />;
            })}
            <Link href="/">
                <p>Ir al Home</p>
            </Link>
        </div>
    );
};

export default List;
