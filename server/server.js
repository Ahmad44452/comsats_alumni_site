//////////// UPDATE CHECK
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');




///////////// MONGO DB CONNECTION
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("DB Connected!");
});
///////////////////////////////////////



//////////// APPLY MIDDLEWARES
// var corsOptions = {
//   origin: 'https://comsats-alumni.netlify.app',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
var corsOptions = {
  origin: process.env.FRONTEND_URI,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }))
app.use(cors(corsOptions));
// const { checkToken } = require('./middlewares/auth');
// app.use(checkToken);


////////// API ROUTES
// const userApi = require("./routes/api/userApi");
// app.use("/api/user", userApi);
const api = require('./routes/api/api');
app.use('/api', api);

const imgApi = require('./routes/api/imgApi');
app.use('/img', imgApi);

///////////////////////////////////////

// app.use(express.static('client/build'));

// if (process.env.NODE_ENV === 'production') {
//   const path = require("path");
//   app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
//   });
// }

app.get('/json', (req, res) => {
  res.status(200).json({
    workin: true
  })
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running!");
})