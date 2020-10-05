const sgMail = require('@sendgrid/mail') 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kay20180943@std.psut.edu.jo',
        subject: 'Welcome to the App!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kay20180943@std.psut.edu.jo',
        subject: 'Goodbye! ',
        text: `${name} we are so sad that you are leaving our family. Feel free to come back anytime.`
        })
    }

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}