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
      newMessageText: ''
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
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._subscriber();
  },
  removePost() {
    this._state.profilePage.posts.pop();
    this._subscriber();
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._subscriber();
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._subscriber();
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._subscriber();
  },
}

export default store;