import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export default function CardComponent({ cardData }) {
    const [data, setData] = useState(cardData)
    const loading = async () => {
        const newCardData = [
            {
                title: "New card title",
                id: "101",
                description: "this is an infinite scroll"
            },
            {
                title: "New card title",
                id: "102",
                description: "this is an infinite scroll"
            },
            {
                title: "New card title",
                id: "103",
                description: "this is an infinite scroll"
            }
        ]
        await setData((data) => [...data, ...newCardData]);
    }

    return (
        <div>
            <InfiniteScroll
                loadMore={loading}
                hasMore={true || false}
                loader={<div key={0}>Loading ...</div>}
            >
                <div>
                    {data.map((data, index) => (
                        <div md={4} key={index}>
                            <div style={{ width: '18rem', border: '1px solid black', margin: '20px' }}>
                                <img width="288" src="https://images.unsplash.com/photo-1652512456007-e16ac46f1879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" />
                                <div>
                                    <p>{data.id} - {data.title}</p>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
}
