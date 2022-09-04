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
            PName: {
                type: String,
                required: true
            },
            Mess: {
                type: String,
                required: true
            }
        }
    ],
    Admin: {
        type: Boolean,
        default: false
    },
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


userSchema.method("addMessage", async function (name, message) {
    try {
        this.Message = this.Message.concat({ PName: name, Mess: message });
        await this.save();
        return this.Message;
    } catch (error) {
        console.log("Not Created message");
    }
});


const rgu = new mongoose.model("RegisterdUser", userSchema);

module.exports = rgu;
