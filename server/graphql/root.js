const usersTable = [{ id: 1, username: 'Bob', age: 22 }];

const createUser = (input) => ({ id: +new Date(), ...input });

export const root = {
  getAllUsers: () => {
    return usersTable;
  },
  getUser: ({ id }) => {
    return usersTable.find((user) => user.id === id);
  },

  createUser: ({ input }) => {
    let user = createUser(input);
    usersTable.push(user);
    return user;
  },
};
