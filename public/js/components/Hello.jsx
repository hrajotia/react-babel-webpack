import React from 'react'

// https://facebook.github.io/react/docs/react-component.html

export default class Hello extends React.Component {

  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    name: "John Doe"
  }

  // These methods are called when an instance of a component is being created
  // and inserted into the DOM.

  constructor(props) {
    console.log("constructor", props)
    super(props)
    this.state = {date: new Date()}

    // This binding is necessary to make `this` work in the callback
    this.updateDate = this.updateDate.bind(this)
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  // When called, it should examine this.props and this.state and return a single React element.
  render() {
    console.log("render")
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toLocaleTimeString()} <button onClick={this.updateDate}>Update</button></h2>
      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  // An update can be caused by changes to props or state.
  // These methods are called when a component is being re-rendered.

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState)
  }

  // This method is called when a component is being removed from the DOM.
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  updateDate() {
    this.setState({date: new Date()})
  }

}
