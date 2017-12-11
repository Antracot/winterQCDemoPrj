'use strict';

const BasePage = require('../common/base.po.js');

const MapPage = function() {

	let that = this;

	//locators
	let map = by.id('map');
	let address = by.css('.address');

	
	this.scaleMap = function(){
		browser.actions().mouseMove({x: 50, y: 100}).doubleClick().perform();
		that.freeze('l');
		that.freeze('m');
	}; 

	this.getAddress = function() {
		return element.all(address).getText();
	};


	
};


MapPage.prototype = BasePage;
module.exports = MapPage;
