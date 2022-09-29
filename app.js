
const express = require('express')

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method);
    response.status(200).json({
        name: 'Diego', 
        age: '35',
        country: 'Colombia'
    })
})

app.post('/metas', (request, response) => {
    console.log(request.method);
    response.status(200).json({
        Hobbie1: 'Exercise', 
        Hobbie2: 'movies',
        Hobbie3: 'travel'
    })
})

app.patch('/metas', (request, response) => {
    console.log(request.method);
    response.status(200).json({
        Meta1: 'To stady english',
        Meta2: 'Get my first job as a developer'
    })
})

app.put('/business', (request, response) => {
    console.log(request.method);
    response.status(200).json({
        Company1: 'Google',
        Company2: 'Globant', 
        Company3: 'Octobot'
    })
})


app.listen(8000, () => {
    console.log('server started at port 8000');
})



