class AuthService {
  login(email, password) {
    return when(request({
      url:'http://api.alomagada.dev/index.php/v1/guests/login',
      method: 'POST',
      crossOrigin: true,
      type: 'JSON',
      data: {email, password}
    })).then(function(response) {
      let jwt = response.access_token;
      LoginAction.loginUser(jwt);
      return true;
    });
  }
}

export default new AuthService()
