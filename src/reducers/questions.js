import { RECIEVE_QUESTIONS } from '../actions/questions';

export function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}