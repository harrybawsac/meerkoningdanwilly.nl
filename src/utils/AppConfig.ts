export const AppConfig = {
  site_name: 'Starterkit',
  title: 'Nextjs Starterkit',
  description: 'Starterkit code for your Nextjs project with Tailwind CSS',
  locale: 'en',
  base_url:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : 'http://localhost:3000',
};
