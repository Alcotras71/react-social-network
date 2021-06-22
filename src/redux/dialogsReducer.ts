const SEND_MESSAGE = 'network/dialogs/SEND-MESSAGE',
  DELETE_MESSAGE = 'network/dialogs/DELETE-MESSAGE';

type DialogType = {
  id: number;
  name: string;
};

type MessagesType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Dmitru' },
    { id: 3, name: 'Saha' },
    { id: 4, name: 'Rombol' },
    { id: 5, name: 'Kulik' },
    { id: 6, name: 'Sora' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'SO coool!' },
    { id: 5, message: 'clap, clap' },
    { id: 6, message: 'What is your web' },
  ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const messageText = action.messageText;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: messageText }],
      };

    case DELETE_MESSAGE: {
      let stateCopy = {
        ...state,
        messages: [...state.messages],
      };
      stateCopy.messages.pop();
      return stateCopy;
    }

    default:
      return state;
  }
};

type SendMessageActionType = {
  type: typeof SEND_MESSAGE;
  messageText: string;
};
export const sendMessage = (messageText: string): SendMessageActionType => ({
  type: SEND_MESSAGE,
  messageText,
});

type DeleteMessageActionType = {
  type: typeof DELETE_MESSAGE;
};
export const deleteMessage = (): DeleteMessageActionType => ({
  type: DELETE_MESSAGE,
});

export default dialogsReducer;
