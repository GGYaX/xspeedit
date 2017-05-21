var assert = require('assert');
var main = require('../src/main');
var describe = require("mocha").describe;
var it = require("mocha").it;
var expect = require('chai').expect;

describe('XspeedIt', function() {
    it('should pack with 163841689525773', function () {
        var result = main.execute('163841689525773');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(8);
        expect(result).to.equal('19/18/28/37/37/46/55/6');
    });

    it('should pack with 1', function () {
        var result = main.execute('1');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(1);
        expect(result).to.equal('1');
    });

    it('should pack with 1111', function () {
        var result = main.execute('1111');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(1);
        expect(result).to.equal('1111');
    });

    it('should pack with 9999', function () {
        var result = main.execute('9999');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(4);
        expect(result).to.equal('9/9/9/9');
    });

    it('should pack with 123456789', function () {
        var result = main.execute('123456789');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(5);
        expect(result).to.equal('19/28/37/46/5');
    });

    it('should pack with 12222322222222222222456789', function () {
        var result = main.execute('12222222222222222222456789');
        var packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(8);
        expect(result).to.equal('19/28/27/262/252/2422/22222/22222');
    })
});