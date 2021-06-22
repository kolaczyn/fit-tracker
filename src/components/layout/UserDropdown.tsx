import { ChevronLeftIcon, SettingsIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RiAccountCircleFill as AccountIcon } from 'react-icons/ri';
import { BiLogOut as LogOutIcon } from 'react-icons/bi';
import { logOut } from '../../redux/authSlice';

export const UserDropdown: React.FC = ({}) => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  return user ? (
    <Menu>
      <MenuButton as={Button} leftIcon={<AccountIcon />}>
        {user.email}
      </MenuButton>
      <MenuList>
        <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        <MenuItem onClick={() => dispatch(logOut())} icon={<LogOutIcon />}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  ) : null;
};
