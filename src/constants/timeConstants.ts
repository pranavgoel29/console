import dayjs from 'dayjs';

export type FixedDuration = {
	name: string;
	milliseconds: number;
	label: string;
	paramValue: string;
};

export const REFRESH_INTERVALS: number[] = [10000, 30000, 60000, 300000, 600000, 1200000];

export const FIXED_DURATIONS: ReadonlyArray<FixedDuration> = [
	{
		name: 'last 10 minutes',
		milliseconds: dayjs.duration({ minutes: 10 }).asMilliseconds(),
		label: '10m',
		paramValue: '10m',
	},
	{
		name: 'last 1 hour',
		milliseconds: dayjs.duration({ hours: 1 }).asMilliseconds(),
		label: '1h',
		paramValue: '1h',
	},
	{
		name: 'last 5 hours',
		milliseconds: dayjs.duration({ hours: 5 }).asMilliseconds(),
		label: '5h',
		paramValue: '5h',
	},
	{
		name: 'last 24 hours',
		milliseconds: dayjs.duration({ days: 1 }).asMilliseconds(),
		label: '1d',
		paramValue: '1d',
	},
	{
		name: 'last 3 days',
		milliseconds: dayjs.duration({ days: 3 }).asMilliseconds(),
		label: '3d',
		paramValue: '3d',
	},
] as const;

export const FIXED_DURATIONS_LABEL: { [key: string]: string } = {
	'last 10 minutes': '10M',
	'last 1 hour': '1H',
	'last 5 hours': '5H',
	'last 24 hours': '1D',
	'last 3 days': '3D',
} as const;
