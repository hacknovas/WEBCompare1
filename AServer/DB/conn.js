const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mahi:mahi2002@cluster0.u1xljya.mongodb.net/wbcompare?retryWrites=true&w=majority", () => {
    console.log("connected");
});
