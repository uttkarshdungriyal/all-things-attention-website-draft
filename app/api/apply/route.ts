import { NextResponse } from "next/server";
const required = ["name", "email", "role", "timezone", "building", "improve"] as const;
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website_url) return NextResponse.json({ ok: true });
    if (required.some((key) => typeof body[key] !== "string" || !body[key].trim())) return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL, secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
    if (!webhook || !secret) return NextResponse.json({ ok: false, error: "Applications are temporarily unavailable." }, { status: 503 });
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, secret }), cache: "no-store" });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) return NextResponse.json({ ok: false, error: "Unable to save your application right now." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ ok: false, error: "Please try again in a moment." }, { status: 400 }); }
}
