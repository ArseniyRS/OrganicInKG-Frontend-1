const getExpirationDate = (token,exp)=> {
    if (!token || !exp) {
        return undefined
    }
    return exp
};

const isExpired = (exp) => {
    if (!exp) {
        return false;
    }
    if (Date.now() < exp){
        return exp - Date.now()
    }else{
        return false
    }


};

export const  expChecker = ()=>isExpired(getExpirationDate(localStorage.getItem("accessToken"),localStorage.getItem('tokenExpirationTime')))