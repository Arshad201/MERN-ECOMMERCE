const mongoose = require('mongoose');

//useNewUrlParser = they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.

//useUnifiedTopology = False by default. Set to true to opt in to using the MongoDB driver's new connection management engine

const connectDatabase = () =>{

    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`MongoDB connection with server : ${data.connection.host}`);
    })

}

module.exports = connectDatabase;