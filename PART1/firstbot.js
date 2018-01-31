const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Drift = require('drift-chat');


app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, () => console.log('Your first bot is listening on port 3000!'));

//shows that your public domain is hooked up
app.get('/', async(request, response) => {
 return response.status(200).send('check it out!!')
})

//printing the message body in terminal when you receive the event
app.post('/', async(request, response) => {
 console.log(request.body);
 if (!data) return response.send(400);

})
