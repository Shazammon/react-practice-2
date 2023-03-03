import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'

export const ThemeContet = React.createContext()

export default function AppTwo() {

    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}/>
            <button
            
        </>
    )
}