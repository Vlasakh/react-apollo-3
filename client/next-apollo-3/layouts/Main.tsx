import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { ToolbarModule } from '../modules/Toolbar/Toolbar';

type Props = {
  children: ReactNode;
};

export function LayoutMain({ children }: Props) {
  return (
    <>
      <ToolbarModule />
      <Box sx={{ margin: 1 }}>{children}</Box>
    </>
  );
}
