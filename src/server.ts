import { app } from './app'
import { env } from './constants/env'

const PORT = env.PORT

app
  .listen({
    port: PORT,
    host: '0.0.0.0'
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running on port ${PORT}`)
  })
