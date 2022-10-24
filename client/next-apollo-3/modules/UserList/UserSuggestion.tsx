import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { GET_SUGGESTION_USERS } from '../../query/getSuggestionUsers';
import { GET_ALL_USERS } from '../../query/users';
import { randomInteger } from '../../utils/randomInteger';

enum Fields {
  id = 'id',
  name = 'name',
  username = 'username',
  email = 'email',
  address = 'address',
  company = 'company',
}
const FIELDS_ORDER: Fields[] = [Fields.name, Fields.username, Fields.email, Fields.address, Fields.company];

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export function UserSuggestion({ onSetFields }: { onSetFields: () => void }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { data } = useQuery(GET_SUGGESTION_USERS);

  const handleClick = () => onSetFields({ ...data?.values?.[selectedIdx], id: null });

  const handleMenuItemClick = (idx: number) => () => {
    setSelectedIdx(idx);
    setOpen(false);
  };

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
  };

  return (
    <div>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{data?.values?.[selectedIdx]?.name}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {data?.values &&
                    data.values.map(({ id, name }, idx) => (
                      <MenuItem
                        key={id}
                        // disabled={index === 2}
                        selected={id === selectedIdx}
                        onClick={handleMenuItemClick(idx)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
