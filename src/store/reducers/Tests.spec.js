import action from '../action';
import constants from '../constants';
import isLoadingReducer from './isLoadingReducer';
import isLoggedInReducer from './isLoggedInReducer';
import messagesReducer from './messagesReducer';
import rideReducer from './rideReducer';
import ridesReducer from './ridesReducer';
import userDashReducer from './userDashReducer';
import userReducer from './userReducer';
import store from './index';
import mockReduxState from '../../../mockReduxState';

const {
  LOGIN_STATUS,
  LOADING_STATUS,
  UPDATE_MESSAGES,
  SET_CURRENT_USER,
  UPDATE_DASHBOARD,
  FETCH_ALL_RIDES,
  FETCH_A_RIDE
} = constants;

describe('Reducer Tests', () => {
  describe('isLoadingReducer test', () => {
    const initialState = false;
    let actionObject = action(LOADING_STATUS, true);
    it('should update isLoadingReducer on store', () => {
      expect(isLoadingReducer(initialState, actionObject)).toEqual(true);
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('LOADING_STAT', true);
      expect(isLoadingReducer(initialState, actionObject)).toEqual(false);
    });
    it('should return false if no parameter is passed', () => {
      expect(isLoadingReducer(undefined, actionObject)).toEqual(false);
    });
  });

  describe('isLoggedInReducer test', () => {
    const initialState = false;
    let actionObject = action(LOGIN_STATUS, true);
    it('should update isLoggedInReducer on store', () => {
      expect(isLoggedInReducer(initialState, actionObject)).toEqual(true);
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('LOGIN_STAT', true);
      expect(isLoggedInReducer(initialState, actionObject)).toEqual(false);
    });
    it('should return false if no parameter is passed', () => {
      expect(isLoggedInReducer(undefined, actionObject)).toEqual(false);
    });
  });

  describe('messagesReducer test', () => {
    const initialState = mockReduxState.message;
    let actionObject = action(UPDATE_MESSAGES, {
      messages: ['some message'],
      isSuccess: false
    });
    it('should update messages on store', () => {
      const newState = messagesReducer(initialState, actionObject);
      expect(newState.messages.length).toEqual(1);
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('UPDATE_MESSAG', {
        messages: ['some message'],
        isSuccess: false
      });
      const newState = messagesReducer(initialState, actionObject);
      expect(newState.messages).toEqual([]);
    });
    it('should return initialState if payload or action type is not passed', () => {
      const newState = messagesReducer(undefined, actionObject);
      expect(newState.messages).toEqual([]);
    });
  });

  describe('rideReducer test', () => {
    const initialState = mockReduxState.ride;
    let actionObject = action(FETCH_A_RIDE, {
      rideDetails: 'some object',
      driver: 'another object'
    });
    it('should update ride on store', () => {
      const newState = rideReducer(initialState, actionObject);
      expect(newState.rideDetails).toEqual('some object');
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('FETCH_A_RID', {
        rideDetails: 'some object',
        driver: 'another object'
      });
      const newState = rideReducer(initialState, actionObject);
      expect(newState.driver.id).toEqual(8);
    });
    it('should return initialState if payload or action type is not passed', () => {
      const newState = rideReducer(undefined, actionObject);
      expect(newState).toEqual({});
    });
  });

  describe('ridesReducer test', () => {
    const initialState = mockReduxState.rides;
    let actionObject = action(FETCH_ALL_RIDES, [
      { propA: 'some object' },
      { propB: 'another object' },
      { propc: 'another another object' }
    ]);
    it('should update rides array on store', () => {
      const newState = ridesReducer(initialState, actionObject);
      expect(newState.length).toEqual(3);
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('FETCH_ALL_RID', [{ propA: 'some object' }]);
      const newState = ridesReducer(initialState, actionObject);
      expect(newState.length).toEqual(2);
    });
    it('should return initialState if payload or action type is not passed', () => {
      const newState = ridesReducer(undefined, actionObject);
      expect(newState).toEqual([]);
    });
  });

  describe('userDashReducer test', () => {
    const initialState = mockReduxState.userDash;
    let actionObject = action(UPDATE_DASHBOARD, {
      propA: 'some object',
      propB: 'another object'
    });
    it('should update userDash on store', () => {
      const newState = userDashReducer(initialState, actionObject);
      expect(newState.propA).toEqual('some object');
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('UPDATE_DASH', {
        rideDetails: 'some object',
        driver: 'another object'
      });
      const newState = userDashReducer(initialState, actionObject);
      expect(newState.runningOffer.id).toEqual(1);
    });
    it('should return initialState if payload or action type is not passed', () => {
      const newState = userDashReducer(undefined, actionObject);
      expect(newState).toEqual({});
    });
  });

  describe('userReducer test', () => {
    const initialState = mockReduxState.user;
    let actionObject = action(SET_CURRENT_USER, {
      propA: 'some object',
      propB: 'another object'
    });
    it('should update user on store', () => {
      const newState = userReducer(initialState, actionObject);
      expect(newState.propA).toEqual('some object');
    });
    it('should fail and return initial state if action type is incorrect', () => {
      actionObject = action('SET_CURRENT_USE', {
        propA: 'some object',
        propB: 'another object'
      });
      const newState = userReducer(initialState, actionObject);
      expect(newState.id).toEqual(8);
    });
    it('should return initialState if payload or action type is not passed', () => {
      const newState = userReducer(undefined, actionObject);
      expect(newState).toEqual({});
    });
  });

  describe('Store object test', () => {
    it('should return an object with 7 properties', () => {
      expect(Object.keys(store)).toEqual([]);
    });
  });
});
