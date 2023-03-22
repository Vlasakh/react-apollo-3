import IconPlus from '@mui/icons-material/AddOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { ApolloIcon } from '../../assets/ApolloIcon';
import { MenuType, useRouteService } from '../../common/services/RouteService';

const MENU = [MenuType.userCrud, MenuType.ssrUsers, MenuType.staticUsers, MenuType.runCmd];

export function ToolbarModule() {
  const routes = useRouteService();

  return (
    <AppBar position="static">
      <Container maxWidth="none">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex' }}>
              {MENU.map((item) => (
                <Link key={item} href={routes.menu[item].getPath()}>
                  <Button sx={{ mr: 3, my: 2, color: 'white', display: 'block' }}>{routes.menu[item].title}</Button>
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 1 }}>
              <ApolloIcon height={30} />
            </Box>{' '}
            <Box sx={{ mr: 1 }}>
              <IconPlus style={{ color: '#000' }} />
            </Box>
            <Box sx={{ mr: 1 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Next.js_Logotype_Light_Background.svg/1280px-Next.js_Logotype_Light_Background.svg.png"
                style={{ height: 20 }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
