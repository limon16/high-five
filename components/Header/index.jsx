import Image from 'next/image';
import market from '@/public/image/icon/market-icon.svg';
import marketOrange from '@/public/image/icon/marger-orange.svg';
import arrowRight from '@/public/image/icon/white-arrow-right.svg';
import childrenImage from '@/public/image/childrenImage1.png';
import childrenSm from '@/public/image/ghildrenMain.png';
import Link from 'next/link';

export function Header() {
	return (
		<section className="h-full flex lg:pl-[100px] lg:flex-row flex-col">
			<div className="px-4 lg:px-0 flex lg:items-start items-center justify-center lg:justify-start mt-[38px] lg:mt-[100px] flex-col w-full lg:w-[40%]">
				<div className="max-w-[343px] md:max-w-none">
					<h1 className="text-[32px] leading-[34px] md:text-6xl text-[#2A333C] text-center lg:text-left">
						Забезпечте своїй дитині <span className="text-customBottomLine">успішне</span> майбутнє
					</h1>
					<p className="text-xs md:text-base lg:text-left mt-4 lg:mt-6 lg:mb-12 text-[#2A333CB2] min-w-[300px] max-w-[700px] text-center">
						The child development centre provides the following educational programmes for children: developmental classes for young children
					</p>
				</div>
				<Link href="/services">
					<button className="lg:flex justify-center items-center hidden gap-4 bg-customOrange rounded-[60px] text-base h-[56px] w-[286px] text-[#FAFAFA] lg:mb-[90px] customBoxShadowOrange">
						Почати
						<Image
							src={arrowRight}
							alt={'icon'}
						/>
					</button>
				</Link>
				<figure className="lg:flex hidden items-center gap-4">
					<Image
						src={market}
						alt="icon"
						width={24}
						height={24}
					/>
					<figcaption className="text-sm text-[#2A333C] opacity-70">Ніжин, вул Василя Стуса 54а, каб 15</figcaption>
				</figure>
			</div>
			<div className="w-full lg:w-[68%] flex min-h-[300px] md:min-h-[660px] md:h-full relative md: mb-[60px] lg:mb-0">
				<Image
					src={childrenImage}
					alt="image"
					className="md:block hidden absolute left-[5%]"
				/>
				<Image
					src={childrenSm}
					alt="image"
					className="object-contain w-full h-full md:hidden block"
				/>
			</div>
			<div className="lg:hidden flex justify-center items-center flex-col mt-[20px] mb-[58px] lg:mb-[55px]">
				<Link href="/services">
					<button className="flex justify-center items-center gap-3 w-[270px] h-[48px] bg-customOrange rounded-[60px] text-sm text-[#FAFAFA] mb-[24px] customBoxShadowOrange">
						Почати
						<Image
							src={arrowRight}
							alt={'icon'}
							width={20}
							height={20}
						/>
					</button>
				</Link>
				<figure className="flex items-center gap-2">
					<Image
						src={marketOrange}
						alt="icon"
						width={18}
						height={18}
					/>
					<figcaption className="text-[10px] text-[#2A333C] opacity-70">Ніжин, вул Василя Стуса 54а, каб 15</figcaption>
				</figure>
			</div>
		</section>
	);
}
