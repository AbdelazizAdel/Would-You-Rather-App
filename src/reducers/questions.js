import { RECIEVE_QUESTIONS } from '../actions/questions';
import { ADD_ANSWER } from '../actions/shared';

export function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return action.questions;
        case ADD_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer]['votes'].concat([action.uid])
                    }
                }
            }
        default:
            return state;
    }
}