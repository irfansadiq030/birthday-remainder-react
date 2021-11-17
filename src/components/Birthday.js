import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './component.css'
const data = [
  {
    name: 'Rashii Khanna',
    img: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    name: 'Twinkle Khanna',
    img: 'https://randomuser.me/api/portraits/women/81.jpg'
  },
  {
    name: 'Yaami Gautam',
    img: 'https://randomuser.me/api/portraits/women/31.jpg'
  },
  {
    name: 'Tapsee Pannu',
    img: 'https://randomuser.me/api/portraits/women/51.jpg'
  },
  {
    name: 'Sara Ali Khan',
    img: 'https://randomuser.me/api/portraits/women/47.jpg'
  },
]
export default function Birthday() {
  const [user,setUser] = useState(data);
  // const setusers = ()=>{
  //   setUser(data[]);
  // }
  return (
    <div className="container p-3">
      <h4 className="text-start heading py-2">{user.length} Birthdays Today</h4>
      {
        user.map((user) => {
          const {name,img} = user;
          return (
            <div className="media d-flex align-items-center">
              <img src={img} width="60" alt="" />
              <div className="media_txt">
                <h5>{name}</h5>
                <p>23 Years</p>
              </div>
            </div>
          )
        })
      }
      <div className="media d-flex align-items-center">
        {/* <button className="btn btn-danger w-100" onClick={ ()=>setUser([]) }>Clear All</button> */}
        <Button fullWidth="true" color="error" variant="contained" onClick={ ()=>setUser([]) }>Clear All</Button>
      </div>
    </div>
  )
}
