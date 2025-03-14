
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

    // Get SendGrid API key - using the explicit key for now
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

    // Import the SendGrid package using dynamic import
    const sgMailModule = await import('@sendgrid/mail');
    const sgMail = sgMailModule.default;
    
    // Set the API key
    sgMail.setApiKey(SENDGRID_API_KEY);

    // Prepare email message
    const msg = {
      to: 'info@esenciaindia.com',
      from: 'no-reply@esenciaindia.com', // Must be verified sender in SendGrid
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log("Preparing to send email with payload:", JSON.stringify(msg));

    try {
      // Send the email
      await sgMail.send(msg);
      console.log("Email sent successfully");
      
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (sgError) {
      console.error("SendGrid sending error:", sgError);
      
      // More detailed logging if response exists
      if (sgError.response) {
        console.error("SendGrid error details:", {
          status: sgError.response.status,
          body: sgError.response.body,
          headers: sgError.response.headers
        });
      }
      
      return new Response(JSON.stringify({ 
        error: "Failed to send email", 
        details: sgError.message,
        code: sgError.code || 'unknown' 
      }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
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
