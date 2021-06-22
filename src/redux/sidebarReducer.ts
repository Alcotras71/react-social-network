type FriendsType = {
  id: number;
  name: string;
};

const initialState = {
  friends: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Saga' },
    { id: 3, name: 'Redux' },
  ] as Array<FriendsType>,
};

type InitialStateType = typeof initialState;

const sidebarReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  return state;
};

export default sidebarReducer;
