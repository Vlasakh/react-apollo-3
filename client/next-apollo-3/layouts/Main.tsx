import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import { ToolbarModule } from '../modules/Toolbar/Toolbar';

export function LayoutMain({ children }) {
  return (
    <>
      <ToolbarModule />
      <Box sx={{ margin: 1 }}>{children}</Box>
    </>
  );
}
