import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
/*import ProductList from "./components/ProductList/ProductList";*/
/*import Form from "./components/Form/Form";*/
import Header from "./components/Button/Header/Header";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;