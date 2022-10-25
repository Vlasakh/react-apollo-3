import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  paddingLeft: 0,
  paddingRight: 0,
  minWidth: 36,
});

export function SquareButton({ ...props }) {
  return <BootstrapButton {...props} />;
}
