import fs from 'fs';
const path = require('path');

// Create a Cloudflare Worker that serves the static assets
const workerScript = `
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  let pathname = url.pathname;
  
  // Serve index.html for root path
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }
  
  // Handle client-side routing by serving index.html for missing files
  // that don't have file extensions (likely routes)
  if (!pathname.includes('.')) {
    pathname = '/index.html';
  }
  
  // Set response object with appropriate headers
  try {
    const response = await fetch(new Request(url.origin + pathname, request));
    
    // Clone the response so that it's no longer immutable
    const newResponse = new Response(response.body, response);
    
    // Add security headers
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    return newResponse;
  } catch (error) {
    return new Response('Not Found', { status: 404 });
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
