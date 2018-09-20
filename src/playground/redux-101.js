import { createStore } from "redux";

const store = createStore((state = { count: 100 }) => {
  return state;
});
console.log(store.getState());
console.log("test");
