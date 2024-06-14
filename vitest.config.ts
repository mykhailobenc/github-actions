import { defineVitestConfig } from '@nuxt/test-utils/config';
import { configDefaults } from 'vitest/config';

export default defineVitestConfig({
    test: {
        globals: true,
        setupFiles: ['tests/vitest.setup.ts'],
        environment: 'nuxt',
        coverage: {
          reporter: ["text", "json", "json-summary"],
          reportsDirectory: './.coverage',
          exclude: [
            '.coverage/**',
            'dist/**',
            '**/[.]**',
            'packages/*/test?(s)/**',
            '**/*.d.ts',
            '**/virtual:*',
            '**/__x00__*',
            '**/\x00*',
            'cypress/**',
            'test?(s)/**',
            'test?(-*).?(c|m)[jt]s?(x)',
            '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
            '**/__tests__/**',
            '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
            '**/vitest.{workspace,projects}.[jt]s?(on)',
            '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',

            '**/*.stories.{ts,js}',
            'stories/**',
            '**/__snapshots__/**'
          ]
        }
    }
})
