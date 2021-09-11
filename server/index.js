const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const clientsRoutes =require('./routes/clients') 
const productsRoutes =require('./routes/products') 
const chargesRoutes =require('./routes/charge') 
const chargesClientsRoutes =require('./routes/chargeClient') 
const factureRoutes =require('./routes/facture')
require("dotenv").config();
const app = express()
const http = require("http").createServer(app);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
;
require('dotenv').config();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use('/clients', clientsRoutes);
app.use('/products', productsRoutes);
app.use('/charge', chargesRoutes);
app.use('/charge-client',chargesClientsRoutes );
app.use('/facture',factureRoutes );
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MONGO DB is connected on port : 8000");
    }
  );





















const PORT = process.env.PORT || 8000;
http.listen(PORT, () => console.log(`server is running on port : ${PORT}`));