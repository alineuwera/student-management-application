require("dotenv").config();
const express = require('express');
const connectToDb = require("./db/dbconnection");
const allRoutes = require("./routes");
// const studentRouter = require('./routes/student.routes');
const app = express();
connectToDb();
app.use(express.json());

app.use('/api/sms/v1/', allRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
});