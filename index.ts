import type { Express, Request, Response } from "express"
import express from "express"
import router from "./router"
import "dotenv/config"

const app: Express = express()
const port = process.env.PORT || 3000

app
   .set("view engine", "ejs")
   .set("views", "view")
   .use(router)
   .listen(port, () => {
      console.log(`Server is listening on port ${port}`)
   })
   