import { userState } from "../atoms/User";
import { selector } from "recoil";

export const userEmailState = selector({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail;
  },
  // set: ({set}) =>{
  //   const state = set(userState);
  //   state.userEmail=
  // }
});
