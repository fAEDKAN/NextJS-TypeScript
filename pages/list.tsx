import { CardProduct } from "@/components/CardProduct";
import { CartContext } from "@/context/CartProvider";
import { ProductModel } from "@/models/product";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

const List = () => {
    const { listProduct } = useContext<CartContextValue>(CartContext);

    return (
        <div>
            <Head>
                <title>Hola, soy el listado</title>
            </Head>
            <h2> Soy la página de productos</h2>
            {listProduct.map((product: ProductModel, index: number) => {
                return <CardProduct product={product} key={index} />;
            })}
            <Link href="/">
                <p>Ir al Home</p>
            </Link>
            {/* <style jsx>{` .class{ background:'red'} `}</style> */}
        </div>
    );
};

export default List;
