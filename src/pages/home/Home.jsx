import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import axios from 'axios'

function Home() {

  const MONTHS = useMemo(()=> [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
    []
  )

  const [userStats, setUserStats] = useState([]);

  useEffect(() =>{
    const getStats = async ()=>{
      try{
        const res = await axios.get("/users/stats", {
          headers: {
            token: 
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWVjYzRkZmNmZTEyMmM5MmM5YzYzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODkwMzk0MiwiZXhwIjoxNjg5MzM1OTQyfQ.ArHTiNX3-ZLG_HoRYpF_sh6U0cI-4A12_1W2-RdGLJU"
          },
        });
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id-1], "New User": item.total},
          ])
        );
      }catch(err){
        console.log(err);
      }
    };
    getStats();
  },[MONTHS]);
  console.log(userStats)

  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users"/>
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
