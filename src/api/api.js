import React from "react";
import axios from 'axios';

const getData = async () => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    return response.data
};

const deleteData = () => {
    
}


