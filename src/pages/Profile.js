import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../components/ChatContext';

const Profile = () => {
	const { formData } = useContext(ChatContext);

	return (
		<section className='container mx-auto min-h-[800px] lg:mt-20'>
			<div className='flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg'>
				<div className='flex items-center mb-8 gap-x-4'>
					<div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
						<img
							src={formData.url}
							alt=''
							className='border border-gray-300 rounded-full'
						/>
					</div>
					<div className='text-lg font-bold '>
						<div>{formData.name}</div>
					</div>
				</div>
				<form className='flex flex-col gap-y-5'>
					<label htmlFor='name'>Name</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Name*'
						required={true}
						value={formData.name}
					/>

					<label htmlFor='name'>Email</label>

					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='email'
						placeholder='Email*'
						required={true}
						value={formData.email}
					/>

					<label htmlFor='name'>Phone No.</label>
					<input
						className='w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14 '
						type='text'
						placeholder='Phone*'
						required={true}
						value={formData.phoneNo}
					/>
					<div className='flex gap-x-2'>
						<button className='flex items-center justify-center p-4 m-auto text-sm text-center text-white transition rounded bg-violet-700 hover:bg-violet-800 hover:shadow-lg w-50'>
							Change Password
						</button>
						<button className='flex items-center justify-center p-4 m-auto text-sm text-center text-white transition rounded bg-violet-700 hover:bg-violet-800 hover:shadow-lg w-50'>
							Update Profile
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Profile;
