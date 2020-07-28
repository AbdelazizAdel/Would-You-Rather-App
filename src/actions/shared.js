import { _getQuestions, _getUsers } from '../utils/_DATA';
import { setAuthedUser } from './authedUser';
import { recieveQuestions } from './questions';
import { recieveUsers } from './users';

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