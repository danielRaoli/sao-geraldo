// Flat ESLint config with TypeScript and Next.js support
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  // Base JS rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Next.js Core Web Vitals rules
  nextPlugin.configs['core-web-vitals'],

  // Parser for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: './tsconfig.json',
      },
    },
  },

  // Project-specific rules
  {
    rules: {
      'no-console': 'warn',
    },
  },
]