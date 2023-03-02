const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log("Listening on port 8080")
)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.txt')
});