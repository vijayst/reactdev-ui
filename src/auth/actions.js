import ActionTypes from '../constants/ActionTypes';
import firebase from '../lib/firebase';
import { push } from 'connected-react-router';

function signUp(email, password) {
    return dispatch => {
        dispatch({ type: ActionTypes.SignUpPending });
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: ActionTypes.SignUpFulfilled });
            });
    };
}

function updateProfile(displayName, photoURL) {
    return dispatch => {
        dispatch({ type: ActionTypes.UpdateProfilePending });
        return firebase
            .auth()
            .currentUser.updateProfile({ displayName, photoURL })
            .then(() => {
                dispatch({ type: ActionTypes.UpdateProfileFulfilled });
            });
    };
}

export function createAccount(firstName, lastName, email, password) {
    return dispatch => {
        dispatch({ type: ActionTypes.CreateAccountPending });
        dispatch(signUp(email, password))
            .then(() => dispatch(updateProfile(`${firstName} ${lastName}`)))
            .then(() => dispatch(push('/signup/profile')))
            .then(() => dispatch({ type: ActionTypes.CreateAccountFulfilled }))
            .catch(err =>
                dispatch({ type: ActionTypes.CreateAccountRejected, err })
            );
    };
}
