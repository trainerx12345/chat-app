import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../components/ChatContext';

const Profile = () => {
	const { Visibility, formData } = useContext(ChatContext);
	Visibility(false);
	return (
		<section className='container mx-auto min-h-[800px] mb-14 bg'>
			<div className='flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg'>
				{/* AGENT */}
				<div className='flex items-center mb-8 gap-x-4'>
					<div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
						<img
							src={formData.image}
							alt=''
						/>
					</div>
					<div className='text-lg font-bold '>
						<div>{formData.name}</div>
					</div>
				</div>
				{/* FORM */}
				<form className='flex flex-col gap-y-5'>
					<label htmlFor='name'>Name</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Name*'
						required={true}
					/>

					<label htmlFor='name'>Email</label>

					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='email'
						placeholder='Email*'
						required={true}
					/>
					<label htmlFor='name'>Password</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Password*'
						maxLength={8}
						required={true}
					/>
					<label htmlFor='name'>Re-type Password</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='password'
						placeholder='Re-type Password*'
						maxLength={8}
						required={true}
					/>
					<label htmlFor='name'>Phone No.</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Phone*'
						required={true}
					/>
					<div className='flex gap-x-2'>
						<button className='flex items-center justify-center p-4 m-auto text-sm text-center text-white transition rounded bg-violet-700 hover:bg-violet-800 hover:shadow-lg w-50'>
							Update
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Profile;
