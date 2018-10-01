import ActionTypes from '../constants/ActionTypes';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.SignUpPending:
            return state;
        default:
            return state;
    }
}
