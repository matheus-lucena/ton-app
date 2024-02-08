import reducer, {AuthState} from '../../src/redux/auth/slice';
import {
  getInfoThunk,
  getTokenThunk,
  loginThunk,
  logoutThunk,
} from '../../src/redux/auth/thunk';

describe('authSlice', () => {
  describe('reducers', () => {
    const initialState: AuthState = {
      isAutenticated: undefined,
      email: '',
      password: '',
      user_attributes: [],
    };

    it('getInfo', () => {
      const user_attributes = [
        {
          Name: 'sub',
          Value: '2129781b-d0f8-46dc-b4bf-12ad39cd1cf2',
        },
        {
          Name: 'name',
          Value: 'matheus',
        },
        {
          Name: 'family_name',
          Value: 'lucena',
        },
        {
          Name: 'email',
          Value: 'teste6@teste.com',
        },
      ];
      const action = {
        type: getInfoThunk.fulfilled.type,
        payload: {
          message: 'informacoes do usuario',
          data: {
            Enabled: true,
            UserAttributes: user_attributes,
            UserCreateDate: '2024-02-07T22:18:15.135Z',
            UserLastModifiedDate: '2024-02-07T22:18:15.559Z',
            UserStatus: 'CONFIRMED',
            Username: '2129781b-d0f8-46dc-b4bf-12ad39cd1cf2',
          },
        },
      };
      const state = reducer(initialState, action);
      expect(state.user_attributes).toEqual(user_attributes);
    });

    it('loginThunk', () => {
      const action = {
        type: loginThunk.fulfilled.type,
        payload: {
          email: 'teste@teste',
          password: 'teste@test3',
        },
      };
      const state = reducer(initialState, action);

      expect(state.email).toBeUndefined();
      expect(state.password).toBeUndefined();
      expect(state.isAutenticated).toEqual(true);
    });

    it('getTokenThunk', () => {
      const action = {
        type: getTokenThunk.fulfilled.type,
        payload: 'token',
      };
      const state = reducer(initialState, action);

      expect(state.isAutenticated).toEqual(true);
    });

    it('logoutThunk', () => {
      const action = {
        type: logoutThunk.fulfilled.type,
        payload: 'token',
      };
      const state = reducer(initialState, action);

      expect(state.isAutenticated).toEqual(false);
    });
  });
});
