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
			const response = await axios.post(
				'https://mechatapp-api.onrender.com/api/v1/auth/register',
				{
					formData,
				},
			);
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
			<div className='flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg '>
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
							className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						/>
						<div className='container flex flex-col items-center justify-center rounded-full'>
							{formData.url && (
								<img
									src={formData.url}
									alt='profile pic preview'
									width={250}
									className='rounded-full '
								/>
							)}
						</div>
					</div>

					<label htmlFor='name'>Name</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Name*'
						onChange={handleChange}
						value={formData.name}
						name='name'
						required={true}
					/>

					<label htmlFor='email'>Email</label>

					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='email'
						placeholder='Email*'
						required={true}
						onChange={handleChange}
						value={formData.email}
						name='email'
					/>
					<label htmlFor='password'>Password</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Password*'
						maxLength={8}
						required={true}
						onChange={handleChange}
						value={formData.password}
						name='password'
					/>
					<label htmlFor='name'>Re-type Password</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Re-type Password*'
						maxLength={8}
						required={true}
						onChange={handleChange}
						value={formData.retypePassword}
						name='retypePassword'
						phoneNo
					/>
					<label htmlFor='name'>Phone No.</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Phone*'
						required={true}
						onChange={handleChange}
						value={formData.phoneNo}
						name='phoneNo'
					/>
					<div className='flex gap-x-2'>
						<button className='flex items-center justify-center w-full p-4 text-sm text-center text-white transition rounded bg-violet-700 hover:bg-violet-800 hover:shadow-lg '>
							Sign-up
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Signup;