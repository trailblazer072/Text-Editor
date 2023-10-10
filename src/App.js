import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';

function App() {
	const [darkMode, setdarkMode] = useState("light");//whether dark mode is enable or not
	const toggleMode = () =>{
		if(darkMode === 'light'){
			setdarkMode('dark');
			document.body.style.backgroundColor='#3e454d';
		}
		else{
			setdarkMode('light');
			document.body.style.backgroundColor='white';
		}
	}
	return (
		<>
				{/* <Navbar title= "Text Editor" aboutText="Our Code" /> */}
				{/* <Navbar/> */}
				<Navbar title= "Text Editor" mode={darkMode} toggleMode={toggleMode} /> 
				<div className="container my-5 ">
				<Textform heading= "Enter your text below" mode={darkMode} />
				<About mode={darkMode}  />
				</div>
		</>
	);
}
export default App;