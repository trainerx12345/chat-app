import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';
const Login = () => {
	const navigate = useNavigate();
	const { setIsLogin, setIsSignUp, handleChange, formData, Visibility } =
		useContext(ChatContext);

	const loginUser = () => {
		Visibility(false);
		navigate('/chat');
	};

	setIsLogin(false);
	setIsSignUp(true);
	return (
		<div className='container mx-auto min-h-[800px] mb-14 w-2/5'>
			<div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
				<form
					className='flex flex-col gap-y-5 '
					onSubmit={loginUser}
				>
					<label htmlFor='email'>Email </label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='email'
						placeholder='Email*'
						onChange={handleChange}
						value={formData.email}
						name='email'
						id='email'
					/>
					<label htmlFor='password'>Password </label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='password'
						placeholder='Password*'
						value={formData.password}
						onChange={handleChange}
						name='password'
						id='password'
					/>
					<button className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800  w-1/2 mx-auto'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
