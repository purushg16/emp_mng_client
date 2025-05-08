export default interface Login {
  username: string;
  password: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
}
