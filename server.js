const app = require('./app')
require('dotenv').config()
const port = process.env.PORT || 8080




require('./db/db')
app.listen(port,()=>{
    console.log(`your app is running on http://localhost:${port}`);
})