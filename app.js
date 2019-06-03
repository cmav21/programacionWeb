const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.use(express.json());

const response = {
    error: false,
    status: 200,
    message: 'ok'
};

app.get('/', (req, res)=>{
    res.json(response);
});

function setResponse(response, data) {
    response.error = data.error;
    response.status = data.status;
    response.message = data.message;
    return response;
}

app.get('/user/:nombre', (req, res)=>{
    let nombre = req.params.nombre;
    if(nombre < 50){
        res.json(setResponse(response, {error: true, status: 200, message:'ok'}));
    }
    else {
        res.json(setResponse(response, {error: false, status: 400, message:'error'}));
    }
});

app.listen(port);