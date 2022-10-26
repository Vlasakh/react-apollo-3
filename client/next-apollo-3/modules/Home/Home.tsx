import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { MenuType, useRouteService } from '../../common/services/RouteService';

const MENU = [MenuType.userCrud, MenuType.staticUsers];

export function Home() {
  const routes = useRouteService();

  return (
    <Box sx={{ display: 'inline-block' }}>
      <fieldset>
        <legend>Menu</legend>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {MENU.map((item) => (
            <Link href={routes.menu[item].getPath()}>
              <a>{routes.menu[item].title}</a>
            </Link>
          ))}
        </Box>
      </fieldset>
    </Box>
  );
}
