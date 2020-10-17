const express = require('express');
const axios = require('axios');
const app = express();
//Activating C.O.R.S.
const cors = require('cors');
app.use(cors());


var path = 'https://jsonplaceholder.typicode.com/users';

app.get('/', async (req, res) => {
    try {
        const { data } = await axios(path)
        return res.json(data);
    }catch(err) {
        console.error(err)
    }
})

app.listen('4000');