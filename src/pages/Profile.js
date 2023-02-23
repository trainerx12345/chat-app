import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../components/ChatContext';

const Profile = () => {
	const { Visibility, formData } = useContext(ChatContext);
	Visibility(false);
	return (
		<section className='container mx-auto min-h-[800px] mb-14 bg w-9/12'>
			<div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
				{/* AGENT */}
				<div className='flex items-center gap-x-4 mb-8'>
					<div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
						<img
							src={formData.image}
							alt=''
						/>
					</div>
					<div className='font-bold text-lg '>
						<div>{formData.name}</div>
					</div>
				</div>
				{/* FORM */}
				<form className='flex flex-col gap-y-5'>
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
						<button className='bg-violet-700 hover:bg-violet-800 hover:shadow-lg text-white rounded p-4 text-sm transition flex justify-center items-center text-center w-50 m-auto'>
							Update
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Profile;
