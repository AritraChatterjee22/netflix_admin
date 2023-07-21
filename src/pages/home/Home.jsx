import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import axios from 'axios'

function Home() {
  const MONTHS = useMemo(() => [
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
  ], []);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const statsList = res.data.sort((a, b) => a._id - b._id);
        statsList.forEach((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users" />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;

