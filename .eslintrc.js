module.exports = {
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['build/**/*', '*.js', 'dist/**/*']
}
