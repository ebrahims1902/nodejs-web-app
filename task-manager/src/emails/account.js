const sgMail =require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'ebrahim19022002@gmail.com',
    from: 'ebrahims1902@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})