import dateToWords from './dateToWords';
import to12hrFormat from './to12hrFormat';

describe('dateToWords tests', () => {
  it('should return a date string', () => {
    expect(dateToWords('2018-10-31T00:00:00.000Z')).toEqual('October 31, 2018')
  })
});

describe('to12hrFormat tests', () => {
  it('should return time in PM', () => {
    expect(to12hrFormat('22:00')).toEqual('10:00 PM');
  });
  it('should return 12:34 AM for 00:34', () => {
    expect(to12hrFormat('00:34')).toEqual('12:34 AM');
  });
  it('should return 12:34 PM for 12:34', () => {
    expect(to12hrFormat('12:34')).toEqual('12:34 PM');
  });
  it('should return 2:34 PM for 14:34', () => {
    expect(to12hrFormat('14:34')).toEqual('2:34 PM');
  });
  it('should return 2:34 AM for 2:34', () => {
    expect(to12hrFormat('2:34')).toEqual('2:34 AM');
  });
});
