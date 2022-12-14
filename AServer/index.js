require('dotenv').config();
require("./DB/conn");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const coll = require("./Schemas/DetailOfProd");
const rgu = require("./Schemas/RegUser");
const authentication = require("./middleware/Athenticate");
const coll1 = require("./Schemas/feedback");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());


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
    try {

        let { Name, Email, Pass, RPass } = req.body;
        let demo = {
            Name: Name, Email: Email, Pass: Pass, RPass: RPass
        }

        const data = new rgu(demo);
        const results = await data.save();

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
});

app.post('/insertdatas', async (req, res) => {
    const cat = req.body["Category"];
    var temp1 = false, temp2 = false, temp3 = false;
    if (cat == "Electronics") {
        temp1 = true;
    } else if (cat == "Fashion") {
        temp2 = true;
    } else if (cat == "Mobile") {
        temp3 = true;
    }

    let demo = {
        Product_Name: req.body["Name"].toUpperCase(),
        Links: { Flipkart: req.body["FLink"], Amazon: req.body["ALink"], Croma: req.body["CLink"] },
        Category: {
            Mobile: temp3,
            Electronics: temp1,
            Fashion: temp2
        }
    }
    const dm = new coll(demo);
    const results = await dm.save();

    const fn = await coll.findOne({ _id: results._id });
    const result = await fn.getDetailFrom();

    res.status(200).send({ mes: "Submited" });
});


app.get("/chkadmin", authentication, (req, res) => {
    if (req.rootUser.Admin == true) {
        res.send(req.rootUser);
    } else {
        res.sendStatus(400);
    }
});

app.get("/getdata", authentication, (req, res) => {
    res.send(req.rootUser);
});

app.post("/chkcontact", authentication, async (req, res) => {
    try {
        const { PName, Message } = req.body;

        if (!PName || !Message) {
            return res.json({ error: "PLZ FIll Correct INFO Empty Field" });
        }
        const userD = await rgu.findOne({ _id: req.rootUser._id });

        if (userD) {
            const userMessage = await userD.addMessage(PName, Message);

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
    const data = await coll.find().limit(30);
    res.status(200).send(data);
});

app.post("/getSingleData", async (req, res) => {
    const data = await coll.findOne({ _id: req.body.id });

    if (data.Prices.AmazonP != req.body.Prices.AmazonP || data.Prices.FlipkartP != req.body.Prices.FlipkartP) {
        const result = await data.getDetailFrom();
    }

    res.status(200).send(data);
});

app.post("/getSeperateData", async (req, res) => {
    let f1 = false, f2 = false, f3 = false;
    if (req.body["name"] == "Fashion") {
        f3 = true;
    } else if (req.body["name"] == "Electronics") {
        f2 = true
    } else if (req.body["name"] == "Mobile") {
        f1 = true;
    }

    const data = await coll.find({
        Category: {
            Mobile: f1,
            Electronics: f2,
            Fashion: f3
        }
    });

    res.status(200).send(data);

});

app.post("/searchProd", async (req, res) => {
    try {
        const data = await coll.find({ Product_Name: req.body.Name.toUpperCase() });

        res.status(200).send(data);

    } catch (err) {
        res.status(400).send({ message: "Not Found" });
    }


});

app.post("/sendFeedback", async (req, res) => {

    let demo = {
        rate: req.body["rate"],
        message: req.body["message"],
        Name: req.body["Name"]
    }
    const data = new coll1(demo);
    await data.save();
})

app.get("/getFedd", async (req, res) => {
    const data = await coll1.find().limit(3);

    res.send(data);
});


app.listen(PORT, () => {
    console.log(`running on port${PORT}`);
});
