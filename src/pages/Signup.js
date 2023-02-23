import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ChatContext } from '../components/ChatContext';
const Signup = () => {
	const navigate = useNavigate();
	const { formData, setFormData, handleChange, setIsLogin, setIsSignUp } =
		useContext(ChatContext);

	const handleRegister = async (e) => {
		console.log('submitted');
		e.preventDefault();
		try {
			const response = await axios.put('http://localhost:8000/user', {
				formData,
			});
			console.log(response);
			const success = response.status === 200;
			if (success) navigate('/home');
		} catch (err) {
			console.log(err);
		}
	};

	setIsLogin(true);
	setIsSignUp(false);
	return (
		<section className='container mx-auto min-h-[800px] mb-14'>
			<div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 '>
				{/* FORM */}

				<form
					className='flex flex-col gap-y-3'
					onSubmit={handleRegister}
				>
					<div>
						<label htmlFor='url'>Enter a valid URL</label>
						<input
							type='url'
							name='url'
							id='url'
							onChange={handleChange}
							required={true}
							className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm  '
						/>
						<div className='container  rounded-full flex flex-col justify-center items-center'>
							{formData.url && (
								<img
									src={formData.url}
									alt='profile pic preview'
									width={250}
									className=' rounded-full'
								/>
							)}
						</div>
					</div>

					<label htmlFor='name'>Name</label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='text'
						placeholder='Name*'
						required={true}
					/>

					<label htmlFor='name'>Email</label>

					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='email'
						placeholder='Email*'
						required={true}
					/>
					<label htmlFor='name'>Password</label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='password'
						placeholder='Password*'
						maxLength={8}
						required={true}
					/>
					<label htmlFor='name'>Re-type Password</label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='password'
						placeholder='Re-type Password*'
						maxLength={8}
						required={true}
					/>
					<label htmlFor='name'>Phone No.</label>
					<input
						className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm '
						type='text'
						placeholder='Phone*'
						required={true}
					/>
					<div className='gap-x-2 flex'>
						<button className='bg-violet-700 hover:bg-violet-800 hover:shadow-lg text-white rounded p-4 text-sm w-full transition flex justify-center items-center text-center '>
							Sign-up
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Signup;
