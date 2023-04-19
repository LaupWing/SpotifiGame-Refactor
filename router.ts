import express from "express"
const router = express.Router()

router.get("/", async(req, res) => {
   res.render("index", {
      test: "test test"
   }) 
})

export default router