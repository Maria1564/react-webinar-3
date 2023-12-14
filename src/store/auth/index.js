import StoreModule from "../module";

/**
 * Детальная информация о товаре для страницы товара
 */
class AuthState extends StoreModule {

  initState() {
    return {
      data: {},
      isAuth: false,
      token:  "",
      warning: false
    }
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
      console.log(json.result)
      this.setState({
        ...this.getState(),
        token: json.result.token,
        data: {...json.result.user},
        warning: false
      })
      console.log(this.getState())
    }

  }

}

export default AuthState;
