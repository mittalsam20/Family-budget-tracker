const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String, required: true },
    admin: {
        type: Boolean,
        default: false,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    famMembers: [{
        famMember: {
            type: String,
            required: true
        }
    }],
    incomes: [{
        income: {
            type: Number,
            required: true
        }
    }],
    expenses: [{
        expense: {
            type: Number,
            required: true
        }
    }],
    savings: [{
        saving: {
            type: Number,
            required: true
        }
    }],
    investments: [{
        investment: {
            type: Number,
            required: true
        }
    }],
    date: { type: Date, default: Date.now }
})

userSchema.methods.generateAuthToken = async function() {
    let curtoken = jwt.sign({ _id: this._id }, "workHarderThanAnyonePresentOnThisEarth")
    this.tokens = this.tokens.concat({ token: curtoken })
    await this.save();
    return curtoken;
}

module.exports = mongoose.model("user", userSchema);