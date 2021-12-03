import React from "react";
import axios from 'axios';
import { config } from "process";

const getData = async (id: string) => {
     let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
     return response.data
 };

// const loadData = async() => {
//     let coinData = await getData();

    // let coin = api pathway

    // let value = api pathway
// }

const myCoinValue = () => {
    //quantity * current coin value
}

const myPortfolioValue = () => {
    //sum of all myCoinValue
}

const deleteData = () => {
    //Delete a coin from personal database
}

export { getData }