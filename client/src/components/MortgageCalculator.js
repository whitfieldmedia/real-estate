import React, { useEffect } from 'react';
import '../assets/css/mortgageCalculator.css';

export default function MortgageCalculator() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
    return (
        <div className="mortgage_calculator_page">
            <div id="acww-widgetwrapper"
                style={{
                    minWidth:"250px",
                    width:"95%",
                    maxWidth: "1000px"}}>
                <div id="acww-widget"
                    style={{
                        position:"relative",
                        paddingTop:0,
                        paddingBottom: "280px",
                        height: 0,
                        overflow: "hidden"}}>
                </div>
                <div id="acww-more"
                    style={{
                        background:"#333",
                        font: "normal 13px/1 Helvetica, Arial, Verdana, Sans-serif",
                        padding: "10px 0",
                        color: "#FFF",
                        textAlign: "center",
                        width: "100%",
                        clear: "both",
                        margin: 0,
                        float: "left",
                    }}>
                        <a style={{
                                background: "#333",
                                color: "#FFF",
                                textDecoration: "none",
                                borderBottom: "1px dotted #ccc"}}
                            href="https://usmortgagecalculator.org/"
                            title="Mortgage Calculator"
                            rel="nofollow noopener noreferrer"
                            target="_blank">
                            usmortgagecalculator.org
                        </a>
                    </div>
                </div>
        </div>
    )
}
