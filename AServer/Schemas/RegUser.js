const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        required: true
    },
    RPass: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Message: [
        {
            Name: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                required: true
            },
            Mess: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.method("generateAuthToken", async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log("Not Generated token")
    }
});


userSchema.method("addMessage", async function (name, email, message) {
    try {
        this.Message = this.Message.concat({ Name: name, Email: email, Mess: message });
        await this.save();
        return this.Message;
    } catch (error) {
        console.log("Not Created message");
    }
});


// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log("Not Geneter token");
//     }
// }

const rgu = new mongoose.model("RegisterdUser", userSchema);

module.exports = rgu;
