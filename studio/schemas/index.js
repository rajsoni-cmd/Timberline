import siteSettings from './siteSettings'
import pageBanners, {pageBanner} from './pageBanners'
import portfolioCategory from './portfolioCategory'
import project from './project'
import testimonial from './testimonial'
import faq from './faq'
import teamMember from './teamMember'

export const schemaTypes = [
  siteSettings,
  pageBanners,
  pageBanner,
  portfolioCategory,
  project,
  testimonial,
  faq,
  teamMember,
]

// Documents that exist exactly once (no "create new" / "delete")
export const SINGLETONS = ['siteSettings', 'pageBanners']
