import { CHANGE_VALUE } from './users.actions.js';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Bob',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 84,
    name: 'Bob',
  },
  {
    id: 'id-5',
    age: 67,
    name: 'Sara',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Toma',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'John',
  },
];

const initialState = {
  filterText: '',
  usersList: users,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        filterText: action.payload.value,
      };
    }
    default:
      return state;
  }
};
