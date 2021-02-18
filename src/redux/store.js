const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: '35'},
        {id: 2, message: 'It\'s my first post', likeCount: '20'},
        {id: 3, message: 'No, i dont want it', likeCount: '1'},
        {id: 4, message: 'Yo , Claire', likeCount: '5'},
      ],
      newPostText: 'No fish, no meat'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Dmitru'},
        {id: 3, name: 'Saha'},
        {id: 4, name: 'Rombol'},
        {id: 5, name: 'Kulik'},
        {id: 6, name: 'Sora'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'SO coool!'},
        {id: 5, message: 'clap, clap'},
        {id: 6, message: 'What is your web'},
      ],
      newMessageBody: ""
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Saga'},
        {id: 3, name: 'Redux'},
      ]
    },
  },
  _subscriber() {
    console.log('no subscribers(observers');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) { // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      let text = this._state.profilePage.newPostText;
      let newPost = {
        id: 5,
        message: text,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._subscriber(this._state);
    } else if (action.type === REMOVE_POST) {
      this._state.profilePage.posts.pop();
      this._subscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._subscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body =  this._state.dialogsPage.newMessageBody;
      let newMessage = {
        id: 7,
        message: body
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageBody = '';
      this._subscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._subscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const removePostActionCreator = () => {
  return {
    type: REMOVE_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

for (let key in store) {
  if (typeof store[key] == 'function') {
    store[key] = store[key].bind(store);
  }
}

export default store;
window.store = store;