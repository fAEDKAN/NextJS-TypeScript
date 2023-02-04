import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h2>Ecommerce de Ejemplo!</h2>
            <Link href="/list">
                Ver productos
            </Link>
        </div>
    );
}
