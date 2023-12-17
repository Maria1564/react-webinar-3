import StoreModule from "../module";

/**
 * Детальная информация о товаре для страницы товара
 */
class AuthState extends StoreModule {

  initState() {
    return {
      data: {},
      isAuth: false,
      warning: null
    }
  }

  async getInfoUser(token){
    const response = await fetch("/api/v1/users/self?fields=*", {
      method: "GET",
      headers: {
        "X-Token": token,
        "Content-Type": "application/json",
      },
    });
    let json =  await response.json();
    this.setState({
      ...this.getState(),
      data: {...json.result.profile},
      isAuth: true,
    })

  }

  async sign(login, password){
    const response = await fetch("/api/v1/users/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({login, password}),
    });
    console.log(response)
    if(response.status== 400) {
      this.setState({
        ...this.getState(),
        warning: true
      })
    }else{
      let json =  await response.json();
      console.log(json)
      window.localStorage.setItem('token', json.result.token)
      window.localStorage.setItem('email', json.result.user.email)
      this.setState({
        ...this.getState(),
        warning: false
      })
    }

  }

}

export default AuthState;
