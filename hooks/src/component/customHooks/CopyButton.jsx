import React from 'react'
import UseCopyToClipboard from './UseCopyToClipboard'

const CopyButton = ({ code }) => {
    const [isCopied, handleCopy] = UseCopyToClipboard(5000);

    return (
        <div>
            <button onClick={() => handleCopy(code)}>{isCopied ? "copied" : "not copied"}</button>
        </div>
    )
}

export default CopyButton
