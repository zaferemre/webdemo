import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return ( <
        Router >
        <
        Navbar / >

        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        About / >
        <
        /Route> <
        Route exact path = "/contact" >
        <
        Contact / >
        <
        /Route> <
        Route exact path = "/login" >
        <
        Login / >
        <
        /Route> <
        Route exact path = "/register" >
        <
        Register / >
        <
        /Route> <
        /Switch> <
        Footer / >
        <
        /Router>
    );
}

export default App;