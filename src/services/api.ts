import {API_BASE_URL} from '../constants/api';
import {HTTP_NO_CONNECTION} from '../constants/messages';
import {logout} from '../redux/auth/slice';
import {store} from '../redux/store';

export enum MethodApi {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const isSuccessfulAPI = (code: number) => {
  return code >= 200 && code < 400;
};

//General Service
export const apiService = async (
  path: string,
  method: MethodApi = MethodApi.GET,
  data?: any,
  token?: string,
): Promise<any> => {
  try {
    const url = API_BASE_URL + path;
    console.log(url);
    return fetch(url, {
      method: method.valueOf(),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(async response => {
        if (isSuccessfulAPI(response.status)) {
          return await response
            .json()
            .then((json: any) => {
              return json;
            })
            .catch(e => {
              console.log(e);
            });
          // melhorar tratativa
          //return await HttpResponseHandleAPI(response);
        } else if (response.status === 401) {
          store.dispatch(logout());
        } else {
          console.log(response.status);
        }
      })
      .catch(e => {
        console.log(e);
        if (e instanceof Error) {
          throw e;
        }
        console.log(e + url);
        throw new Error(HTTP_NO_CONNECTION);
      });
  } catch (e) {
    console.log('CATCH');
  }
};
