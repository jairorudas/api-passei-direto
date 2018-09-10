const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const allowCors = require('./cors')
const port  = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())
app.use(allowCors)

app.get('/:string', (req, res) => {
    request.get(`https://search-api.passeidireto.com/api/Search/GlobalSearch?Query=${req.params.string}&ContentTypeIds%5B%5D=1&PageNumber=0&PageSize=20&Order=2`, (err, resp, body) =>{
        if(err) return res.send(error).end();
        return res.send(body).end()
    })
})

app.listen(port, () => console.log(`Rodando app na porta de ${port}`))