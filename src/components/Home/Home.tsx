import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import candlestick from '../../assets/images/candlestick2.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

interface Props{
    title: string;
}

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
    }
})

export const Home = ( props:Props ) => {

    const classes = useStyles()

    return (
            <div className={classes.root}>
                <main>
                    <div className={classes.titles}>
                        <h1>{ props.title }</h1>
                        <p>Your Favorite Web 2.0 Portfolio Tracker</p>
                    </div>
                </main>
                <div>
                        <form className={classes.form}>
                            <label className={classes.labels}>Email</label>
                            <input className={classes.labels} type="email" name="email"></input>

                            <label className={classes.labels}>Password</label>
                            <input className={classes.labels} type="Password" name="Password"></input>

                            <input className={classes.labels} type="submit" value="Check Your Stack!"></input>

                            <Link to='/SignUp' className={classes.account}>Make An Account</Link>
                        </form>
                </div>
            </div>
    )
}