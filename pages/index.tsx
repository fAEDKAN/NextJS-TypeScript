import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getDataML } from "@/util/api-ml";
import { ListComponent } from "@/components/ListComponent";

const Home = (props: any) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Image src="/vercel.svg" height={200} width={200} alt="Vercel" />
            <h1>Ecommerce de ejemplo</h1>
            <h3>Productos destacados</h3>
            <ListComponent products={props.products} />
            <Link href="/list">
                <p>Ver Productos</p>
            </Link>
        </div>
    );
};

export default Home;
export async function getStaticProps() {
    return {
        props: {
            title: "soy la home del static generation",
            products: await getDataML("q=zapatilas"),
        },
    };
}
