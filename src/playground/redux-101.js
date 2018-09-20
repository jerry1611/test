import { createStore } from "redux";

const store = createStore((state = { count: 1000 }) => {
  return state;
});
console.log(store.getState());
console.log("test");
