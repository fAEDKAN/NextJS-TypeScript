import { ProductModel } from "@/models/product";

const DetailProduct = (props:any) => {
    console.log(props);
    //ESTO LO VEMOS EN RUTAS DINÁMICAS
    return (
        <div>
            <h2>Producto</h2>
        </div>
    );
};

export default DetailProduct;
export async function getServerSideProps(context: any) {
    let data: ProductModel = { id: 3, name: "Shirts", price: 5555 };

    return {
        props: {
            product: data,
        },
    };
}
