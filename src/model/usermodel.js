const mongoose = require('mongoose');

const mongoAtlasUri = 'mongodb+srv://pkshafna:123@cluster0.vzhbl.mongodb.net/?retryWrites=true&w=majority';
 try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
      console.log(e);
    console.log("could not connect");
  }

//mongoose.connect('mongodb://localhost:27017/greetcard');
const Schema = mongoose.Schema;


const usersschema = new Schema({
    id : String,
   name: String,
  email :String,
   
});

const userdata = mongoose.model('userdata',usersschema);

module.exports = userdata;