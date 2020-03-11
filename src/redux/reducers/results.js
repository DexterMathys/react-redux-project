import { type as findResultsType } from '../actions/findResults';
import items from '../../data/items';

const defaultState = items;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType:
            const regex = new RegExp(`${payload}`, 'i');
            if (payload === undefined || payload === null || payload.trim() === '') {
                return items;
            } else {
                return items.filter(n => regex.test(n.title));
            }
    
        default:
            return state;
    }
}

export default reducer;