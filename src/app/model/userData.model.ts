interface ILoginData {
  username: string;
  passHash: string;
}

interface IRegisterData extends ILoginData {
  passHashRepeat: string;
}

export { ILoginData, IRegisterData };
