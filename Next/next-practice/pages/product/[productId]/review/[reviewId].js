import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <>
            ProductId - {productId}, ReviewId - {reviewId}
        </>
    )
}

export default Review