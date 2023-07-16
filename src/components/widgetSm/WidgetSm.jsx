import { Visibility } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./widgetSm.css"

function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUsers = async () =>{
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: 
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWVjYzRkZmNmZTEyMmM5MmM5YzYzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTM0NjY4NiwiZXhwIjoxNjg5Nzc4Njg2fQ.vPcF6g6o8bCN5iR8Tf5RQ29oFSphjs2MvkeQpgexea0"
          },
        });
        setNewUsers(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  },[]);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user) => (
        <li className='widgetSmListItem'>
          <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>{user.username}</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm
