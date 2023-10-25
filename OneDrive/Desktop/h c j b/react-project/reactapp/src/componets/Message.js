import React  ,{Component} from 'react'




class Home extends Component{

  constructor(){
   super()
    this.state={
      message:"welcome to react"
    }
  }

  changmessage(){
    this.setState({
      message:"thank you"
    })
  }



  render(){
    return(
      <div>
         <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changmessage()} >GOO</button>
      </div>
    )
  }


}

export default Home