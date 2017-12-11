'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true,
		print: function() {},
		defaultTimeoutInterval: 120000
	},

	directConnect: true,
	capabilities: {
		browserName: 'chrome'
	},

	onPrepare: function() {

		browser.ignoreSynchronization = true;

		global.isAngularSite = function(flag) {
			browser.ingoneSynchronization = !flag;
		}
		global.bd = browser.driver;

		browser.driver.manage().window().maximize();

		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			},
		}));
	},

	specs: [
		'e2e-tests/tests/main.spec.js'
	],

	suites: {
		auth: './e2e-tests/tests/main.spec.js'
	},
};