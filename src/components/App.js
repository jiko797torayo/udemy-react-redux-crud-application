import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// 子コンポーネントでStateの情報を使いたいとき、本来なら親コンポーネントからPropsとして引き継いでもらわないといけないんですけど、「mapStateToProps」を使うとそんなことはお構いなしに親コンポーネントから引き継がなくても子コンポーネントからすぐに使うことができるようになります。
const mapStateToProps = state => ({ value: state.count.value })
// この「mapDispatchToProps」を使うとこれも親や子なんかお構いなし！孫コンポーネントからActionを即呼びできるようになります。
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
