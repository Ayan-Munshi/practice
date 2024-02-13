import './App.css';
import { Countprovider } from './Context-reducer';
import Button from './component/Button'



function App() {
  return (
   <Countprovider>
     <Button/>
   </Countprovider>
  );
}

export default App;
