var app = require('./config/server');
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log('Server ON');
});