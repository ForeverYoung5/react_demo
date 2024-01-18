
import React from "react";

export default class LazyCom extends React.Component {

  constructor(props: any) {
    super(props);
    console.log('懒加载子组件constructor');
  };

  static getDerivedStateFormProps() {
    console.log('懒加载子组件getDerivedStateFormProps');
    return {}
  };

  componentDidMount() {
    console.log('懒加载子组件componentDidMount')
  };

  shouldComponentUpdate() {
    console.log('懒加载子组件SCU')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('懒加载子组件getSnapShotBeforeUpdate');

    return {}
  };
  componentDidUpdate() {
    console.log('懒加载子组件componentDidUpdate')

  };

  componentWillUnmount(){
    console.log('懒加载子组件卸载componentWillUnmount')
  };

  render() {
    console.log('懒加载子组件render');
    return <>这里是懒加载子组件</>
  }
};

