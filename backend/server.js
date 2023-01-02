const app = require('./app');
const dotEnv = require('dotenv');

//Config Dot Env
dotEnv.config({path:'backend/config/config.env'});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listening on http://localhost:${process.env.PORT}`);
})