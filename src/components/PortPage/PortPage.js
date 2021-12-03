import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import candlestick from '../../assets/images/candlestick2.jpg';
import { classicNameResolver } from 'typescript';
import { getData } from '../../api/api'

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${candlestick});`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    title: {
        color: '#9ACD32',
        fontFamily: 'OCR A Std, monospace',
        marginLeft: '20px'
    },
    form: {
        marginLeft: '20px',
        display: 'block',
        marginTop: '5px'
    },
    line: {
        marginTop: '5px',
        marginBottom: '5px'
    },
    red: {
        color: 'red'
    },
    represent: {
        marginLeft: '250px',
        marginTop: '20px',
        fontSize: '5rem',
        fontWeight: 'bolder',
        color: '#1e4d2b',
        fontFamily: 'OCR A Std, monospace',
    },
    portValue: {
        marginLeft: '12vw',
        marginTop: '20px',
        color: '#1e4d2b',
        fontFamily: 'OCR A Std, monospace'
    }
    
});

export const PortPage = () => {

    const classes = useStyles()
    const [coinData, setCoinData] = useState({})
    const [coinId, setCoinId] = useState('')
    const [quantity, setQuantity] = useState('')


    const onGetDataClick = async () => {
        const data = await getData(coinId)
        setCoinData( data )
    };
    console.log(coinData)

   const oneCoinData = coinData[coinId]

   const portfolioValue = () => {
       return quantity * (coinData?.market_data?.['high_24h'].usd || 1)
   }

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Add a Coin to your <span className={classes.red}>Crypto Collector</span> Portfolio!</h1>
            <div>
                <label className={classes.form}>Coin Name</label>
                <input
                    className={classes.form}
                    placeholder="e.g. Ethereum"
                    type="text"
                    name="coinid"
                    onChange={e => { setCoinId(e.currentTarget.value) } }
                    value={coinId}
                ></input>
                <label className={classes.form}>Quantity</label>
                <input 
                    className={classes.form} 
                    type="number"
                    name="quantity"
                    onChange={e => { setQuantity(e.currentTarget.value) } }
                    value={quantity}>
                </input>
                <input className={classes.form} type="submit" onClick={onGetDataClick} value="Add Coin(s)"></input>
                <hr className={classes.line}></hr>
                <h2 className={classes.portValue}>Your Portfolio's USD Value is:</h2>
                <div className={classes.represent}>
                    {portfolioValue()}
                </div>
            </div>
        </div>
        //coinData.tickers[5].converted_last.usd
        //?.market_data?.high_24h?.usd
    )
}