'use strict';


const BasePage = function() {

	 let that = this;

	this.titleGet = function() {
		return  browser.getTitle();
	};

	this.timeout = {
		'xs': 300,
		's' : 1000,
		'm' : 2000,
		'l' : 5000,
		'xl': 9000,
		'xxl': 15000
	};

	this.freeze = function(label) {
		let time;

		switch(label) {
			case 's': 
				time = this.timeout.s;
				break;
			case 'm':
				time = this.timeout.m;
				break;
			case 'l':
				time = this.timeout.l;   
				break;
			case 'xl':
				time = this.timeout.xl;   
				break;
			case 'xxl':
				time = this.timeout.xxl;   
				break;		
			default:
				time = this.timeout.s;
		}

		browser.sleep(time);
	};

};

module.exports = new BasePage();


// page.clientRowName.getText().then(function (text) {
//     console.log(text);
// });