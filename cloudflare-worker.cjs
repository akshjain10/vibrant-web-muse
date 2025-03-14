
// Use CommonJS style for Cloudflare worker script
const fs = require('fs');
const path = require('path');

// Create a Cloudflare Worker that serves the static assets
const workerScript = `
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  let pathname = url.pathname;
  
  // Debug log the requested path
  console.log("Request path:", pathname);
  
  // Handle API routes first
  if (pathname.startsWith('/api/')) {
    // Forward API requests to the appropriate function
    console.log("API request detected:", pathname);
    return fetch(request);
  }
  
  // Serve index.html for root path
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }
  
  // Handle client-side routing by serving index.html for missing files
  // that don't have file extensions (likely routes)
  if (!pathname.includes('.')) {
    pathname = '/index.html';
  }
  
  // Strip any project prefix from the pathname that might be causing issues
  if (pathname.includes('/vibrant-web-muse/dist/')) {
    pathname = pathname.replace('/vibrant-web-muse/dist', '');
    if (pathname === '' || pathname === '/') {
      pathname = '/index.html';
    }
  }
  
  // Set response object with appropriate headers
  try {
    // Try to fetch the requested resource
    let response = await fetch(new Request(url.origin + pathname, request));
    
    // If the response is not found, serve index.html for SPA routing
    if (response.status === 404) {
      console.log("Resource not found, serving index.html instead");
      return await fetch(new Request(url.origin + '/index.html', request));
    }
    
    // Clone the response so that it's no longer immutable
    const newResponse = new Response(response.body, response);
    
    // Add security headers
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newResponse.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' api.sendgrid.com https://api.sendgrid.com;");
    
    return newResponse;
  } catch (error) {
    console.error("Error serving request:", error);
    // If any error occurs, serve index.html as a fallback
    return await fetch(new Request(url.origin + '/index.html', request));
  }
}
`;

// Write the worker script to the dist directory
const distDir = path.join(__dirname, 'dist');

// Make sure the dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the worker script
fs.writeFileSync(path.join(distDir, 'worker.js'), workerScript);
console.log('Cloudflare Worker script generated successfully!');
