import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const ParamsReceive = () => {
  const navigate = useNavigate();
  const params = useParams();

  const goBack = ()=>{
    navigate(-1);
  };
  
  return <>
    <h1>这里接收路由参数使用useParams()</h1>
    <br/>
    <h1> 接收到的参数是：{params.id}。</h1>
    <br />
    <Button onClick={goBack}>返回</Button>
  </>
}

export default ParamsReceive;