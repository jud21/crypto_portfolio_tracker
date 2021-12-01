import React from "react";
import axios from 'axios';

const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers')
    console.log(response.data)
    return response.data
};


