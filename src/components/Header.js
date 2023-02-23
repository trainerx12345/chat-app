import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { ChatContext } from './ChatContext';

const Header = () => {
	const { isLogin, isSignUp, Visibility, profile, formData } =
		useContext(ChatContext);

	return (
		<header className='py-6 mb-3 header-b'>
			<div className='container flex items-center justify-between mx-auto'>
				<Link to='/'>
					<img
						src={Logo}
						alt=''
					/>
					{Visibility(true)}
				</Link>
				<span>
					<Link to='/'>meChat </Link>
				</span>
				<div className='flex items-center gap-6 '>
					{isLogin ? (
						<Link
							className='px-4 py-3 transition hover:text-white	hover:bg-violet-800 rounded-lg outline-1 border border-violet-200'
							to='/login'
						>
							Log In
						</Link>
					) : (
						<></>
					)}
					{isSignUp ? (
						<Link
							className='px-4 py-3 text-white transition rounded-lg hover:bg-white hover:text-violet-700 bg-violet-800'
							to='/signup'
						>
							Sign up
						</Link>
					) : (
						<></>
					)}
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
