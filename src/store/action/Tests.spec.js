import constants from '../constants';
import action from './index';

const { LOGIN_STATUS } = constants;

const payload = { email: 'email@email.com', password: 'password' };

describe('Actions Tests', () => {
  describe('Test action', () => {
    it('should return expected action', () => {
      const expectedAction = { type: LOGIN_STATUS, payload }

      expect(action(LOGIN_STATUS, payload)).toEqual(expectedAction);
    });
  });
});
