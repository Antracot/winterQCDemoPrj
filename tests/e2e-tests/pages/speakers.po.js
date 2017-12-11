'use strict';

const BasePage = require('../common/base.po.js');

const SpeakersPage = function() {

	let that = this;

	//locators
	let fisrtImage = by.css('img[src="../img/speaker1.png"]');
	let secondImage = by.css('img[src="../img/speaker2.png"]');
	let thirdImage = by.css('img[src="../img/speaker3.png"]');
	let nameSpeakers = by.css('.text_wrapper h2');


	this.presentImage = {
		fisrt: function(){
			return browser.isElementPresent(fisrtImage);
		},
		sec: function(){
			return browser.isElementPresent(secondImage);
		},
		third: function(){
			return browser.isElementPresent(thirdImage);
		}
	};	


	this.getNameSpeakers = function() {
		return element.all(nameSpeakers).getText();
	};

	



	
};


SpeakersPage.prototype = BasePage;
module.exports = SpeakersPage;
