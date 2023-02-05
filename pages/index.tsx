import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <h1>Ecommerce de ejemplo</h1>
            <Link href="/list">
                <p>Ver Productos</p>
            </Link>
        </div>
    );
}
