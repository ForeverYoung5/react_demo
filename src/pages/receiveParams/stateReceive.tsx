import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const StateReceive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };
  return <>
    <h1>这里接收路由参数使用 useLocation()</h1>
    <br />
    <h1> 接收到的参数name是：{location.state?.name}。</h1>
    <h1> 接收到的参数value是：{location.state?.value}。</h1>
    <br />
    <Button onClick={goBack}>返回</Button>
  </>
}

export default StateReceive;