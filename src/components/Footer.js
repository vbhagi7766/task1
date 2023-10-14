// import { Component } from "react";

// //There is predefined class component which has render method in its definition
// //That component name is "Component" which is available in react file as a namespace export

// //props = {prod:"t-shirt",color:"blue",price:300}
// export class Footer extends Component
// {
//     constructor()
//     {
//         super();
//         this.state = {count:"no.of words in the "};
//         //If you are writing the handleClick as normal function the below line is complusory
//         // this.handleClick = this.handleClick.bind(this);
//         //If you are writing the handleClick as arrow function the above line is not complusory
//     }

//     handleClick = () => {
//         //this keyword becomes unknown when we are writing it as user defined function
//         this.setState({
//             count: this.state.count+1
//         })
//     }

//     render()
//     {
//         return(
//             <div>
    
//                 <button onClick={this.handleClick}>word count</button>
//             </div>
//         )
//     }
// }