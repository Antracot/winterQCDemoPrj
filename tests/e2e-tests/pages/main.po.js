'use strict';

// const PtorExtend = require('../common/protractor.extend');
const BasePage = require('../common/base.po.js');

const MainPage = function() {

	let that = this;

	//locators
	let headerSpeak = by.css('a[href="speakers.html"]');
	let headerReg = by.id('goReg');
	let headerMap = by.css('a[name="goMap"]');
	let goToMain = by.css('.elem_logo');
	let h1Title = by.css('.titleConf');
	let regBtn = by.id('registration_btn');
	let mgsBtn = by.id('messageBtn');
	let submitBtnReg = by.id('reg_btn2');
	let submitBtnMsg = by.id('msgSubmit');
	let textMsgSuccess = by.css('.msgSuccess p');
	let submitFillData = by.id('submitOk2');

	
	this.navigatePage = function(){
		browser.get('http://localhost:3000');
		that.freeze('xl');
	};

	this.goToSpeak = function(){
		element(headerSpeak).click();
		that.freeze('xl');
	};

	this.goToReg = function() {
		element(headerReg).click();
		that.freeze('xl');
	};

	this.goToMap = function() {
		element(headerMap).click();
		that.freeze('xl');
	};

	this.goToMain = function(){
		element(goToMain).click();
		that.freeze('xl');
	}; 

	this.getMainTitle = function(){
		return element(h1Title).getText();
	};

	this.getTitle = function(){
		return that.titleGet();	
	};
	
	this.openReg = function(){
		element(regBtn).click();
		that.freeze('s');
	};

	this.openMsg = function(){
		element(mgsBtn).click();
		that.freeze('s');
	};

	this.submitFormReg = function(){
		element(submitBtnReg).click();
		that.freeze('s');
	};

	this.submitFormMgs = function(){
		element(submitBtnMsg).click();
		that.freeze('s');
	};

	this.getMgsSuccessText = function(){
		return element(textMsgSuccess).getText();
	};

	this.closePopup = function(){
		element(submitFillData).click();
		that.freeze('s');
	};
	
	


	
};
MainPage.prototype = BasePage;
module.exports = MainPage;