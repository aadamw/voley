export function register() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_EMAIL) {
    throw new Error('RESEND ENVS MISSING');
  }
}
