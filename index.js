import express from "express"
import cors from "cors"
import pg from "pg"

const app = express()
app.use(cors())
const {Pool} = pg

const db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "12345678",
    database: "legenddb",
    port:5432
})

app.get("/products", async (req,res)=>{
    try {
        const product = await db.query("SELECT * FROM products;")
        res.json(product.rows)
    } catch (error) {
        console.log(error.message)
    }
    
})

app.get("/todos",async (req,res)=>{
    try{
        const result = await db.query("SELECT * FROM todo;")
        res.json(result.rows)
    }catch{
        console.log(error.message)
    }
    
})

app.get("/",(req,res)=>{
    res.json({
        "message":"hello"
    })
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})