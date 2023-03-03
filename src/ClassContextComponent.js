import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
        }
    }

    return (
        <>
            <div>hi</div>
        </>
    )
}