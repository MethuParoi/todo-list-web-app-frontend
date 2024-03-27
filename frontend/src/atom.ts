import { atom } from "recoil";

export const firstNameAtom = atom({
  key: "firstNameAtom",
  default: " ",
});

export const lastNameAtom = atom({
  key: "lastNameAtom",
  default: " ",
});

export const usernameAtom = atom({
  key: "usernameAtom",
  default: " ",
});

export const passwordAtom = atom({
  key: "passwordAtom",
  default: " ",
});

export const errorAtom = atom({
  key: "errorAtom",
  default: " ",
});

export const sourceAtom = atom({
  key: "sourceAtom",
  default: "http://localhost:3000",
});
