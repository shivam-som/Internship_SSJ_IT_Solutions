const express = require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const Teacher = require('../model/teachersDoc');
const Student = require('../model/studentDoc');

router.get('/', (req, res)=>{
    res.send("Hello World From Server router js");
});

router.post('/registerAsTeacher', async (req, res)=>{
    const {name, age, gender, email, password, cpassword} = req.body;
    if(!name || !age || !gender || !email || !password || !cpassword){
        console.log("Server Fill All the details");
        return res.status(422).json({error: "Please Fill all the details."});
    }
    try{   
        const teacherExist = await Teacher.findOne({email:email})
        if(teacherExist){
            return res.status(422).json({error: "Email already Exists"});
        }else if(password != cpassword){
            return res.status(422).json({error: "Password & Confirm Password Not Match"});
        }else{
            const teacher = new Teacher({name, age, gender, email, password, cpassword});
            await teacher.save();    
            res.status(201).json({message: "Teacher Registered Successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

router.post('/registerAsStudent', async (req, res)=>{
    const {name, standard, location, email, password, cpassword} = req.body;
    if(!name || !standard || !location || !email || !password || !cpassword){
        return res.status(422).json({error: "Please Fill all the details."});
    }
    try{
        const studentExist = await Student.findOne({email:email})
        if(studentExist){
            return res.status(422).json({error: "Email already Exists"});
        }else if(password != cpassword){
            return res.status(422).json({error: "Password & Confirm Password Not Match"});
        }else{
            const student = new Student({name, standard, location, email, password, cpassword});
            await student.save();
            res.status(201).json({message: "Student Registered Successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

router.post('/loginTeacher', async (req, res) => {

    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Plz Fill the data"});
        }
        const teacherLogin = await Teacher.findOne({email: email});
        
        if(teacherLogin){
            // console.log(teacherLogin);
            const isMatch = await bcrypt.compare(password, teacherLogin.password);

            token = await teacherLogin.generateAuthTokenTeacher();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now()+ 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Teacher SignIN Error, Invalid Credentials"});
            }else{
                res.json({message: "Teacher SignIn Successfully"});
            }    
        }else{
            res.status(400).json({error: "Teacher SignIN Error, Invalid Credentials"});
        }
        
    }catch(err){
        console.log(err);
    }
});

router.post('/loginStudent', async (req, res) => {

    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Plz Fill the data"});
        }
        const studentLogin = await Teacher.findOne({email: email});
        
        if(studentLogin){
            // console.log(studentLogin);
            
            const isMatch = await bcrypt.compare(password, studentLogin.password);
    
            token = await studentLogin.generateAuthTokenStudent();
            
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now()+ 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Student SignIN Error, Invalid Credentials"});
            }else{
                res.json({message: "Student SignIn Successfully"});
            }    
        }else{
            res.status(400).json({error: "Student SignIN Error, Invalid Credentials"});
        }
    }catch(err){
        console.log(err);
    }
});

router.get('/about',authenticate,  (req, res)=>{
    console.log("Hello My About after middleware");
    res.send("Hello World From About");
});


module.exports = router;