const express = require('express');
const cors = require('cors');
require("dotenv").config();

/* Middleware */
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

/* Route */
app.use("/", require("./router/instagram.router"));
app.use((req, res, next) => {
    res.status(404).json({"error":"ROUTER.ROUTENOTFOUND.EXCEPTION","message":"Sorry, destination not found"}).end();
});

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`${new Date()} - Instagram API Started At ${process.env.PORT}`);
});