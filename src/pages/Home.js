import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../components/ChatContext';
import Image from '../assets/img/banner.jpg';

const Home = () => {
	const { Visibility } = useContext(ChatContext);
	Visibility(true);
	const navigate = useNavigate();
	const login = () => {
		navigate('/login');
	};
	return (
		<section className='h-full max-h-[740px] mb-8 xl:mb-24'>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left  justify-center flex-1 px-4 lg:px-0'>
					<h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
						meChat
						<span className='text-violet-700'> Connect with people.</span>
					</h1>
					<p className='max-w-[480px] mb-8'>Welcome to Chat web-app sample </p>
					<button
						className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
						onClick={login}
					>
						Start saying hi
					</button>
				</div>
				<div className='items-end justify-end flex-1 hidden lg:flex'>
					<img
						width={500}
						src={Image}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};
export default Home;
