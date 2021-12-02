import React from 'react';
import { makeStyles } from '@material-ui/core';
import candlestick from '../../assets/images/candlestick3.jpg';
import { Link } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        color: 'black'
    },
    titles:{
        fontFamily: 'OCR A Std, monospace',
        color: '#9ACD32'
    },
    form: {
        backgroundImage: `url(${candlestick});`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    labels: {
        margin: 'auto',
        marginTop: '10px',
        display: 'block',
        color: 'black'
    },
    account: {
        margin: '20px',
        marginTop: '4vh',
        display: 'block',
        color: 'black'
    },
    lines: {
        display: 'inline',
        color: 'red'
    }
})

export const SignUp = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <main>
                    <div className={classes.titles}>
                        <p>Track Your Portfolio Today!</p>
                        <div className={classes.lines}>
                            <h1>Join <strong>Crypto Collector</strong> Below</h1>
                        </div>
                    </div>
                </main>
                <div>
                        <form className={classes.form}>
                            <label className={classes.labels}>Email</label>
                            <input className={classes.labels} type="email" name="email"></input>

                            <label className={classes.labels}>Password</label>
                            <input className={classes.labels} type="Password" name="Password"></input>

                            <input className={classes.labels} type="submit" value="Submit"></input>
                        </form>
                </div>
        </div>
    )
}