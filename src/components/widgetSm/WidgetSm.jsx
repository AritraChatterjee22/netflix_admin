import { Visibility } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./widgetSm.css";

function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="user-profile-pic" className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;

