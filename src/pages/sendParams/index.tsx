import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const SendParams = () => {
  const navigate = useNavigate();

  const paramsValue = '这里是通过路由参数进行传递的';
  const searchValue = '这里是通过查询字符串进行传递的';
  const searchValue1 = '这里是通过查询字符串进行传递的1';
  const stateValue ={name:"stateName",value:'stateValue'};

  const sendParams = () => {
    navigate(`/routeParamsReceive/${paramsValue}`);
  };

  const sendSearch = () => {
    navigate(`/routeSearchReceive?id=${searchValue}&name=${searchValue1}`);
  };

  const sendState = () => {
    navigate(`/routeStateReceive`,{state:stateValue});
  };

  return <>
    <Space>
      <Button onClick={sendParams}>传递路由参数</Button>
      <Button onClick={sendSearch}>传递查询字符串参数</Button>
      <Button onClick={sendState}>传递state参数</Button>
    </Space>
  </>
};

export default SendParams;