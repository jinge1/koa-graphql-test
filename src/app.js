import Koa from 'koa'
import Router from 'koa-router'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
// import schema from './schema.js'

const app = new Koa()
const router = new Router()

// app.use(async (ctx) => {
//   console.log('654')
//   ctx.body = 'Hello World'
// })

// app.listen(3000)

// console.log('Koa')

// app.use(
//   mount(
//     '/graphql',
//     graphqlHTTP({
//       schema: schema,
//       graphiql: true,
//     })
//   )
// )

router.get('/', async (ctx) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //       ctx.body = `1000 from serve ${Date.now()}`
  //     }, 1000)
  //   })
  ctx.body = `1000 from serve ${Date.now()}`
})

router.get('/about', (ctx) => {
  ctx.body = 'about'
})

//启动路由
app.use(router.routes()).use(router.allowedMethods()) //官方推荐

app.listen(3000)
