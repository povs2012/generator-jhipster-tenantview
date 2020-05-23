const debug = require('debug')('tenantview:entity:client');
const path = require('path');

const customizer = require('generator-jhipster-customizer');
const generator = 'entity-client';

module.exports = {
  createGenerator: env => {
    return class extends customizer.createJHipsterGenerator(generator, env, {
      improverPaths: path.resolve(__dirname, '../../improver'),
      applyPatcher: true,
      patcherPath: path.resolve(__dirname, 'patcher')
    }) {
      constructor(args, options) {
        debug(`Initializing ${generator} ${options.context.name}`);
        super(args, options);
      }

      get writing() {
        return {...super._writing()};
      }
    };
  }
};
