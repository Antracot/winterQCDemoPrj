const td = require('./test-data/all.td');
const MainPage = require('../pages/main.po');
const RegPage = require('../pages/reg.po');
const SpeakersPage = require('../pages/speakers.po');
const MapPage = require('../pages/map.po');


describe('Check content and funcs suite', () => {

	let mainPage, regPage, speakers,
	filldata, fillmgs, nameSpeakers, map;

	beforeEach(() => {
		mainPage = new MainPage();
		regPage = new RegPage();
		speakers = new SpeakersPage();
		map = new MapPage();
	});

	it('Should be able to run the main page', () => {
		mainPage.navigatePage();
		expect(mainPage.getTitle()).toEqual(td.titlePage.main);
		expect(mainPage.getMainTitle()).toContain(td.h1MainPage);
	});

	it('Should be able to registration form', () => {
		mainPage.openReg();
		regPage.regForm.fillForm(td.regInp, td.regData);
		mainPage.submitFormReg();
		filldata = regPage.regForm.checkFillData();
		expect(td.regData).toEqual(filldata);
		mainPage.closePopup();		
	});

	it('Should be able to send message', () => {
		mainPage.openMsg();
		regPage.regForm.fillForm(td.mgsInp, td.msgData);
		mainPage.submitFormMgs();
		expect(td.msgSuccess).toEqual(mainPage.getMgsSuccessText());
	});

	it('Should be able to run the speakers page', () => {
		mainPage.goToSpeak();
		expect(mainPage.getTitle()).toEqual(td.titlePage.speak);

		expect(speakers.presentImage.fisrt()).toBe(true);
		expect(speakers.presentImage.sec()).toBe(true);
		expect(speakers.presentImage.third()).toBe(true);

		nameSpeakers = speakers.getNameSpeakers();
		expect(td.names).toEqual(nameSpeakers);
	});

	it('Should be able to registration new visitor', () => {
		mainPage.goToReg();
		expect(mainPage.getTitle()).toEqual(td.titlePage.reg);

		regPage.regForm.fillForm(td.regInp, td.regData);
		regPage.regForm.submitForm();
		filldata = regPage.regForm.checkFillData();
		expect(td.regData).toEqual(filldata);
	});

	it('Should be able to run the map page', () => {
		mainPage.goToMap();
		expect(mainPage.getTitle()).toEqual(td.titlePage.map);
		
		map.scaleMap();
		expect(td.address).toEqual(map.getAddress());
		mainPage.goToMain();
	});



});