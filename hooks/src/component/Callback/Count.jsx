import React from 'react'

const Count = ({ text, age }) => {
    console.log("Count rendered", text);
    return (
        <div>
            <p>{text} - {age}</p>
        </div>
    )
}

export default React.memo(Count)
