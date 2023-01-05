const app = require('./app');
const dotEnv = require('dotenv');
const connectDatabase = require('./config/database');
//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting Down the server due to Uncaught Exception');
    process.exit(1);
})

//Config Dot Env
dotEnv.config({path:'backend/config/config.env'});

//Connect the Database
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listening on http://localhost:${process.env.PORT}`);
});

//unHandled Promise Rejection
process.on("unhandledRejection", (err)=>{

    console.log(`Error : ${err.message}`);
    console.log('Shutting Down the server due to unhandled promise rejection');

    server.close(()=>{
        process.exit(1);
    })

})
