import { NextResponse } from 'next/server';

export async function GET(request) {
	const res = await fetch(`${process.env.API_URL}/${request}`);
	const data = await res.json();
	return NextResponse.json(data);
}
