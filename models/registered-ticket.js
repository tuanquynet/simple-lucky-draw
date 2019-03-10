const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = mongoose.Schema;

const RegisteredTicketSchema = new Schema({
	username: { type: Types.String },
	email: { type: Types.String, required: true },
	ticketNumber: { type: Types.String, required: true },
});

const RegisteredTicketModel = mongoose.model('RegisteredTicket', RegisteredTicketSchema);

module.exports = {
	RegisteredTicketSchema,
	RegisteredTicketModel,
};