import { use } from "react";
import { ProductDetailClient } from "@/components/ProductDetailClient";

export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
    ];
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return <ProductDetailClient productId={id} />;
}
