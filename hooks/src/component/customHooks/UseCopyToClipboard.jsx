import React, { useCallback, useEffect, useState } from 'react'
import copy from 'copy-to-clipboard'

const UseCopyToClipboard = (resetInterval = null) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback((text) => {
        if (typeof text === "string" || typeof text === "number") {
            setIsCopied(true);
            copy(text.toString());
        }
        else {
            setIsCopied(false);
            console.error(`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`);
        }
    }, [])

    return [isCopied, handleCopy]
}

export default UseCopyToClipboard
