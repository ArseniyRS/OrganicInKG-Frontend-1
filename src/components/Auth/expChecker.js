const getExpirationDate = (token,exp)=> {
    if (!token && !exp) {
        return false;
    }
    return exp && exp * 1000
};

const isExpired = (exp) => {
    if (!exp) {
        return false;
    }
    if (Date.now() < exp){
        return exp - Date.now()
    }


};

export const  expChecker = ()=>isExpired(getExpirationDate(localStorage.getItem("accessToken"),localStorage.getItem('tokenExpirationTime')))