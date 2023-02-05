import { createContext, useState } from "react";
import { ProductModel } from "@/models/product";

export const CartContext = createContext({});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<ProductModel[]>([]);
    const [listProduct, setListProduct] = useState<ProductModel[]>([
        { id: 1, name: "shoes", price: 9999 },
        { id: 2, name: "shoes", price: 8888 },
        { id: 3, name: "shoes", price: 7777 },
    ]);

    return (
        <CartContext.Provider value={{ cart, setCart, listProduct }}>
            {children}
        </CartContext.Provider>
    );
};
