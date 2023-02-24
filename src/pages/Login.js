import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';
import axios from 'axios';
const Login = () => {
	const navigate = useNavigate();
	const { handleChange, formData, resetForm, setData } =
		useContext(ChatContext);

	const loginUser = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'https://mechatapp-api.onrender.com/api/v1/auth/login',
				{
					email: formData.email,
					password: formData.password,
				},
			);
			const success = response.status === 201;
			if (success) {
				setData(response.data.user);
				navigate('/messenger');
			}
		} catch (err) {
			console.log(err);
			const status = err.response.status;
			if (status === 404) {
				console.log('No user Exist');
				return;
			}
			if (status === 400) {
				console.log('Incorrect password');
				alert('Password is incorrect');
				return;
			}
			if (status === 500) {
				console.log('Server Error');
				alert('server error');
				return;
			}
		}
	};
	useEffect(() => {
		localStorage.removeItem('UserId');
		resetForm();
	}, []);
	return (
		<div className='container h-full mx-auto lg:mt-14'>
			<div className=' mx-auto max-w-[480px] px-6 py-8 bg-white border border-gray-300 rounded-lg '>
				<h2 className='text-2xl lg:text-[45px] font-semibold leading-none text-center text-violet-700'>
					Login
				</h2>
				<form
					className='flex flex-col gap-y-5 '
					onSubmit={loginUser}
				>
					<label htmlFor='email'>Email </label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='email'
						placeholder='Email*'
						onChange={handleChange}
						value={formData.email}
						name='email'
						id='email'
					/>
					<label htmlFor='password'>Password </label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Password*'
						value={formData.password}
						onChange={handleChange}
						name='password'
						id='password'
						minLength={8}
					/>
					<input
						type='submit'
						value='Login'
						className='w-1/2 px-4 py-3 mx-auto text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
					/>
				</form>
			</div>
		</div>
	);
};
export default Login;
