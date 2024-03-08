import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure } from '../redux/user/userSlice';

const SignUp = () => {
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
            dispatch(signUpStart())
            const res = await axios.post('/api/auth/signup', formData);
            console.log(res)
    
            if(res.success === false) {
                dispatch(signUpFailure(res.message))
                return;
            }
            dispatch(signUpSuccess(res))

            navigate('/signin')
            
        } catch (error) {
            dispatch(signUpFailure(error.response.data.message))
        }
    }

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input 
                    type='text' 
                    placeholder='Username'
                    className='border p-3 rounded-lg'
                    id='username'
                    onChange={handleChange}
                />
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
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Have an account?</p>
                <Link to={'/signin'}>
                    <span className='text-blue-700'>Sign In</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}

export default SignUp