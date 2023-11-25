import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    { label: 'The Color Red', value: 'red'},
    { label: 'The Color Green', value: 'green'},
    { label: 'A Shade of Blue', value: 'blue'}
  ];

  return (
    <div>
      <Dropdown 
        options={options} 
        value={selection} 
        onChange={handleSelect} 
      />
    </div>
  )
}


export default App;

