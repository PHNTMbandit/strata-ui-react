import { defineConfig } from 'oxfmt'

export default defineConfig({
  $schema: './node_modules/oxlint/configuration_schema.json',
  plugins: [
    'eslint',
    'import',
    'jsdoc',
    'oxc',
    'react',
    'react-perf',
    'typescript',
    'unicorn',
    'vitest',
  ],
  jsPlugins: [],
  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
  },
  settings: {
    'jsx-a11y': {
      polymorphicPropName: null,
      components: {},
      attributes: {},
    },
    next: {
      rootDir: [],
    },
    react: {
      formComponents: [],
      linkComponents: [],
      version: null,
      componentWrapperFunctions: [],
    },
    jsdoc: {
      ignorePrivate: false,
      ignoreInternal: false,
      ignoreReplacesDocs: true,
      overrideReplacesDocs: true,
      augmentsExtendsReplacesDocs: false,
      implementsReplacesDocs: false,
      exemptDestructuredRootsFromChecks: false,
      tagNamePreference: {},
    },
    vitest: {
      typecheck: false,
    },
  },
  env: {
    builtin: true,
  },
  globals: {},
  options: {
    typeAware: true,
  },
  ignorePatterns: [],
})
