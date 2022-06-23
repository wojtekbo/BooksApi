const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('FullName', () => {
  it('should return an error if arg ins empty', () => {
    expect(formatFullName('')).to.equal('Error');
    expect(formatFullName(null)).to.equal('Error');
    expect(formatFullName()).to.equal('Error');
  });

  it('should return correct name', () => {
    expect(formatFullName('Jan Nowak')).to.equal('Jan Nowak');
    expect(formatFullName('JAN NOWAK')).to.equal('Jan Nowak');
    expect(formatFullName('JaN NowAk')).to.equal('Jan Nowak');
  });

  it('should return an error if "fullName" is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(20)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function () {})).to.equal('Error');
  });

  it('should return error if "fullName" is less or more then two words', () => {
    expect(formatFullName('Jan Piotr Nowak')).to.equal('Error');
    expect(formatFullName('Jan')).to.equal('Error');
  });
});
