const express = require('express');
const PORT = 8000;
const app = express();
const path = require('path');
//const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose.js');

//app.use(expressLayouts);

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.use(express.static('./assets'));

//routes
app.use('/', require('./routes/routes'));

//server listening
app.listen(PORT, (err) => {
    if (err) console.log("error listening on", PORT);

    console.log('listening on port', PORT);
})