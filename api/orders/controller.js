const nodemailer = require("nodemailer");
require ("dotenv").config()

const sandMail = async(req,res) => {

    const {email} = req.body
if (!email) {
    res.status(403).json({message:"Please Give Your Email"})

}
else{
    const config = {
        
         service : 'gamil',
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: process.env.NODEMAILER_EMAIL,
              pass: process.env.NODEMAILER_PASSWORD
            }
          
    }

    const transporter = nodemailer.createTransport(config); 


   const response = {
        from: process.env.NODEMAILER_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello BBBQQQQ?</b>", // html body
      }

   try {

    await transporter.sendMail(response);

    res.json({message:"Check Your Email"})
    
   } catch (error) {
    res.status(500).json((error))
   }
}
}

module.exports = {sandMail}