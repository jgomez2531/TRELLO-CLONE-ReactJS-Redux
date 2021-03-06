import { CONSTANTS } from "../actions";

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID }
    };
};

export const deleteCard = (cardID, listID) => {
    return {
        type: CONSTANTS.DEL_CARD,
        payload: { cardID, listID }
    };
};