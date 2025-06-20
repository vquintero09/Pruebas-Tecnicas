module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.*\\.e2e\\.ts$',
    '.*\\.functional\\.spec\\.ts$'
  ],
  globalSetup: 'jest-preset-angular/global-setup',
}