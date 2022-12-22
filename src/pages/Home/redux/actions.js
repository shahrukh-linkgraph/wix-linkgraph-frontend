import * as type from './type'


export const getUsers = (data) => ({
    type: GET_USERS_REQUEST,
    data
});

// export const getCategorySuccess = (data) => ({
//     type: GET_CATEGORIES_SUCCESS,
//     data
// });

// export const getCategoryFailure = (error) => ({
//     type: GET_CATEGORIES_FAILURE,
//     error
// });