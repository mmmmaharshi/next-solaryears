export const planetsData = [
	{
		name: 'Mercury',
		description:
			'At just 88 Earth days per year, Mercury is our fastest-orbiting planet. Since 2000 CE, Mercury has completed over 100 orbits around the Sun!',
		yearLength: 88,
	},
	{
		name: 'Venus',
		description:
			"Venus takes 225 Earth days to orbit the Sun. Despite being called Earth's sister planet, its year is vastly different from ours.",
		yearLength: 225,
	},
	{
		name: 'Earth',
		description:
			'Our familiar 365.25-day year gives us our calendar, with leap years every four years to keep the seasons aligned.',
		yearLength: 365.25,
	},
	{
		name: 'Mars',
		description:
			'A Martian year (687 Earth days) is almost twice as long as ours. NASA uses this calendar to plan Mars missions.',
		yearLength: 687,
	},
	{
		name: 'Jupiter',
		description:
			'Taking 11.8 Earth years to orbit, Jupiter has completed only about 17 orbits since the United States declared independence!',
		yearLength: 4333,
	},
	{
		name: 'Saturn',
		description:
			"Saturn's 29.5-Earth-year orbit means a person born on Saturn would celebrate only about 3 Saturn birthdays in their lifetime.",
		yearLength: 10759,
	},
	{
		name: 'Uranus',
		description:
			'With an 84-Earth-year orbit, Uranus has completed less than 3 full orbits since its discovery in 1781.',
		yearLength: 30687,
	},
	{
		name: 'Neptune',
		description:
			'Neptune has finished only one orbit since its discovery in 1846! Its year lasts 165 Earth years.',
		yearLength: 60190,
	},
];

export const calculatePlanetaryYear = (yearLength: number) => {
	const earthDayInMs = 24 * 60 * 60 * 1000;
	const now = new Date();
	const referenceDate = new Date(2000, 0, 1); // January 1, 2000, 00:00:00 UTC

	// Total days since reference
	const daysSinceReference =
		(now.getTime() - referenceDate.getTime()) / earthDayInMs;

	// Planetary years completed since reference
	const yearsCompleted = Math.floor(daysSinceReference / yearLength);

	// Current planetary year
	const currentYear = 2000 + yearsCompleted;

	// Days passed in the current planetary year
	const daysIntoCurrentYear = daysSinceReference % yearLength;

	// Days until the next planetary year (rounding to avoid fractional errors)
	const daysUntilNewYear = Math.round(yearLength - daysIntoCurrentYear);

	// Convert remaining days into Earth years and days
	const earthYears = Math.floor(daysUntilNewYear / 365); // Full Earth years
	const remainingDays = Math.round(daysUntilNewYear % 365); // Remaining days after full Earth years

	return {
		currentYear,
		remainingDays, // Remaining days in the current planetary year
		earthYears, // Remaining Earth years until next planetary year
	};
};
