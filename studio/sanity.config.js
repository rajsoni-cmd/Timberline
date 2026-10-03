import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes, SINGLETONS} from './schemas'
import {structure} from './structure'
import {UpdateWebsiteTool} from './UpdateWebsiteTool'
import {projectId, dataset} from './project.config'

export default defineConfig({
  name: 'timberline',
  title: 'Timberline Custom Homes',
  projectId,
  dataset,
  plugins: [structureTool({structure, title: 'Edit Content'})],
  tools: (prev) => [
    ...prev,
    {name: 'update-website', title: 'Update Website', icon: () => '🚀', component: UpdateWebsiteTool},
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      // Hide "new" templates for singletons
      ...prev.filter((t) => !SINGLETONS.includes(t.schemaType)),
      {
        id: 'project-in-category',
        title: 'Project in category',
        schemaType: 'project',
        parameters: [{name: 'categoryId', type: 'string'}],
        value: ({categoryId}) => ({category: {_type: 'reference', _ref: categoryId}}),
      },
    ],
  },
  document: {
    // Singletons can't be duplicated or deleted
    actions: (prev, {schemaType}) =>
      SINGLETONS.includes(schemaType)
        ? prev.filter(({action}) => ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
    newDocumentOptions: (prev) => prev.filter((item) => !SINGLETONS.includes(item.templateId) && item.templateId !== 'project-in-category'),
  },
})
