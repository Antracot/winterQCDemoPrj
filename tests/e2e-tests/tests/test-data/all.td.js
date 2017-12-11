const Chance = require('chance');

let ch = new Chance();

const AllData = function() {

	let firstName = ch.first({ gender: 'female' });
	let lastname = ch.last({ gender: 'female' });

	this.regInp = [
		'first', 'last',
		'mail', 'gender',
		'address', 'phone', 'message'
	];

	this.regData = [
		firstName, lastname, 
		firstName + '-' + ch.hash({ length: 10 }) + '@gmail.com',
		'female', '(212) 922-3000', '555 5th Ave, New York, NY 10017', 
		'Please, make more QC meetups'
	];

	this.titlePage = {
		main: 'QC MeetUp',
		speak: 'Speakers',
		reg: 'Registration',
		map: 'Map'
	};

	this.h1MainPage = 'Winter QC Meetup';

	this.msgSuccess = 'Thanks for you question. We contact with you soon!';

	this.names = [
		'Юлія Тарновська', 
		'Артем Корчевий', 
		'Тетяна Лесів'
	];	

	this.mgsInp = [
		'msgName', 'msgPhone', 'msg'
	]; 

	this.msgData = [
		firstName, '(212) 922-3000', 
		'Please, make more QC meetups'
	];

	this.address = [
		'09 dec 2017', 'hotel "Stanislaviv"', 
		'Viacheslava Chornovola St, 7', 'Ivano-Frankivs\'k, 76000'
	];


};

let alldata = new AllData();
module.exports = alldata;
