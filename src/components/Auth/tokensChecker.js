export const tokensChecker = ()=>{
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if(refreshToken && accessToken){
        return true
    }
    return false
}