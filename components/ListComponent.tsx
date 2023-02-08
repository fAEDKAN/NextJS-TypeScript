import { CardProduct } from "./CardProduct";

export const ListComponent = ({ products }: any) => {
    return (
        <>
            {products.map((product: any, index: any) => {
                return (
                    <span key={index}>
                        <CardProduct
                            product={{
                                id: index,
                                name: product.name,
                                price: product.price,
                            }}
                        />
                    </span>
                );
            })}
        </>
    );
};
