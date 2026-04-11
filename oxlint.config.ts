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
  jsPlugins: ['eslint-plugin-better-tailwindcss'],
  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
    'react/no-children-prop': 'error',
    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    'better-tailwindcss/enforce-consistent-class-order': 'off',
    'better-tailwindcss/no-duplicate-classes': 'error',
    'better-tailwindcss/no-conflicting-classes': 'error',
    'better-tailwindcss/no-unknown-classes': 'error',
    'better-tailwindcss/no-deprecated-classes': 'error',
    'better-tailwindcss/enforce-shorthand-classes': 'warn',
  },
  settings: {
    'jsx-a11y': {
      polymorphicPropName: null,
      components: {},
      attributes: {},
    },
    'better-tailwindcss': {
      entryPoint: './src/styles/input.css',
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
