import reducer, {
  AuthState,
  updateLoginEmail,
  updateLoginPassword,
} from '../../src/redux/auth/slice';

describe('authSlice', () => {
  const initialState: AuthState = {
    isAutenticated: undefined,
    email: '',
    password: '',
    user_attributes: [],
  };

  it('updateLoginEmail', async () => {
    const email = 'teste@teste.com';
    const action = {
      type: updateLoginEmail.type,
      payload: email,
    };
    const state = reducer(initialState, action);

    expect(state.email).toEqual(email);
  });

  it('updateLoginPassword', async () => {
    const password = 'senha123';
    const action = {
      type: updateLoginPassword.type,
      payload: password,
    };
    const state = reducer(initialState, action);

    expect(state.password).toEqual(password);
  });
});
