const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express();

app.use('/graphql', graphqlHTTP({

}));

app.listen(3000,() => {
    console.log('App is listnening on port 3000')
})
