const mongoose = require('mongoose');

const studentDoc = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    standard:{
        type: String,
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

studentDoc.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await pass.hash(this.password, 12);
        this.cpassword = await pass.hash(this.cpassword, 12);
    }
    next();
});


studentDoc.methods.generateAuthTokenStudent = async function() {
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const Student = mongoose.model('STUDENT', studentDoc);

module.exports = Student;