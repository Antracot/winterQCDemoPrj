'use strict';

const BasePage = require('../common/base.po.js');

const RegPage = function() {

	let that = this;

	//locators
	let submitBtn = by.css('input[type="submit"]');
	let checkFillText = by.css('.checkInfo');
	let submitFillData = by.id('submitOk'); 
	let fisrtElem = by.id('checkInfo');

	this.regForm = {
		fillForm: function(idsArray, data){
			idsArray.forEach((id, index) => {
					element(by.id(id)).sendKeys(data[index]);
					that.freeze('s');
				});
			return this;
		},

		submitForm: function(){
			element(submitBtn).click();
			that.freeze('s');
		},

		checkFillData: function(){
			return element.all(checkFillText).getText();
			that.freeze('s');
		},

		closePopup: function(){
			element(submitFillData).click();
			that.freeze('s');
		},
	};




	
};
RegPage.prototype = BasePage;
module.exports = RegPage;


