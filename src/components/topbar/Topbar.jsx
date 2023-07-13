import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@mui/icons-material';


function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>AritraAdmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings/>
          </div>
          <img src='https://e1.pxfuel.com/desktop-wallpaper/88/629/desktop-wallpaper-hackerman-posted-by-ryan-anderson-hackerman.jpg' className='topAvatar' />
        </div>
      </div>
    </div>
  )
}

export default Topbar
