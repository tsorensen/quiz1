'use strict';

var expect = require('chai').expect;

describe('double', function () {
  var double = require('../problems/double');

  it('should double 10', function () {
    expect(double(10)).to.be.equal(20);
  });

  it('should double -2', function () {
    expect(double(-2)).to.be.equal(-4);
  });

  it('should double 100', function () {
    expect(double(100)).to.be.equal(200);
  });

  it('should double 0', function () {
    expect(double(0)).to.be.equal(0);
  });
});

describe('is-even', function () {
  var isEven = require('../problems/is-even');

  it('should return false for 5', function () {
    expect(isEven(5)).to.be.equal(false);
  });

  it('should return true for 2', function () {
    expect(isEven(2)).to.be.equal(true);
  });

  it('should return true for 0', function () {
    expect(isEven(0)).to.be.equal(true);
  });

  it('should return false for -5001', function () {
    expect(isEven(-5001)).to.be.equal(false);
  });
});

describe('file-extension', function () {
  var ext = require('../problems/file-extension');

  it('should return png for foobar.png', function () {
    expect(ext('foobar.png')).to.be.equal('png');
  });

  it('should return torrent for safe_file.exe.torrent', function () {
    expect(ext('safe_file.exe.torrent')).to.be.equal('torrent');
  });

  it('should return txt for "spaces are fine in file names.txt"', function () {
    expect(ext('spaces are fine in file names.txt')).to.be.equal('txt');
  });

  it('should return false for "this does not have one"', function () {
    expect(ext('this does not have one')).to.be.equal(false);
  });

  it('should return htaccess for .htaccess', function () {
    expect(ext('.htaccess')).to.be.equal('htaccess');
  });
});
