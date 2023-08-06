// catch all routes
export const config = {
    runtime: 'edge',
}

export default function handler(req, res) {
    // const params = req.query.params;
    // console.log(params);
    // res.status(200).json(params);
    return new Response(
        JSON.stringify({
            name: 'XYZ',
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
            },
        }
    )
}