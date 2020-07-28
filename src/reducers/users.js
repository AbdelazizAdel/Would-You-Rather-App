import { RECIEVE_USERS } from '../actions/users';
import { ADD_ANSWER } from '../actions/shared';

export function users(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return action.users;
        case ADD_ANSWER:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    answers: {
                        ...state[action.uid]['answers'],
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}