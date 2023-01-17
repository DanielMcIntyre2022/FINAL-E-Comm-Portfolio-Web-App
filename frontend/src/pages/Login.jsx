
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';

function Login() {

  const [ username, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  };

  return (
    <div className="register-page-container w-screen h-screen flex items-center justify-center">
        <div className="register-wrapper p-20 w-40% max-sm:w-75%">
            <h1 className="text-lg">SIGN IN</h1>
            <form className="flex flex-col">
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="border p-2" onClick={handleClick}>LOGIN</button>
                <a className="mt-5 mb-5 cursor-pointer">Forgot password?</a>
                <a className="cursor-pointer">Create a new account</a>
            </form>
        </div>
    </div>
  )
}

export default Login;