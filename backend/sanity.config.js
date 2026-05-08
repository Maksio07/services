import {defineConfig} from 'sanity'
import { visionTool } from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Usługi Remontowe Mirosław Bączkowski',
  projectId: 'k9xjo2pk',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
