import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: "35" },
        { id: 2, message: "It's my first post", likeCount: "20" },
        { id: 3, message: "No, i dont want it", likeCount: "1" },
        { id: 4, message: "Yo , Claire", likeCount: "5" },
      ],
      newPostText: "No fish, no meat",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Dmitru" },
        { id: 3, name: "Saha" },
        { id: 4, name: "Rombol" },
        { id: 5, name: "Kulik" },
        { id: 6, name: "Sora" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Yo" },
        { id: 4, message: "SO coool!" },
        { id: 5, message: "clap, clap" },
        { id: 6, message: "What is your web" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Saga" },
        { id: 3, name: "Redux" },
      ],
    },
  },
  _subscriber() {
    console.log("no subscribers(observers");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._subscriber(this._state);
  },
};

for (let key in store) {
  if (typeof store[key] == "function") {
    store[key] = store[key].bind(store);
  }
}

export default store;
window.store = store;
