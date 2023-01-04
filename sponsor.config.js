import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
	github: {
		login: 'ivanhofer',
	},
	formats: ['svg'],
	tiers: [
		{
			title: 'Backers',
			preset: presets.base,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 15,
			preset: presets.medium,
		},
		{
			title: 'Silver Sponsors',
			monthlyDollars: 100,
			preset: presets.large,
		},
		{
			title: 'Gold Sponsors',
			monthlyDollars: 250,
			preset: presets.xl,
		},
	],
})
