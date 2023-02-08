import { ProductModel } from "@/models/product";

export const getDataML = async (term: string): Promise<ProductModel[]> => {
    const resopnse = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?${term}`
    );
    const data = await resopnse.json();
    const products: ProductModel[] = data.results.map(
        (product: { title: any; price: any }, index: any) => {
            return {
                id: index,
                name: product.title,
                price: product.price,
            };
        }
    );
    return products;
};
