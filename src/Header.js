import { Component } from "react";

class Header extends Component {
    state = {
        fruit: "banana",
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fruit: "strawberry" })
        }, 1000)
    }

    
  componentWillUnmount(){
    alert("The component will unmounted");
  }
  
   shouldComponentUpdate(nextProps, nextState) {
     if(nextState.fruit !== this.state.fruit ){
        return true;
     };
     return false;
 } 
  
    changeFruit = () => {
        this.setState({fruit: "apple"});
      }
    
    render() {
        return (
            <div className = "munt">
                <button onClick = {this.changeFruit}>Component Updateing</button>
                <div className="text">
                    <h1> My favorite fruit: 
                    <span>   {this.state.fruit}. </span> 
                    </h1>

                </div>
            </div>
        )
    }
}

export default Header;