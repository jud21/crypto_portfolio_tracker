import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import candlestick from '../../assets/images/candlestick2.jpg';
import { classicNameResolver } from 'typescript';

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

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Add a Coin to your <span className={classes.red}>Crypto Collector</span> Portfolio!</h1>
            {/* <button className="btn btn-primary mt-3" onclick="loadData()">Get Data</button>
            <button className="btn btn-danger mt-3" onclick="deleteData()">Clear Data</button> */}
            <div>
                <label className={classes.form}>Coin ID</label>
                <input className={classes.form} type="text" name="coinid"></input>
                <label className={classes.form}>Quantity</label>
                <input className={classes.form} type="number" name="quantity"></input>
                <input className={classes.form} type="submit" value="Add Coin(s)"></input>
                <hr className={classes.line}></hr>
            </div>
        </div>
    )
}