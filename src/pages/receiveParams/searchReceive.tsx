import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "antd";

const SearchReceive = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  
  return <>
    <h1>这里接收路由参数使用useSearchParams()</h1>
    <br />
    <h1> 接收到的参数1是：{searchParams.get('id')}。</h1>
    <h1> 接收到的参数2是：{searchParams.get('name')}。</h1>
    <br />
    <Button onClick={goBack}>返回</Button></>
}

export default SearchReceive;