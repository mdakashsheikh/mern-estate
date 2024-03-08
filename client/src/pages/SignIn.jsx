import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { error, loading } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            dispatch(signInStart())
            const res = await axios.post('/api/auth/signin', formData);
            console.log(res)
    
            if(res.success === false) {
                dispatch(signInFailure(res.message))
                return;
            }
            dispatch(signInSuccess(res))

            navigate('/')
            
        } catch (error) {
            dispatch(signInFailure(error.response.data.message))
        }
    }

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
            
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input 
                    type='email' 
                    placeholder='email'
                    className='border p-3 rounded-lg'
                    id='email'
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    placeholder='Password'
                    className='border p-3 rounded-lg'
                    id='password'
                    onChange={handleChange}
                />
                <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85'>
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
                <OAuth/>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Dont have an account?</p>
                <Link to={'/signup'}>
                    <span className='text-blue-700'>Sign Up</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error ? error : ''}</p>}
        </div>
    )
}

export default SignIn