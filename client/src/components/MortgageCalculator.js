import React, { useEffect, useState } from 'react';
import '../assets/css/mortgageCalculator.css';

export default function MortgageCalculator() {
  const [ interestRate, setInterestRate ] = useState(4.5)
  const [ term, setTerm ] = useState(30)
  const [ homeValue, setHomeValue ] =  useState(200000)
  const [ downPayment, setDownPayment ] = useState(20000)
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  function calcPayment() {
    var M;
    var P = homeValue;
    var I = interestRate / 100 / 12;
    var N = term * 12;
    M = monthlyPayment(P, N, I)
    var number = M.toFixed(0);
    var num = (number + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    return num;
  }
  function monthlyPayment(p, n, i) {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
  }
    return ( 
        <div className="calc-wrapper">
          <h1 className="calc-header"> Mortgage Calculator </h1>
          <div className="input-holder">
            <label htmlFor="value" className="calc-input-label">
              Home Price
            </label>
            <input type="number"
              name="value"
              value={homeValue}
              onChange={(e) => setHomeValue(e.target.value)}
              placeholder="Home Value"
              className="calc-input"
            />
          </div>
          <div className="input-holder">
            <label htmlFor="downPayment" className="calc-input-label">
              Down Payment
            </label>
            <input type="number"
              name="downPayment"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="Down Payment"
              className="calc-input"
            />
          </div>
          <div className="input-holder">
            <label htmlFor="interestRate" className="calc-input-label">
              Interest Rate
            </label>
            <input type="Number"
              name="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="4.5%"
              className="calc-input"
              />
          </div>
          <div className="input-holder">
            <label htmlFor="term" className="calc-input-label">
              Term
            </label>
            <input type="number"
              name="term"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="30 Years"
              className="calc-input"
            />
          </div>
          <div className="payment-holder">
            <p className="payment-par">
              Your Payment
            </p>
            <p className="monthly-payment">
              ${calcPayment()}
            </p>
          </div>
        </div>
    )
}
