'use strict';
const expect = require('chai').expect;
const codewars = require('../codewars/codewars.js');

describe('Expect results for excercices of katas from codewars' , () => {
	it('Expect expanded form from number, in excercise 1', () => {
		expect(codewars.expandNumbers(12)).to.equal('10 + 2');
	});
});