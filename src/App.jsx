import React, { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is initializing...");
  }

  //  componentDidMount: Chạy sau khi component được render lần đầu
  componentDidMount() {
    console.log("Component mounted");
  }

  //  componentDidUpdate: Chạy khi state hoặc props thay đổi
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`State updated: ${prevState.count} → ${this.state.count}`);
    }
  }

  //  componentWillUnmount: Chạy trước khi component bị xóa khỏi DOM
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  //  Hàm tăng count
  increaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  //  Hàm giảm count
  decreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="lifecycle-container">
        <h1>React Class Component Lifecycle</h1>
        <button onClick={this.decreaseCount}>Count--</button>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Count++</button>
      </div>
    );
  }
}

export default LifecycleComponent;
