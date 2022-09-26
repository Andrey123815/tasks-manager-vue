export const baseURI = 'http://localhost:3001/api/v1';

export const endPoints = {
  user: '/users',
  history: '/history',
};

type endPointType = 'user' | 'history';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}

interface IResponse {
  response: any,
  status: number,
}

const makeRequest = async (method: string, endPoint: endPointType, queryParamsString: string, body: any) => {
  let response: Response = await fetch(baseURI + endPoints[endPoint] + queryParamsString, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : body
    }
  );

  const res: IResponse = {response: await response.json(), status: response.status};
  return res;
}

const login = async (name: string, password: string) => {
  const res = await makeRequest(HTTP_METHODS.GET, 'user',
    `?name=${name}&password=${password}`, undefined);
  return res.response.length;
}

const register = async (name: string, password: string) => {
  let res = await makeRequest(HTTP_METHODS.GET, 'user',
    `?name=${name}&password=${password}`, undefined);
  if (res.response.length) {
    return false;
  }

  res = await makeRequest(HTTP_METHODS.POST, 'user', '', {name, password});
  return res.status === 201;
}

export default {
  login,
  register
}
