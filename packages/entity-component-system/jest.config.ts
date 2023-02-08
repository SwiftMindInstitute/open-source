import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  testEnvironment: 'node',
  projects: ['<rootDir>'],
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@bluesky.llc)/)'],
}

export default config
