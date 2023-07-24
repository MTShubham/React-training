import React from 'react'
import style from './PageTitle.module.css';

const PageTitle = ({ children }) => {
    return (
        <h2 className={style.heading}>{children}</h2>
    )
}

export default PageTitle
