import { NextResponse } from 'next/server';

const PROFILES = {
	github: '',
	twitter: '',
	threads: '',
	blog: '',
};

type Profile = keyof typeof PROFILES;

export async function GET(request: Request, context: { params: { profile: Profile } }) {
	const { params } = context;
	const { profile } = params;

	if (profile in PROFILES) {
		return NextResponse.redirect(PROFILES[profile] || '/');
	}

	return NextResponse.redirect('/');
}
