import axios from 'axios';
import firebase from 'firebase';
import { resFromBack, userType } from '../../types/Types';

require('firebase/firebase-auth');

export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_CVU = 'FETCH_CVU';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_NAME = 'GET_NAME';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_SUCCEED = 'SET_SUCCEED';

export function register(user: userType, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email.toLowerCase(), password)
      .then(response => {
        response.user
          ?.getIdToken()
          .then(idToken => {
            axios
              .post<resFromBack>(`http://localhost:3001/api/user/`, user, {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
              })
              .then(responseAgain => {
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseAgain.data.account,
                });
                dispatch({
                  type: SET_USER,
                  payload: responseAgain.data.user,
                });
                dispatch({
                  type: SET_TOKEN,
                  payload: idToken,
                });
              })
              .catch(error => {
                dispatch({
                  type: SET_ERROR,
                  payload: 'Ocurrió un error en los servidores',
                });
                console.error(error);
              });
          })
          .catch(error => {
            dispatch({
              type: SET_ERROR,
              payload: 'Ocurrió un error de autenticación',
            });
            console.error(error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch({
            type: SET_ERROR,
            payload: 'El email ya está registrado',
          });
        } else {
          dispatch({
            type: SET_ERROR,
            payload: 'Ocurrió un error con el servidor de registro',
          });
        }
        console.error(error);
      });
  };
}

export function login(email: string, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.toLowerCase(), password)
      .then(response => {
        response.user
          ?.getIdToken()
          .then(idToken => {
            axios
              .get<resFromBack>(
                `http://localhost:3001/api/user/?email=${email}`,
                {
                  headers: {
                    authorization: `Bearer ${idToken}`,
                  },
                },
              )
              .then(responseFromBack => {
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseFromBack.data.account,
                });
                dispatch({
                  type: SET_USER,
                  payload: responseFromBack.data.user,
                });
                dispatch({
                  type: SET_TOKEN,
                  payload: idToken,
                });
              })
              .catch(error => {
                dispatch({
                  type: SET_ERROR,
                  payload: 'Ocurrió un error con el servidor',
                });
                console.error(error);
              });
          })
          .catch(error => {
            dispatch({
              type: SET_ERROR,
              payload: 'Ocurió un error de autenticación',
            });
            console.error(error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          dispatch({
            type: SET_ERROR,
            payload: 'El email no está registrado',
          });
          return;
        }
        if (error.code === 'auth/wrong-password') {
          dispatch({
            type: SET_ERROR,
            payload: 'La contraseña es incorrecta',
          });
          return;
        }
        if (error.code === 'auth/invalid-email') {
          dispatch({
            type: SET_ERROR,
            payload: 'Ingrese un email válido',
          });
          return;
        }
        dispatch({
          type: SET_ERROR,
          payload: 'Ocurrió un error de red',
        });
        console.error(error);
      });
  };
}

export function logout() {
  return (dispatch: any) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: LOG_OUT,
          payload: {},
        });
      })
      .catch(error => {
        dispatch({
          type: SET_ERROR,
          payload: 'No se pudo cerrar sesión',
        });
        console.error(error);
      });
  };
}

export function resetPass(email: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: SET_SUCCEED,
          payload: true,
        });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          dispatch({
            type: SET_ERROR,
            payload: 'Ingrese un email válido',
          });
        } else if (error.code === 'auth/user-not-found') {
          dispatch({
            type: SET_ERROR,
            payload: 'El email no está registrado',
          });
        } else {
          dispatch({
            type: SET_ERROR,
            payload: 'Ocurrió un error con el servidor',
          });
        }
        console.error(error);
      });
  };
}

export function resetSucceed() {
  return (dispatch: any) => {
    dispatch({
      type: SET_SUCCEED,
      payload: false,
    });
  };
}

export function setLoadingTrue() {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOADING_TRUE,
    });
  };
}

export function setLoadingFalse() {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOADING_FALSE,
    });
  };
}

export function cleanErrors() {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}

export function fetchCvu() {
  return (dispatch: any) => {
    dispatch({
      type: FETCH_CVU,
      payload: true,
    });
  };
}

export function addFunds(
  senderEmail: string,
  receiverEmail: string,
  type: string,
  value: number,
  comment: string,
  token: string,
) {
  return async (dispatch: any) => {
    try {
      await axios.post(
        `http://localhost:3001/api/account`,
        { senderEmail, receiverEmail, type, value, comment },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: 'El usuario no se ha encontrado',
      });
    }
  };
}

export const getEmail =
  (emailUser: string, idToken: string, nameUser: string) => dispatch => {
    // Esta accion lo que hace es guardarme dentro de mi estado re redux "Contact" , el emailUser,nombre y cvu

    axios
      .get(`http://localhost:3001/api/contacts/${emailUser}`, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
      .then(details => {
        const { email, cvu } = details.data;

        dispatch({
          type: GET_EMAIL,
          payload: { name: nameUser, email, cvu },
        });

        dispatch({
          type: GET_NAME,
          payload: ``,
        });
      })
      .catch(error => {
        // alert('Este usuario no se encuentra registrado');
        console.error(error);
      });
  };

export const getName = (emailUser: string, idToken: string) => dispatch => {
  // Esta accion lo que hace es irme a buscar a la DB el email del usuario que quiero agregar, en el caso de existir me guarda su nombre.

  axios
    .get(`http://localhost:3001/api/contacts/${emailUser}`, {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    })
    .then(details => {
      const { name, lastName } = details.data;
      dispatch({
        type: SET_MESSAGE,
        payload: '',
      });
      dispatch({
        type: GET_NAME,
        payload: { user: `${name} ${lastName}` },
      });
    })

    .catch(() => {
      dispatch({
        type: GET_NAME,
        payload: ``,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: 'Este usuario se encuentra registrado',
      });
    });
};

export const RemoveError = () => dispatch => {
  // esta action se encarga de remover el mensaje de error establecido.
  dispatch({
    type: SET_MESSAGE,
    payload: '',
  });
};

export const detailContact = (email: string, name: string) => dispatch => {
  // Esta accion lo la funcion que cumple es guardarme provisoriamente el nombre del contacto que presione, para ver sus detalles y/o transferir.

  dispatch({
    type: GET_DETAILS,
    payload: { name, email },
  });
};

export function updateAccount(email: string, token: string) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/api/account/?email=${email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        dispatch({
          type: SET_ACCOUNT,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: SET_ERROR,
          payload: 'Ocurrió un error, intenta nuevamente',
        });
        console.error(error);
      });
  };
}

export async function updateUser(user: any, token: string, dispatch: any) {
  const { phoneNumber, address } = user;
  axios
    .put(
      `http://localhost:3001/api/user/`,
      { phoneNumber, address },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then(response => {
      dispatch({
        type: SET_USER,
        payload: response.data.updatedUser,
      });
    })
    .catch(error => console.log(error));
}

export const RemoveContact = (email: string) => dispatch => {
  dispatch({
    type: REMOVE_CONTACT,
    payload: email,
  });
};
