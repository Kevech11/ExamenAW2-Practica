const btnCreate = document.getElementById("create")
const express = require('express');

const servidor = express();
const port = 5500

const ingredientes = requiere

btnCreate.addEventListener('click',()=>{
    const name = document.getElementById("name").value  
})

window.addEventListener('load', function() {
    servidor.get('/api/ing', (request, response) => {
        response.status(200).json(ingredientes);
    });
    /*Llenar lista con los ingredientes existentes*/

    /*const li = document.createElement('li')
    li.textContent = `${ing}: ${quantity}`
    document.getElementById('list').appendChild(li)*/
})