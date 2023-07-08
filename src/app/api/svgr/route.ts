import { NextResponse } from 'next/server';

const SVGR_URL = 'https://react-svgr.com/playground/?memo=true&typescript=true';

export async function GET(request: Request, response: NextResponse) {
	return NextResponse.redirect(SVGR_URL);
}
