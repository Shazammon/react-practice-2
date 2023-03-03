import React, { useContext } from "react";
import { ThemeContext } from "./AppTwo";

export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '3rem'
    }
    return (
            <div style={themeStyles}>Function Theme</div>
    )
}