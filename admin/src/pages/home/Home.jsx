import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { useEffect,useState,useMemo } from "react";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZjcwYTc3MDdiMGYwZDVmNzE3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODk1MjI3NCwiZXhwIjoxNjg5Mzg0Mjc0fQ.o3edibvH6Dkh9V95dlrUhbyBkwUV2R6SA70Lie-dY6M",
          },
        });
        setUserStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
