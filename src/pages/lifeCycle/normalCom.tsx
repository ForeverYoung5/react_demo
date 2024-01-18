
import React from "react";

export default class NormalCom extends React.Component {

  constructor(props: any) {
    super(props);
    console.log('同步子组件constructor');
  };

  static getDerivedStateFormProps() {
    console.log('同步子组件getDerivedStateFormProps');
    return {}
  };

  componentDidMount() {
    console.log('同步子组件componentDidMount')
  };

  shouldComponentUpdate() {
    console.log('同步子组件SCU')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('同步子组件getSnapShotBeforeUpdate');

    return {}
  };
  componentDidUpdate() {
    console.log('同步子组件componentDidUpdate')

  };

  componentWillUnmount(){
    console.log('同步子组件卸载componentWillUnmount')
  };

  render() {
    console.log('同步子组件render');
    return <>这里是同步子组件</>
  }
};

