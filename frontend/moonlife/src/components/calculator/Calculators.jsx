import React from 'react'
import './calculator.css'
import Header from '../header/Header'
import InterestCalculator from './InflationCalculator'  

const Calculators = () => {
    return (
        <React.Fragment>
            <Header />
            <InterestCalculator />
        </React.Fragment>
    )
}

export default Calculators