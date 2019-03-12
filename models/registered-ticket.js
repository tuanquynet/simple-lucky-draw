const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = mongoose.Schema;

const RegisteredTicketSchema = new Schema({
	user: { type: Types.ObjectId, ref: 'User' },
	ticketNumber: { type: Types.String, required: true },
});

const RegisteredTicketModel = mongoose.model('RegisteredTicket', RegisteredTicketSchema);

module.exports = {
	RegisteredTicketSchema,
	RegisteredTicketModel,
};