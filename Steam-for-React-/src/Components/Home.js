import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './Home.css'


export function Home (){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    };
    return(
        <div id="q">
            <div>
                <div id = 'nav'>
                    <div className="nav1">
                        <div className="inp">
                            <h1>SIGN IN WITH ACCOUNT NAME</h1>
                            <input tupe = "text" className="input"></input>
                            <h1>PASSWORD</h1>
                            <input tupe = "text" className="input"></input>
                        </div>
                        <a href="/signin"><button className='button1' >SIGN IN</button></a>
                        <button className='button2'>Help, i cant log in</button>
                        <p className= 'create'>no account?</p>
                        <a href = "" className= 'create'>Create a new one!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

