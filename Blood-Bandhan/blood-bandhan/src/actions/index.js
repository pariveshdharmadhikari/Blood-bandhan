import SignupData from '../apis/SignupData'

export const SignupForm = (formvalues) => async (dispatch) => {
    const response = await SignupData.post('/RegisteredUser', formvalues);
    dispatch({
        type: 'SiGNUP',
        payload: response.data
    });
}