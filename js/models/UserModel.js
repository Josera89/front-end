export default class UserModel {

  constructor(userData) {
    this.token = userData.jwtAccessToken;
    this.email = userData.user.email;
    this.name = userData.user.name;
  }

}
