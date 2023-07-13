import React from 'react'
import "./user.css"
import { useParams } from 'react-router-dom';
import { userRows } from '../../dummyData';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function User() {
  const { id } = useParams();
  console.log('id:', id);
  const user = userRows.find(user =>  user.id === parseInt(id));
  console.log('user:', user);
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/newUser">
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src='https://i1.sndcdn.com/artworks-QLH5FyzoNynvfQmg-EICzDA-t500x500.jpg' className='userShowImg'/>
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>{user.username}</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'/>
              <span className='userShowInfoTitle'>annabecker99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon'/>
              <span className='userShowInfoTitle'>10.12.2000</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon'/>
              <span className='userShowInfoTitle'>+91 9765461324</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon'/>
              <span className='userShowInfoTitle'>dummyemail@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon'/>
              <span className='userShowInfoTitle'>3 Shinganshina Road, Eldia</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input type="text" placeholder='Eren Yeager' className='userUpdateInput'/>
              </div>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input type="text" placeholder='annabecker99' className='userUpdateInput'/>
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input type="text" placeholder='Anna Becker' className='userUpdateInput'/>
              </div>
              <div className='userUpdateItem'>
                <label>email</label>
                <input type="text" placeholder='dummyemail@gmail.com' className='userUpdateInput'/>
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input type="text" placeholder='+91 9765461324' className='userUpdateInput'/>
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input type="text" placeholder='3 Shinganshina Road, Eldia' className='userUpdateInput'/>
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img className='userUpdateImg' src='https://i1.sndcdn.com/artworks-QLH5FyzoNynvfQmg-EICzDA-t500x500.jpg' alt='' />
                <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                <input type='file' id='file' style={{display:"none"}}/>
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
