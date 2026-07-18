export const config = {
  matcher: '/slides.html',
};

export default function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader && authHeader.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6));
    const password = decoded.slice(decoded.indexOf(':') + 1);

    if (process.env.SLIDES_PASSWORD && password === process.env.SLIDES_PASSWORD) {
      return;
    }
  }

  return new Response('Access denied.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="SSH meetup slides"',
    },
  });
}
