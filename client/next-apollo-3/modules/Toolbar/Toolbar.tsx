import IconPlus from '@mui/icons-material/AddOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MUILink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { ApolloIcon } from '../../assets/ApolloIcon';
import { NextIcon } from '../../assets/NextIcon';
import { MenuType, useRouteMenuService, useRouteService } from '../../common/services/RouteService';

const MENU = [MenuType.userCrud, MenuType.ssrUsers, MenuType.staticUsers, MenuType.runCmd, MenuType.useDeepEffect];

export function ToolbarModule() {
  const routesMenu = useRouteMenuService();
  const routes = useRouteService();

  return (
    <AppBar position="static">
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex' }}>
              {MENU.map((item) => (
                <Link key={item} href={routesMenu[item].getPath()}>
                  <Button sx={{ mr: 3, my: 2, color: 'white', display: 'block' }}>{routesMenu[item].title}</Button>
                </Link>
              ))}
            </Box>
          </Box>

          <Link href={routes.getHomePath()} passHref>
            <MUILink sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 1 }}>
                <ApolloIcon height={30} />
              </Box>{' '}
              <Box sx={{ mr: 1 }}>
                <IconPlus style={{ color: '#000' }} />
              </Box>
              <Box sx={{ mr: 1 }}>
                <NextIcon size={30} />
              </Box>
            </MUILink>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
