import { ProductDetails } from "@/interfaces/productDetails"
import Badge from "../Badge"

interface ProductInfoProps {
    product: ProductDetails
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">
                        {product?.category}
                    </Badge>
                    {product?.isNew && (
                        <Badge>
                            Novo
                        </Badge>
                    )}
                    {product?.discount && (
                        <Badge variant="destructive">
                            -{product?.discount}%
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    )
}