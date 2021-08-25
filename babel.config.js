module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@domain': './src/domain',
        '@application': './src/application',
        '@infraestructure': './src/infraestructure',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
