import { atom } from "recoil"

export const apiState = atom({
  key: "apiState",
  default: [],
})

export const filteredState = atom({
  key: "filteredState",
  default: [],
})

export const loadingState = atom({
  key: "loadingState",
  default: true,
})

export const searchState = atom({
  key: "searchState",
  default: "",
})
