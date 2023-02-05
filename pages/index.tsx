import { CartContext } from "@/context/CartProvider";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { CardProduct } from "../components/CardProduct";

export default function Home(props: any) {
    console.log(props);
    const { listProduct }: any = useContext(CartContext);
    const [listProducts, setListProducts] = useState<any>(props.products.results);

    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Image src="/vercel.svg" height={200} width={200} alt="Vercel" />
            <h1>Ecommerce de ejemplo</h1>
            <h3>Productos destacados</h3>
            {listProducts.map((product: any, index: any) => {
                return (
                    <span key={index}>
                        <CardProduct
                        product={{
                            id: index,
                            name: product.title,
                            price: product.price,
                        }}
                    />
                    </span>
                );
            })}
            <div>
                {listProduct[0].name} - ${listProduct[0].price}
            </div>
            <Link href="/list">
                <p>Ver Productos</p>
            </Link>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
    );
    const data = await response.json();
    return {
        props: {
            title: "soy la home del static generation",
            products: data,
        },
    };
}
