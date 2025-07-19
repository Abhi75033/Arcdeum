import app from "./app.js";
import DB_connection from "./src/DB/Connection.Db.js";
import dontenv from "dotenv";

dontenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 5000

DB_connection()
.then(()=>{
    app.listen(`${process.env.PORT}`|| 5000,()=>console.log(`Server is started at ${process.env.PORT || PORT}`))
}).catch((error)=>{
console.log(error);

})