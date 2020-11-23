const getExpirationDate = (token,exp)=> {
    if (!token && !exp) {
        return null;
    }
    return exp && exp * 1000
};

const isExpired = (exp) => {
    if (!exp) {
        return false;
    }else if (Date.now() < exp){
        return true
    }
    return false

};

export const  expChecker = ()=>isExpired(getExpirationDate(localStorage.getItem("accessToken"),localStorage.getItem('tokenExpirationTime')))