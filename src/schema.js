import pkg from 'graphql'
const { buildSchema } = pkg

const schema = buildSchema(`
 type Query {
   hello: String
 }
`)

export default schema
