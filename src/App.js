// import './App.css';
// import {Footer} from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <center>
//       <h1>Responsive Paragraph Word</h1>
//                 <h1>counter</h1>
//       </center>
//       {/* <p class="solid">Hi All</p> */}
//       <p class="container">Hi All</p>
    


//       <Footer prod="Hi All" />
//     </div> 
//   );
// }

// export default App;

import './App.css';
import Footer, {useState} from "react";
function WordCounter() {
  const [state, setState] = Footer.useState({
    wordCount: 0, 
  });
  
  const handleKeyPress = (e) => {
    const count = e.target.value;
    
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length; 
      }
    }
    
    setState({
      wordCount: countWords(count)
    });
  }
  
  return(
    <div id='container'>
      <center>
      <h1>Responsive paragraph word</h1>
      <h1>Counter</h1>
      <textarea 
        placeholder='Type here'
        onChange={handleKeyPress}
      >    
      </textarea>
      <p>Word Count: 
        <span className='num'> {state.wordCount}</span> 
      </p>     
      </center>
    </div>
  );
}

function App() {
  return (
    <WordCounter />
  );
}

export default App;