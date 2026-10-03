import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from './project.config'

export default defineCliConfig({
  api: {projectId, dataset},
  // The editor will be published at https://timberline.sanity.studio
  // (if that name is taken, change it here, e.g. 'timberline-homes').
  studioHost: 'timberline',
  deployment: {autoUpdates: false},
})
