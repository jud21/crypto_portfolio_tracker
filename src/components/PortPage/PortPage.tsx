import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import candlestick from '../../assets/images/candlestick2.jpg';
import { classicNameResolver } from 'typescript';
import { getData, loadData } from '../../api/api'

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
    }
    
})

export const PortPage = () => {

    const classes = useStyles()
    const [coinData, setCoinData] = useState({})
    const [coinId, setCoinId] = useState('')


    const onGetDataClick = async () => {
        const data = await getData(coinId)
        setCoinData({ [coinId]: data })
    }
    console.log(coinData)



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
                <input className={classes.form} type="number" name="quantity"></input>
                <input className={classes.form} type="submit" onClick={onGetDataClick} value="Add Coin(s)"></input>
                <hr className={classes.line}></hr>
            </div>
        </div>
    )
}