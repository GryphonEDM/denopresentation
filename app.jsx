//since this is a react app we import react from our dependencies.js
import { React } from "./dependencies.js";


const App = () => {
  // React Hooks to manage state is so ez
  // https://reactjs.org/docs/hooks-intro.html
  // SERIOUSLY READ THIS LINK IF YOU HAVENT ALREADY
  // LIKE THIS GUIDE WOULDNT BE NEAR AS GOOD WITHOUT THIS PAGE LOL   PROPS TO REACT DEVS THEY MAKE THE GOOD DOCS
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>
        <img onClick={() => setCount(count + 1)} src="https://camo.githubusercontent.com/68631b19ad7605c7f5f1f161f5dcc9452cc288f9/68747470733a2f2f64656e6f6c69622e6769746875622e696f2f686967682d7265732d64656e6f2d6c6f676f2f64656e6f5f68725f636972636c652e706e67" style={{
        maxWidth: '500px',
        marginTop: '10vh',
        marginLeft: '35vw',
        }}></img>
      </div>
      <p style={{
        color: 'White',
        paddingLeft: '47vw',
        fontSize: '100px'
       }}>{count}</p>
    </div>
  );
};

export default App;
