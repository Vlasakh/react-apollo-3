import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ToolbarModule } from '../modules/Toolbar/Toolbar';

type Props = {
  children: ReactNode;
};

export function LayoutMain({ children }: Props) {
  return (
    <>
      <ToolbarModule />
      <Container maxWidth={'xl'}>
        <Box sx={{ margin: 1 }}>{children}</Box>
      </Container>
    </>
  );
}
