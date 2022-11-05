import React from 'react'
import { Link, useMatch } from "react-router-dom"
//useMatch hooks-ը վերադարձնում է true երբ որպես արգումենտ ստացած համընկնում է 
// այն հղման հետ որը ներկա պահին active է
//useMatch - վերադարձնում է կամ null կամ Օբյեկտ

function CustomLink({ children, to, ...props }) {
    const match = useMatch(to)
    return (
        <Link
            {...props}
            to={to}
            style={{
                color: match ? "red" : "black"
            }}
        >
            {children}
        </Link>
    )
}

export default CustomLink