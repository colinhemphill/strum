module.exports = {
  plugins: ['@vanilla-extract/babel-plugin'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
