const loginUser = {
  success: (user) => ({ type: 'SUCCESS', user }),
  fail: (user) => ({ type: 'FAIL', user }),
  error: (user) => ({ type: 'ERROR', user })
};

export default loginUser;
