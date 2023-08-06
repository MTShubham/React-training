// [productId] - [] defines the dynamic route. For passing the id we can use this.
import { useRouter } from "next/router"

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <>
            Product Id page - {productId}
        </>
    )
}

export default ProductDetail
