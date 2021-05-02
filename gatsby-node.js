'use strict'

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

require('./src/__generated__/gatsby-types')

const { createPages, onCreateNode } = require('./src/gatsby-node/index')

exports.createPages = createPages
exports.onCreateNode = onCreateNode
