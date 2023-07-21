import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, Logout, NotificationsNone, Settings } from '@mui/icons-material';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logoutStart } from '../../context/authContext/AuthActions';
import './topbar.css';

function Topbar() {
  const navigate = useNavigate(); // Use useNavigate hook
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logoutStart());
    localStorage.removeItem('user');
    navigate('/login'); // Use navigate instead of history.push
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Netflix Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Logout onClick={handleLogout} />
          </div>
          <img
            src='https://e1.pxfuel.com/desktop-wallpaper/88/629/desktop-wallpaper-hackerman-posted-by-ryan-anderson-hackerman.jpg'
            className='topAvatar'
            alt='User Avatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;

