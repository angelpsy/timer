import {ACTIONS} from '../constants/actions';

const selectedTimer = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SELECTED_TIMER:
            return action.id;
        default:
            return state
    }
};

export default selectedTimer
