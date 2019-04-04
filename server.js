const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server');
const app = express();
const PORT = 3001;
const instance_locator_id = 'd6c4298a-4426-4c96-b34f-293f38003694';
const chatkit_secret = '9b397456-5781-40b7-bdb9-7a89992743ff:M2Cru8AyJvvXYPCpctUGhl/CGdsLUQEFAlWVl9UyVa8=';

// declarations


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



const chatkit = new Chatkit.default({
      instanceLocator: `v1:us1:${instance_locator_id}`,
      key: chatkit_secret,
    });

app.post('/users', (req,res) => {
  const {username} =  req.body

try{
chatkit.createUser({
  name:username,
  id: username,
})
.then(() => res.sendStatus(201))
.catch((error) => {
  if(error.error === 'services/chatkit/user_already_exists'){
    console.log('user exists already')
    res.sendStatus(200)
  }
  else{
    res.status(error.status).json(error)
  }
  
})
}
catch(err){
  console.log(error)
}


})


app.listen(PORT, err => {
      if (err) {
        console.error(err)
      } else {
        console.log(`Running on port ${PORT}`)
      }
    })