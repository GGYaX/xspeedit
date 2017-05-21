const assert = require('assert');
const robot = require('../src/robot');
const describe = require("mocha").describe;
const it = require("mocha").it;
const expect = require('chai').expect;

describe('XspeedIt', function() {
    it('should pack with 163841689525773', function () {
        const result = robot.pack('163841689525773');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(8);
        expect(result).to.equal('91/82/81/73/73/64/6/55');
    });

    it('should pack with 1', function () {
        const result = robot.pack('1');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(1);
        expect(result).to.equal('1');
    });

    it('should pack with 1111', function () {
        const result = robot.pack('1111');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(1);
        expect(result).to.equal('1111');
    });

    it('should pack with 9999', function () {
        const result = robot.pack('9999');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(4);
        expect(result).to.equal('9/9/9/9');
    });

    it('should pack with 123456789', function () {
        const result = robot.pack('123456789');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(5);
        expect(result).to.equal('91/82/73/64/5');
    });

    it('should pack with 12222322222222222222456789', function () {
        const result = robot.pack('12222222222222222222456789');
        const packageAmount = result.split('/').length;
        expect(packageAmount).to.equal(8);
        expect(result).to.equal('91/82/72/64/522/22222/22222/22222');
    })
});