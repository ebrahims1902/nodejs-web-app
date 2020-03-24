const sgMail =require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'ebrahim19022002@gmail.com',
//     from: 'ebrahims1902@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// })

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'ebrahims1902@gmail.com',
        subject: 'Thanks for joining in!',
        text: `welcome to app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'ebrahims1902@gmail.com',
        subject : 'sorry to see you go!',
        text : `Good bye , ${name}. I hope to see you back sometime soon.`
    })
}                                                                                                                                                                                                                                                                                             

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}