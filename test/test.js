var assert = require('assert');
var main = require('../src/main');
var describe = require("mocha").describe;
var it = require("mocha").it;
var expect = require('chai').expect;

describe('Array', function() {
    it('should return 1', function () {
        var result = main.execute();
        expect(result).to.equal('1');
    })
});