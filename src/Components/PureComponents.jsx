import React ,{PureComponent}from 'react'

export default class PureComponents extends PureComponent{
  constructor(){
    super();
    this.state={
      counter:0
    }
  }
  componentDidMount(){
    console.log('rendered')
  }
  componentDidUpdate(){
    console.log('re-rendered')
  }
  render() {
    return (
      <>
      <h1><u>Pure Components:</u></h1>
      <p>If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. </p>
      <div className='center'>
      <h1>Counter:{this.state.counter}</h1>
      <button  onClick={()=>{this.setState({counter:this.state.counter+1})}}>Increment</button>
      <button  onClick={()=>{
        if (this.state.counter !== 0) {
          this.setState({counter:this.state.counter-1})
        }
          else{
            this.setState({counter:this.state.counter})
          }
      }}
      >Decrement</button>
      </div>
      </>
    )
  }
}
