var app = require('express')();
app.listen(5000);
app.get('/', function (req, res) {
    console.log('on home');
    res.send('ok')
});

