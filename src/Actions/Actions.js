export const SET_USER = 'SET_USER';
export const FETCH_USER = 'FETCH_USER';

export function setUserInfo(userInfo){
    console.log("action param: "+ userInfo);
    return {
        type: SET_USER,
        value: userInfo
    };
}

export function fetchUserInfo(){
    return {
        type: FETCH_USER
    }
}
