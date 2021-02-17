let rerenderEntireTree = () => {
}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const removePost = () => {
  state.profilePage.posts.pop();
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // наблюдатель
}

export default state;