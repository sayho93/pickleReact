// export const SET_USER = 'SET_USER';
//
// export function setUserinfo(userInfo){
//     return {
//         type: SET_USER,
//         value: userInfo
//     };
// }

export const SET_USER = "SET_USER";

const Action = {
    SET_USER: 'SET_USER',
    setUserInfo(userInfo){
        console.log("action param: " + JSON.stringify(userInfo));
        return {
            type: SET_USER,
            value: userInfo
        }
    }
};

export default Action;