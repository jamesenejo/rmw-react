import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock';
import mockReduxState from '../../../../mockReduxState';
import auth from '../auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Reducer Tests', () => {
  afterEach(() => nock.cleanAll());

  describe('auth thunk signup', () => {
    it('dispatches the appropriate actions on success', () => {
      nock('https://api-rmw.herokuapp.com')
        .post('/api/v1/auth/signup')
        .reply({
          status: 'success',
          message: 'account created'
        });

      const expectedActions = [
        { payload: false, type: "LOGIN_STATUS" },
        {
          payload: {
            isSuccess: false, messages: ["An error occurred"]
          },
          type: "UPDATE_MESSAGES"
        },
        { payload: false, type: "LOADING_STATUS" }
      ];

      const store = mockStore(mockReduxState);
      return store.dispatch(auth()).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
      });
    });
  });
});
