const express = require("express")
const app = express()
const router = require("./router")
require("dotenv").config()
const port = process.env.PORT || 3000

app
   .set("view engine", "ejs")
   .set("views", "view")
   .use(router)
   .listen(port, () => {
      console.log(`Server is listening on port ${port}`)
   })
   