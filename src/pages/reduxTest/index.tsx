import { Button, Space } from "antd";
import { connect } from "react-redux";

const ReduxTest = (props: any) => {
  console.log('props', props);
  return <>
    <h1>Redux使用</h1>
    <section>
      <Space>
        count:{props.count}
        <Button onClick={props.increaseCount}>添加</Button>
        <Button onClick={props.decreaseCount}>减少</Button>
      </Space>
    </section>
    <section>
      <div>用户信息</div>
      <Space>
        <span>userName:{props.user.name}</span>
        <span>userAge:{props.user.age}</span>
        <Button onClick={props.increaseAge}>添加年龄</Button>
      </Space>
    </section>

  </>
};

const mapStateToProps = (state: any) => {
  return {
    count: state.count,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCount: () => dispatch({ type: "INCREMENT" }),
    decreaseCount: () => dispatch({ type: 'DECREMENT' }),
    increaseAge: () => dispatch({ type: "INCREASE_AGE" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);