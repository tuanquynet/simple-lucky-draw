const tools = require('./tools');

const ticketStores = {
	luckyNumber: '3084-8447-2831',
	availableTickets: [
		'3084-8447-2831',
	  '5382-4028-1425',
	  '5447-0165-7730',
	  '4566-3621-9877',
	  '6721-2027-9285',
	  '7959-2635-2546',
	  '8637-0334-7712',
	  '7420-0190-1165',
	  '6107-5581-4310',
	  '1606-0117-9709'
	],

	randTicket() {
		const rnd = `${tools.generateNumber(4)}-${tools.generateNumber(4)}-${tools.generateNumber(4)}`;
		ticketStores.availableTickets.push(rnd);

		return rnd;
	},

}

module.exports = {
	getNewTicket() {
	 const rnd = Math.floor(Math.random() * ticketStores.availableTickets.length);
	 return ticketStores.availableTickets[rnd];
	},

	getRndNewTicket() {
	 return ticketStores.randTicket();
	},

	checkValidTicket(number) {
		return ticketStores.availableTickets.includes(number);
	},

	checkLuckyNumber(number) {
		return ticketStores.luckyNumber === number;
	}
}
