module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '*.css': ['npx stylelint --fix'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.json': ['prettier --write'],
};
