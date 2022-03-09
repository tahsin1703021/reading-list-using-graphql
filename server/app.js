const express = require ('express');
const graphql = require('express-graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;//express doesn't know how to handle such query, 
//so we need to require express-graphql
const initialSchema = require('./schemas/initialSchema');//it is a middleware thar needs to be passed 
// which includes the structure/design/types of the data and the queries
const cors = require('cors');

const app = express();               

app.use(cors());
//mongoose                                        
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tahsin:12345@graphqlserver.aubmm.mongodb.net/test');
mongoose.connection.once('open',()=>{
    console.log('Connected to database');
});


app.use('/graphql',graphqlHTTP({
    schema: initialSchema,
    graphiql: true
})); 

app.listen(8000,()=>{
    console.log('Listenig for requests on port 8000');
})