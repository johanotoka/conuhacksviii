import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Calculator from './components/calculator/Calculator'


const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Header /> 
            <Calculator />
        </React.Fragment>
    )

}

export default App