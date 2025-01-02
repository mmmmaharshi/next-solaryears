'use client';

import { useEffect, useState } from 'react';
import { calculatePlanetaryYear, planetsData } from './lib/utils';

interface Planet {
	name: string;
	description: string;
	yearLength: number;
	remainingDays: number;
	earthYears: number;
	currentYear: number;
}

export default function Home() {
	const [planets, setPlanets] = useState<Planet[]>([]);

	useEffect(() => {
		const updatedPlanets = planetsData.map((planet) => ({
			...planet,
			...calculatePlanetaryYear(planet.yearLength),
		}));
		setPlanets(updatedPlanets);
	}, []);

	return (
		<main className='container mx-auto max-w-screen-lg p-4'>
			<header className='text-pretty py-3 space-y-2 text-center'>
				<h2 className='text-7xl pb-2'>🪐</h2>
				<h2 className='text-center text-5xl md:text-6xl font-bold text-primary'>
					Solar Years
				</h2>
				<p className='text-lg pt-1'>
					Track <span className='text-primary'>New Year countdowns</span>{' '}
					across our Solar System.
				</p>
			</header>

			{planets.length > 0 ? (
				<section className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
					{planets.map(
						({
							name,
							description,
							currentYear,
							remainingDays,
							earthYears,
						}) => (
							<div key={name} className='card bg-base-300'>
								<div className='card-body'>
									<div className='flex justify-between items-center'>
										<h2 className='card-title text-primary text-3xl'>
											{name}
										</h2>
										<span className='text-2xl font-semibold'>
											{currentYear} CE
										</span>
									</div>
									<p className='pt-1'>{description}</p>
									<div className='card-actions mt-2'>
										<div className='text-xl text-primary'>
											{remainingDays === 0 && earthYears === 0 ? (
												<p>
													🎉 Happy New Year {currentYear} on {name}
													! 🎊
												</p>
											) : earthYears > 0 ? (
												<p>
													{earthYears} year
													{earthYears > 1 ? 's' : ''},{' '}
													{Number(remainingDays).toLocaleString()}{' '}
													day
													{remainingDays > 1 ? 's' : ''} until{' '}
													{currentYear + 1}
												</p>
											) : (
												<p>
													{Number(remainingDays).toLocaleString()}{' '}
													day
													{remainingDays > 1 ? 's' : ''} until{' '}
													{currentYear + 1}
												</p>
											)}
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</section>
			) : (
				<div className='mt-10 h-[50vh] text-center'>loading...</div>
			)}

			<section className='card bg-base-300 mt-5'>
				<div className='card-body text-sm text-center'>
					<p>
						<span className='text-primary font-medium leading-relaxed'>
							Disclaimer:
						</span>{' '}
						The planetary years are based on how many Earth days have
						passed since{' '}
						<span className='text-primary'>January 1, 2000</span>. Each
						planet&apos;s year is calculated by how long it takes that
						planet to orbit the Sun. The remaining time shows how much is
						left until the next year on that planet starts. These are
						estimates based on Earth&apos;s calendar.
					</p>
				</div>
			</section>

			<section className='card bg-base-300 mt-5'>
				<div className='card-body text-center flex lg:flex-row lg:space-y-0 items-center lg:justify-between justify-center w-full'>
					<h2 className='card-title text-center text-base'>
						Built by{' '}
						<a
							href='https://x.com/mmmmaharshi'
							target='_blank'
							rel='noopener noreferrer'
							className='text-primary underline underline-offset-4'>
							Manohar Maharshi
						</a>
					</h2>
					<div className='mt-3 flex items-center justify-center gap-5'>
						<a
							href='https://x.com/mmmmaharshi'
							target='_blank'
							rel='noopener noreferrer'>
							<svg
								className='fill-white size-6'
								role='img'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<title>X</title>
								<path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
							</svg>
						</a>
						<a
							href='https://github.com/mmmmaharshi'
							target='_blank'
							rel='noopener noreferrer'>
							<svg
								className='fill-white size-6'
								role='img'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<title>GitHub</title>
								<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
							</svg>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
