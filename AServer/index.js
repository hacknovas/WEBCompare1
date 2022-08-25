require('dotenv').config();
require("./DB/conn");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const coll = require("./Schemas/DetailOfProd");
const rgu = require("./Schemas/RegUser");
const authentication = require("./middleware/Athenticate");
const scrapData = require('./Scrapping/ftch');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': "html" });
    res.write("MSdian");
    res.end();
});

let token;

app.post('/chklogin', async (req, res) => {
    let dt = await rgu.findOne({ Email: req.body["Email"] });

    if (dt) {
        if (dt.Pass == req.body["Pass"]) {
            token = await dt.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            console.log(token);
            return res.json({ message: "Successfully Login" });
        }
    }
    if (token) {
        console.log(token);
    } else {
        return res.status(400).json({ message: "Invalid Credientials" });
    }

});

app.post('/registerUser', async (req, res) => {
    let { Name, Email, Pass, RPass } = req.body;
    let demo = {
        Name: Name, Email: Email, Pass: Pass, RPass: RPass
    }

    const data = new rgu(demo);
    const reslts = await data.save();
});


app.post('/insertdatas', async (req, res) => {
    let demo = {
        Product_Name: req.body["Name"],
        Links: { Flipkart: req.body["FLink"], Amazon: req.body["ALink"], Croma: req.body["CLink"] }
    }
    const dm = new coll(demo);
    const results = await dm.save();

    const fn = await coll.findOne({ _id: results._id });
    const result = await fn.getDetailFrom();
    // console.log(result);

    res.status(200).send({ mes: "Submited" });
});


app.get("/chkadmin", authentication, (req, res) => {
    res.send(req.rootUser);
});

app.get("/getdata", authentication, (req, res) => {
    res.send(req.rootUser);
});

app.post("/chkcontact", authentication, async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            console.log("ERRRoR");
            return res.json({ error: "PLZ FIll Correct INFO Empty Field" });
        }

        const userD = await rgu.findOne({ _id: req.rootUser._id });

        if (userD) {
            const userMessage = await userD.addMessage(name, email, message);

            await userD.save();
            res.status(201).json({ message: "user constact mesaage added successfuly" });
        }

    } catch (error) {
        console.log("Error");
    }
});

app.get('/logout', async (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send({ message: "Logout Suucess" });
});

app.get("/getAllData", async (req, res) => {
    const data = await coll.find();
    res.status(200).send(data);
});

app.post("/updatePoducts", async (req, res) => {
    const data = await coll.findOne({ _id: req.body.id });

    if (req.body.Prices.AmazonP != data.Prices.AmazonP || req.body.Prices.FlipkartP != data.Prices.FlipkartP) {
        console.log("Done");
        const result = await data.getDetailFrom();
    }

});

app.listen(PORT, () => {
    console.log(`running on port${PORT}`);
});
