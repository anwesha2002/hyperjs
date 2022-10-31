import fs from 'fs'
import path from 'path'

export const COMPONENTS_PATH = path.join(process.cwd(), '/src/data/components')

export const componentFilePaths = fs
  .readdirSync(COMPONENTS_PATH)
  .filter((filePath) => /\.mdx?$/.test(filePath))