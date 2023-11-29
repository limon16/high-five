import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/image/logoBlack.png';
import iconPhone from '@/public/image/icon/phone.svg';
import burger from '@/public/image/icon/burger.svg';

export function Navbar() {
	const menuItem = [
		{ title: 'Головна', href: '#' },
		{ title: 'Послуги', href: '#' },
		{ title: 'Спеціалісти', href: '#' },
		{ title: 'Блог', href: '#' },
	];

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header className="px-4 lg:pl-[100px] mt-10 flex flex-row justify-between items-center md:h-[58px] h-[48px] lg:pr-[100px] relative">
			<Image
				src={logo}
				alt="logo"
				className="object-contain h-[58px] w-[101px] lg:h-[34px] md::w-[69px]"
			/>
			<nav className={`md:relative items-center justify-center flex`}>
				<ul
					className={`md:flex gap-14 text-4xl z-40 right-0 top-[58px] bg-[#fafafa] w-full absolute flex flex-col md:gap-10 md:flex-row items-center md:h-[48px] md:text-xs ${
						isMenuOpen ? 'visible' : 'md:flex hidden md:static'
					}`}
				>
					{menuItem.map((item, index) => (
						<li
							className="text-customStyleHover w-full flex items-center justify-center"
							key={index}
						>
							<a
								href={item.href}
								title={item.title}
								className=""
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="md:hidden flex justify-center items-center relative bg-blueRadianCustom rounded-full w-[50px] h-[50px]"
				onClick={toggleMenu}
			>
				<Image
					src={burger}
					alt={'menu'}
					className="object-contain w-[24px] h-[24px]"
				/>
			</button>
			<div className="md:flex hidden h-[48px] flex-row items-center w-[213px] justify-between py-[16px] px-[32px] text-sm bg-customOrangeLight rounded-[60px]">
				<Image
					src={iconPhone}
					alt="phone"
				/>
				<span className="text-customOrange">+38 066 826 24 15</span>
			</div>
		</header>
	);
}
