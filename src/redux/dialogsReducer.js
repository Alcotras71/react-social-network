const SEND_MESSAGE = "SEND-MESSAGE",
  DELETE_MESSAGE = "DELETE-MESSAGE",
  UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let newMessage = {
        id: 7,
        message: body,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    case DELETE_MESSAGE:
			state.messages.pop();
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const deleteMessageCreator = () => {
  return {
    type: DELETE_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
