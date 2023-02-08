import { ListComponent } from "@/components/ListComponent";
import { getDataML } from "@/util/api-ml";
import Head from "next/head";
import Link from "next/link";

const List = (props: any) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <h2> Soy la página de productos</h2>
            <ListComponent products={props.products} />
            <Link href="/">
                <p>Ir al Home</p>
            </Link>
        </div>
    );
};

export default List;
export async function getStaticProps() {
    return {
        props: {
            title: "soy la home del static generation",
            products: await getDataML("q=zapatilas"),
        },
    };
}
