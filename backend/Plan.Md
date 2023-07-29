## Backend

-Install dependencies (express, mongoose, cors, dotenv, nodemon)
-Create server.js file
-Create ProductModel file (where you define schema)
-Create .env file
-Create .gitignore file

In the server file: 
require express, mongoose, cors, dotenv, nodemon
create port variable and set it to process.env.PORT || 5000
create app variable and set it to express()
connect to mongoose db (it takes 2 parameters, the first is the connection string, the second is an object with some options)

Bind connection to error event to be notified of errors
Bind connection to open event to be notified whed when connection is made
app.use(cors())
app.use(express.json())


In the product model file: 
require mongoose
create productSchema variable and set it to new schema
create Product variable and set it to mongoose.model('Product', productSchema) and export it with module.exports


