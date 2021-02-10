export const checkRedux = (value) => dispatch => {
    console.log('value', value);
    dispatch({
        type: 'CHECK_REDUX',
        payload: {
            checkRedux: value
        }
    });
}