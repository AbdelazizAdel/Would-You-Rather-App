import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA';
import { setAuthedUser } from './authedUser';
import { recieveQuestions } from './questions';
import { recieveUsers } from './users';

export const ADD_ANSWER = 'ADD_ANSWER';

function addAnswer(uid, qid, answer) {
    return {
        type: ADD_ANSWER,
        uid,
        qid,
        answer,
    }
}

export function getInitialData(authedUser) {
    return (dispatch) => {
        Promise.all([_getUsers(), _getQuestions()])
            .then(([users, questions]) => {
                dispatch(recieveUsers(users));
                dispatch(recieveQuestions(questions));
                dispatch(setAuthedUser(authedUser));
            });
    };
}

export function saveAnswer(uid, qid, answer) {
    return (dispatch) => {
        _saveQuestionAnswer({
            authedUser: uid,
            qid,
            answer,
        }).then(res => {
            dispatch(addAnswer(uid, qid, answer));
        });
    }
}