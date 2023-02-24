import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { ChatContext } from './ChatContext';

const Header = () => {
	const { profile, formData } = useContext(ChatContext);

	return (
		<header className='py-3 mb-2 lg:h-[75px]'>
			<div className='container flex items-center justify-between mx-auto '>
				<Link to='/'>
					<img
						src={Logo}
						alt=''
					/>
				</Link>
				<span>
					<Link to='/'>meChat </Link>
				</span>
				<div className='flex items-center gap-3 '>
					<Link
						className='px-4 py-3 transition border rounded-lg hover:text-white hover:bg-violet-800 outline-1 border-violet-200'
						to='/login'
					>
						Log In
					</Link>

					<Link
						className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
						to='/signup'
					>
						Sign up
					</Link>

					{profile ? (
						<>
							<Link
								className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
								to={`/profile`}
							>
								Profile
							</Link>
							<Link
								className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
								to={`/`}
							>
								Logout
							</Link>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
