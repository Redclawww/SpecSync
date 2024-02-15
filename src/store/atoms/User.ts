import { atom } from "recoil";
const email = localStorage.getItem('email');
const name = localStorage.getItem('name');
export const userState = atom({
  key: "userState",
  default: {
    isLoading: true,
    userEmail: email ,
    name: name,
  },
});
