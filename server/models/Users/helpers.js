import { v4 as uuidv4 } from 'uuid';

export const createUser = ({ id, ...input }) => ({ id: id || +new Date(), ...input });

export const remapUsersFromAPI = ({ id, firstName, lastName, maidenName: username, email, address, company }) => {
  const generateId = uuidv4();

  return [
    generateId,
    {
      id: generateId,
      initId: id,
      name: firstName + ' ' + lastName,
      username,
      email,
      address: `${address.city}, ${address.street}`,
      company: company.name,
    },
  ];
};

export function getAllUsers(usersTable) {
  const users = [];

  usersTable.forEach((user, ...rest) => users.push(user));

  return users;
}
