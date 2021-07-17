const express = require('express');



//Initializations
const app = express();


//Settings
app.set('port', 4000);


//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
