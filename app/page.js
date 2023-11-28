'use client';
import { Header } from '@/components/Header';
import { AboutUs } from '@/components/AboutUs';
import { Directions } from '@/components/Directions';
import { ServiceCards } from 'components/ServiceCards';
import { Footer } from '@/components/Footer';
import { Articles } from '@/components/Articles';
import { RemainingQuestions } from '@/components/RemainingQuestions';
import { Specialists } from '@/components/Specialists';
import { Consultation } from '@/components/Consultation';
import { Navbar } from '@/components/Header/Navbar';

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
			<AboutUs />
			<ServiceCards />
			<Directions />
			<Consultation />
			<Specialists />
			<RemainingQuestions />
			<Articles />
			<Footer />
		</main>
	);
}
