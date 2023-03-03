import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#333' : '#CCC',
            padding: '2rem',
            margin: '3rem'
        }
    }

    render() {
        return (
            
        )

    }
}