import { ProductModel } from "../models/product";
import Link from "next/link";
import { useState } from "react";
import CardProduct from "../components/CardProduct";

const List = () => {
    let list: ProductModel[] = [
        {
            id: 1,
            name: "shoes",
            price: 9999,
        },
    ];
    const [products, setProducts] = useState<ProductModel[]>(list);

    return (
        <div>
            <h2>Hola, soy la página de productos! :D</h2>
            {products.map((product, index) => {
                return (
                    <>
                        <CardProduct product={product}/>
                        <div key={index}>
                            <h1>Hola, soy una zapatilla</h1>
                        </div>
                    </>
                );
            })}
            <Link href="/">Ir al Home</Link>
        </div>
    );
};

export default List;
