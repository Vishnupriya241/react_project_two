import { useState } from 'react';
import Input from './Input';
import Square from './Square';

function App() {

  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className='App'>
    <Square
    color = {color}
    hexValue = {hexValue}
    isDarkText = {isDarkText}
    />
    <Input
    color = {color}
    setColor = {setColor}
    setHexValue = {setHexValue}
    isDarkText = {isDarkText}
    setIsDarkText = {setIsDarkText}
    />
</div>
  );
}

export default App;
