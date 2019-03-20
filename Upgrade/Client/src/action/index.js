
import API from '../apis/UsersAPI'

export const createUser = (formvalues) => () => {
    console.log(formvalues);
    API.post('/users',formvalues);
    // response.then((res) => {
    //     callBackResponse(res);
    // });
    // response.catch((error) => {
    //     callBackResponse(error.response);
    // });
    // dispatch({
    //     type: 'CREATE_USER',
    //     payload: response
    // });

}

export const login = (formvalues, callBackResponse) => (dispatch) => {
    console.log(formvalues)
    const response = API.get('/users', formvalues);
    

    response.then((res) => {
        console.log(res,'response');
        callBackResponse(res);
    });
    response.catch((error) => {
        // callBackResponse(error.response);
    });
}

export const fetchPost= (id, callBackResponse) => async (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const response = await API.get(`/wp/v2/posts/${id}`, { headers: headers });
    console.log(response,"callbackresponse for post");
    callBackResponse(response.data);
}

export const updateUserInfo = (id, callBackResponse) => async (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
    }
    const response = await API.put(`/wp/v2/users/${id}`, { headers: headers });
    console.log(response);
    callBackResponse(response);
    dispatch({
        type: 'CREATE_USER',
        payload: response
    });
}

export const createPost = (formvalues, callBackResponse) => () => {
    console.log(localStorage.getItem("token"));
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const response = API.post('/wp/v2/posts', formvalues, { headers: headers });
    response.then((res) => {
        callBackResponse(res);
    });
    response.catch((error) => {
        callBackResponse(error.response);
    });
    // dispatch({
    //     type: 'CREATE_POST',
    //     payload: response
    // });
}

export const fetchPosts = (callBackResponse) => (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const response = API.get('/wp/v2/posts', { headers: headers });
    response.then((res) => {
        console.log(res, 'jklsdfhsdjfhsdjfh');
        callBackResponse(res);
        dispatch({
            type: 'FETCH_POST',
            payload: res.data
        });
    });
    response.catch((error) => {
        // console.log(error.response);
    });

}

export const deletePost = (id, callBackResponse) => () => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const response = API.delete(`/wp/v2/posts/${id}`, { headers: headers });
    response.then((res) => {
        callBackResponse(res);
    });
    response.catch((error) => {
        callBackResponse(error.response);
    });
}

export const updatePost = (id,formvalues,callBackResponse) => () => {
    console.log(localStorage.getItem("token"));
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const response = API.put(`/wp/v2/posts/${id}`,formvalues, { headers: headers });
    response.then((res) => {
        callBackResponse(res);
    });
    response.catch((error) => {
        callBackResponse(error.response);
    });
}