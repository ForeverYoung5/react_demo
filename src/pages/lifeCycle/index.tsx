
import { Button } from "antd";
import React from "react";
import NormalCom from './normalCom';
// import LazyCom from './lazyCom';
const LazyCom = React.lazy(() => import('./lazyCom'))

type TState = {
  num: number
}
class LifeCycleCom extends React.Component<any, TState> {

  constructor(props: any) {
    super(props);
    console.log('父组件constructor');
    this.state = {
      num: 1
    };
  };

  static getDerivedStateFormProps() {
    console.log('父组件getDerivedStateFormProps');
    return {}
  };

  componentDidMount() {
    console.log('父组件componentDidMount')
  };

  shouldComponentUpdate() {
    console.log('父组件SCU')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('父组件getSnapShotBeforeUpdate');

    return null;
  };
  componentDidUpdate() {
    console.log('父组件componentDidUpdate')

  };
  componentWillUnmount() {
    console.log('父组件卸载componentWillUnmount')
  }
  updateNum = () => {
    this.setState({ num: this.state.num + 1 })
  };

  render() {
    console.log('父组件render');
    return <React.Suspense>
      <h1>这里是父组件</h1>
      <Button onClick={this.updateNum}>更新父组件</Button>
      <span>state：{this.state.num}</span>
      <hr />
      {/* <NormalCom /> */}
      <LazyCom />
    </React.Suspense>
  }
};

export default LifeCycleCom