import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: "This request could not be accepted." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length") || 0) > 20000)
    return NextResponse.json(
      { error: "Your enquiry is too long." },
      { status: 413 },
    );
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 20000)
      return NextResponse.json(
        { error: "Your enquiry is too long." },
        { status: 413 },
      );
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data))
      throw new Error();
  } catch {
    return NextResponse.json(
      { error: "Please check your enquiry and try again." },
      { status: 400 },
    );
  }
  if (data.website)
    return NextResponse.json(
      { error: "This request could not be accepted." },
      { status: 400 },
    );
  const value = (key: string) =>
    typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const name = value("name"),
    email = value("email"),
    requirements = value("requirements");
  if (
    !name ||
    name.length > 120 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    email.length > 254 ||
    requirements.length < 10 ||
    requirements.length > 5000 ||
    value("phone").length > 30 ||
    value("location").length > 160 ||
    value("solution").length > 100
  )
    return NextResponse.json(
      {
        error:
          "Please enter a valid name, email and project description (10–5,000 characters).",
      },
      { status: 400 },
    );
  const key = process.env.RESEND_API_KEY,
    from = process.env.ENQUIRY_FROM_EMAIL,
    to = process.env.ENQUIRY_TO_EMAIL;
  if (!key || !from || !to)
    return NextResponse.json(
      {
        error:
          "Online enquiries are temporarily unavailable. Please save a copy of your project brief.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "New Skyhigh website project enquiry",
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${value("phone") || "Not provided"}`,
          `Location: ${value("location") || "Not provided"}`,
          `Solution: ${value("solution") || "Help me choose"}`,
          "",
          requirements,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Your enquiry could not be sent. Please try again or save a copy of your brief.",
      },
      { status: 502 },
    );
  }
}
