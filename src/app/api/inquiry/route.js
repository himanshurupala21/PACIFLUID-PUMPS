import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    let body = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        body[key] = value;
      }
    }

    const {
      name = "N/A",
      email = "N/A",
      phone = "N/A",
      company = "N/A",
      product = "General Technical Inquiry",
      quantity = "N/A",
      application = "N/A",
      message = "No additional message provided."
    } = body;

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    });

    console.log("[PACIFLUID PUMPS - NEW INQUIRY RECEIVED]:", {
      name,
      email,
      phone,
      company,
      product,
      quantity,
      application,
      message,
      submittedAt: submissionTime
    });

    // Clean phone number for WhatsApp link (remove spaces, dashes, parentheses)
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone}` : null;

    // Check for email credentials (trim strings and remove spaces from 16-character Google App Password)
    const rawGmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || "";
    const rawGmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "";
    const rawRecipient = process.env.INQUIRY_RECIPIENT_EMAIL || rawGmailUser || "pacifluidpumps@gmail.com";

    const gmailUser = rawGmailUser.trim().replace(/^["']|["']$/g, "");
    const gmailPass = rawGmailPass.replace(/\s+/g, "").replace(/^["']|["']$/g, "");
    const recipientEmail = rawRecipient.trim().replace(/^["']|["']$/g, "");

    let emailSent = false;
    let emailError = null;

    const isConfigured =
      Boolean(gmailUser &&
      gmailPass &&
      !gmailUser.includes("your-email") &&
      !gmailPass.includes("your-16-char"));

    if (isConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass
          }
        });

        const mailSubject = `🔔 New Website Inquiry: ${name} — ${product}`;

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f6f9; color: #111827; }
    .wrapper { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #0B2341 0%, #155A9C 100%); padding: 24px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1; }
    .content { padding: 32px; }
    .badge { display: inline-block; background-color: #fee2e2; color: #dc2626; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
    .lead-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .field-row { display: flex; padding: 8px 0; border-bottom: 1px solid #f1f5f9; }
    .field-row:last-child { border-bottom: none; }
    .label { width: 140px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.03em; }
    .value { flex: 1; font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }
    .message-box { background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #155A9C; border-radius: 4px; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
    .actions { display: flex; gap: 12px; margin-top: 24px; }
    .btn { display: inline-block; padding: 10px 20px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; text-align: center; }
    .btn-primary { background-color: #0B2341; color: #ffffff !important; }
    .btn-success { background-color: #25D366; color: #ffffff !important; }
    .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 11px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>PACIFLUID PUMPS / SHAKTI ENGINEERS</h1>
      <p>New Website Lead & Inquiry Notification</p>
    </div>

    <div class="content">
      <span class="badge">New Inbound Inquiry</span>
      <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #0B2341;">Customer & Application Details</h2>

      <div class="lead-card">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; width: 140px; font-size: 12px; font-weight: 600; color: #64748b;">FULL NAME</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 700; color: #0B2341;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">EMAIL</td>
            <td style="padding: 6px 0; font-size: 14px; color: #155A9C;"><a href="mailto:${email}" style="color: #155A9C; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">PHONE / MOBILE</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #0B2341;">
              <a href="tel:${phone}" style="color: #0B2341; text-decoration: none;">${phone}</a>
              ${waLink ? ` &nbsp;•&nbsp; <a href="${waLink}" style="color: #25D366; font-size: 12px; text-decoration: underline;">Chat on WhatsApp</a>` : ""}
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">COMPANY</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #0B2341;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">PUMP / PRODUCT</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 700; color: #D71920;">${product}</td>
          </tr>
          ${
            quantity && quantity !== "N/A"
              ? `<tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">QUANTITY</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0B2341;">${quantity}</td>
          </tr>`
              : ""
          }
          ${
            application && application !== "N/A"
              ? `<tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">APPLICATION / DUTY</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0B2341;">${application}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">RECEIVED AT</td>
            <td style="padding: 6px 0; font-size: 12px; color: #64748b;">${submissionTime}</td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 16px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b;">Message / Technical Requirements:</p>
        <div class="message-box">${message}</div>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 13px; font-weight: 600; color: #0B2341; margin-bottom: 12px;">Quick Action:</p>
        <a href="mailto:${email}?subject=Regarding%20your%20inquiry%20for%20${encodeURIComponent(product)}%20-%20Pacifluid%20Pumps" style="display: inline-block; background-color: #0B2341; color: #ffffff; text-decoration: none; padding: 10px 18px; font-size: 13px; font-weight: 600; border-radius: 6px; margin-right: 10px;">Reply via Email</a>
        ${waLink ? `<a href="${waLink}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 10px 18px; font-size: 13px; font-weight: 600; border-radius: 6px;">WhatsApp Lead</a>` : ""}
      </div>
    </div>

    <div class="footer">
      This inquiry was submitted from the official Pacifluid Pumps website (Shakti Engineers).
    </div>
  </div>
</body>
</html>
`;

        const plainTextContent = `
PACIFLUID PUMPS / SHAKTI ENGINEERS - NEW INQUIRY

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Product / Model: ${product}
Quantity: ${quantity}
Application: ${application}
Submitted: ${submissionTime}

Message / Requirements:
${message}

Reply to: ${email}
        `.trim();

        await transporter.sendMail({
          from: `"Pacifluid Web Inquiries" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: email && email !== "N/A" ? email : gmailUser,
          subject: mailSubject,
          text: plainTextContent,
          html: htmlContent
        });

        emailSent = true;
        console.log(`[EMAIL DISPATCH SUCCESS] Inquiry forwarded to ${recipientEmail}`);
      } catch (err) {
        emailError = err.message;
        console.error("[EMAIL DISPATCH ERROR]", err);
      }
    } else {
      console.warn(
        "[EMAIL DISPATCH PENDING] GMAIL_USER and GMAIL_APP_PASSWORD are not yet set in .env.local. Inquiry was captured and logged above."
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        emailSent,
        message:
          "Thank you! Your technical inquiry has been submitted to Pacifluid Pumps / Shakti Engineers. Our sales engineering team will reach out with pricing and documentation.",
        ...(emailError ? { emailWarning: "Email delivery note: " + emailError } : {})
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept"
    }
  });
}
