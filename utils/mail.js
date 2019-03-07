const nodemailer = require('nodemailer');

const defaultMailConfig = {
	from: 'nodejs.course@luckydraw.com',
	recipientEmail: '',
	cc: '',
	bcc: [],
	subject: 'Lucky Draw Message',
	message: 'Hello!',
};

const nodeMailer = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // secure:true for port 465, secure:false for port 587
	auth: {
		user: 'frontend.api@gmail.com',
		pass: 'ngaymai@abc'
	}
}

let transporter = nodemailer.createTransport(nodeMailer);

module.exports = {
	 send(options) {
		// send email to user
		options = Object.assign(defaultMailConfig, options);
		// setup email data with unicode symbols
		let mailOptions = {
			from: options.from,
			to: options.recipients,
			subject: options.subject,
			html: options.message,
		};

		return new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log(error);
					return reject(error);
				}

				console.log('Message %s sent: %s', info.messageId, info.response);
				resolve(info);
			});
		});
	 }
}
