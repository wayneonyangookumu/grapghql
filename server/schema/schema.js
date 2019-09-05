// schema file is useful for defining types
// to define relationships between types
// to define root queries
const graphql = require('graphql')

const {GrapghQLObjectType, GrapghQLString, GraphQLSchema} = graphql

const BookType = new GrapghQLObjectType({
    name: "Book",
    fields: () => ({
        id: {Type: GrapghQLString},
        name: {Type: GrapghQLString},
        genre: {Type: GrapghQLString}
    })
})

const RootQuery = new GrapghQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: {
            type: BookType,
            args: { id: {Type: GrapghQlString}},
            resolve(parent, args){
                //code to get data from the database
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})