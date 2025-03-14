
// Cloudflare Edge Function to send emails via SendGrid
export async function onRequest(context) {
  try {
    // Output logging for debugging
    console.log("Email API endpoint called");
    
    // Only allow POST requests
    if (context.request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // CORS preflight request handling
    if (context.request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    // Get form data from request
    const formData = await context.request.json();
    const { name, email, phone, subject, message } = formData;

    // Log the received data for debugging
    console.log("Received form data:", { name, email, phone, subject, message });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Required fields missing" }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // Get SendGrid API key from environment variable
    // Using explicitly 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 for now
    const SENDGRID_API_KEY = "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";
    
    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key missing");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // Prepare email content
    const emailData = {
      personalizations: [
        {
          to: [{ email: "info@esenciaindia.com" }],
          subject: `Contact Form: ${subject}`
        }
      ],
      from: { email: "no-reply@esenciaindia.com", name: "Esencia India Website" },
      reply_to: { email: email, name: name },
      content: [
        {
          type: "text/html",
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        }
      ]
    };

    console.log("Sending email via SendGrid with payload:", JSON.stringify(emailData));

    // Send email via SendGrid API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailData)
    });

    console.log("SendGrid API response status:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("SendGrid API error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email", details: error }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Server error", details: error.message }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
