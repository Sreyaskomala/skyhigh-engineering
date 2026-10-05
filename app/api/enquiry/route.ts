import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { solutions } from "@/lib/solutions";

const TARGET_EMAIL = process.env.ENQUIRY_TO_EMAIL || "aeronixskylabs@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // Validate content length to prevent payload flooding
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 25000) {
    return NextResponse.json(
      { error: "Your enquiry is too long." },
      { status: 413 },
    );
  }

  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 25000) {
      return NextResponse.json(
        { error: "Your enquiry is too long." },
        { status: 413 },
      );
    }
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error();
    }
  } catch {
    return NextResponse.json(
      { error: "Please check your enquiry details and try again." },
      { status: 400 },
    );
  }

  // Honeypot check for bots
  if (data.website) {
    return NextResponse.json(
      { error: "This request could not be accepted." },
      { status: 400 },
    );
  }

  const value = (key: string) =>
    typeof data[key] === "string" ? (data[key] as string).trim() : "";

  const name = value("name");
  const email = value("email");
  const phone = value("phone");
  const location = value("location");
  const solutionKey = value("solution");
  const requirements = value("requirements");

  // Basic validation
  if (!name || name.length > 120) {
    return NextResponse.json(
      { error: "Please enter your name (up to 120 characters)." },
      { status: 400 },
    );
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!requirements || requirements.length < 5 || requirements.length > 5000) {
    return NextResponse.json(
      { error: "Please enter project details (at least 5 characters)." },
      { status: 400 },
    );
  }

  // Map solution key to human-readable solution name
  const matchedSolution = solutions.find((s) => s.slug === solutionKey);
  const solutionLabel = matchedSolution ? matchedSolution.name : solutionKey || "Help me choose a solution";

  const submissionDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subject = `New Project Enquiry: ${name} — Skyhigh Engineering`;

  const textBody = [
    "NEW SKYHIGH ENGINEERING PROJECT ENQUIRY",
    "========================================",
    `Submitted on: ${submissionDate} IST`,
    "",
    `Client Name:  ${name}`,
    `Email:        ${email}`,
    `Phone:        ${phone || "Not provided"}`,
    `Location:     ${location || "Not provided"}`,
    `Solution:     ${solutionLabel}`,
    "",
    "Project Requirements & Brief:",
    "----------------------------------------",
    requirements,
    "",
    "----------------------------------------",
    `Sent directly to: ${TARGET_EMAIL}`,
    `Reply directly to this email to reach ${name} (${email}).`,
  ].join("\n");

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #0f172a; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background: #131713; color: #ffffff; padding: 24px 28px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; }
    .body { padding: 28px; }
    .row { margin-bottom: 18px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px; }
    .val { font-size: 15px; color: #0f172a; font-weight: 500; }
    .val a { color: #2563eb; text-decoration: none; }
    .hr { height: 1px; background: #e2e8f0; margin: 22px 0; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; word-break: break-word; }
    .footer { background: #f8fafc; padding: 16px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Project Enquiry</h1>
      <p>Skyhigh Engineering Website • ${submissionDate} IST</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Client Name</div>
        <div class="val">${escapeHtml(name)}</div>
      </div>
      <div class="row">
        <div class="label">Email Address</div>
        <div class="val"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
      </div>
      <div class="row">
        <div class="label">Phone Number</div>
        <div class="val">${phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : "Not provided"}</div>
      </div>
      <div class="row">
        <div class="label">Project Location</div>
        <div class="val">${escapeHtml(location || "Not provided")}</div>
      </div>
      <div class="row">
        <div class="label">Interested Solution</div>
        <div class="val"><strong>${escapeHtml(solutionLabel)}</strong></div>
      </div>
      <div class="hr"></div>
      <div class="row">
        <div class="label">Project Brief & Details</div>
        <div class="box">${escapeHtml(requirements)}</div>
      </div>
    </div>
    <div class="footer">
      Delivered to ${TARGET_EMAIL}<br>
      You can reply directly to this email to respond to <strong>${escapeHtml(name)}</strong>.
    </div>
  </div>
</body>
</html>
  `;

  // 1. Gmail / SMTP Provider (using Nodemailer)
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
  const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || TARGET_EMAIL;

  if (gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass.replace(/\s+/g, ""),
        },
      });

      await transporter.sendMail({
        from: `"Skyhigh Engineering" <${gmailUser}>`,
        to: TARGET_EMAIL,
        replyTo: `"${name}" <${email}>`,
        subject,
        text: textBody,
        html: htmlBody,
      });

      return NextResponse.json({
        ok: true,
        message: `Your enquiry has been successfully delivered to ${TARGET_EMAIL}.`,
      });
    } catch (err) {
      console.error("Gmail SMTP delivery failed:", err);
      return NextResponse.json(
        {
          error:
            "Could not dispatch email through the SMTP service. Please try again or email us directly.",
        },
        { status: 500 },
      );
    }
  }

  // 2. Resend API Provider
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const fromEmail =
        process.env.ENQUIRY_FROM_EMAIL || "Skyhigh Engineering <onboarding@resend.dev>";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [TARGET_EMAIL],
          reply_to: email,
          subject,
          text: textBody,
          html: htmlBody,
        }),
        signal: AbortSignal.timeout(12000),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json().catch(() => ({}));
        console.error("Resend error:", errorData);
        throw new Error("Resend delivery failed");
      }

      return NextResponse.json({
        ok: true,
        message: `Your enquiry has been successfully delivered to ${TARGET_EMAIL}.`,
      });
    } catch (err) {
      console.error("Resend delivery error:", err);
      return NextResponse.json(
        {
          error:
            "Could not dispatch email through Resend. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }
  }

  // 3. Fallback: Log to server if credentials are not configured yet
  console.log(`[SKYHIGH PROJECT ENQUIRY RECEIVED FOR ${TARGET_EMAIL}]:`, {
    name,
    email,
    phone,
    location,
    solution: solutionLabel,
    requirements,
    date: submissionDate,
  });

  if (process.env.NODE_ENV !== "production") {
    return NextResponse.json({
      ok: true,
      message: `[Dev Mode] Enquiry received and logged for ${TARGET_EMAIL}. Add GMAIL_APP_PASSWORD or RESEND_API_KEY to send live emails.`,
    });
  }

  return NextResponse.json(
    {
      error:
        `Email service configuration is pending. Please contact ${TARGET_EMAIL} directly or save your brief.`,
    },
    { status: 503 },
  );
}
