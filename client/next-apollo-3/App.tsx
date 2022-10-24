import { AlertContextProvider } from './Alerts/AlertContext';
import { SnackbarAlert } from './Alerts/SnackbarAlert';
import { UserListContainer } from './UserList/UserListContainer';

function App() {
  return <UserListContainer />;
  // <AlertContextProvider>
  //   <SnackbarAlert />
  // </AlertContextProvider>
}

// @ts-ignore
export { App as default };
