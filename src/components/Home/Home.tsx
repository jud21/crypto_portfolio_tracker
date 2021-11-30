import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import chainlink_image from '../../assets/images/chainlink-link-logo.png';

interface Props{
    title: string;
}

export const Home = ( props:Props ) => {

    return (
        <div>
            <main>
                <div>
                    <h1>{ props.title }</h1>
                    <p>Your Favorite Web 2.0 Portfolio Tracker</p>
                </div>
            </main>
            <div>
                <fieldset>
                    <form>
                        <label>Email</label>
                        <input type="email" name="email"></input>

                        <label>Password</label>
                        <input type="Password" name="Password"></input>

                        <input type="submit" value="Continue"></input>
                    </form>
                </fieldset>
                <button color='primary'>Make An Account</button>
            </div>
        </div>
    )
}