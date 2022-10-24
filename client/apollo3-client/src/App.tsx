import { AlertContextProvider } from './Alerts/AlertContext';
import { SnackbarAlert } from './Alerts/SnackbarAlert';
import './App.css';
import { UserListContainer } from './UserList/UserListContainer';

function App() {
  return (
    <AlertContextProvider>
      <SnackbarAlert />
      <UserListContainer />
    </AlertContextProvider>
  );
}

// @ts-ignore
export { App as default };
