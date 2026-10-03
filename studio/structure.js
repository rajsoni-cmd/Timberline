import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {CogIcon, CommentIcon, FolderIcon, HelpCircleIcon, HomeIcon, ImagesIcon, UserIcon} from './icons'

const singleton = (S, type, title, icon) =>
  S.listItem().title(title).id(type).icon(icon).child(S.document().schemaType(type).documentId(type).title(title))

export const structure = (S, context) =>
  S.list()
    .title('Timberline Website')
    .items([
      S.listItem()
        .title('Portfolio')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Portfolio')
            .items([
              orderableDocumentListDeskItem({type: 'project', title: 'All Projects (drag to reorder)', icon: HomeIcon, S, context}),
              S.listItem()
                .title('Projects by Category')
                .icon(FolderIcon)
                .child(
                  S.documentTypeList('portfolioCategory')
                    .title('Choose a category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Projects')
                        .schemaType('project')
                        .filter('_type == "project" && category._ref == $categoryId')
                        .params({categoryId})
                        .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                        .initialValueTemplates([
                          S.initialValueTemplateItem('project-in-category', {categoryId}),
                        ]),
                    ),
                ),
              S.divider(),
              orderableDocumentListDeskItem({type: 'portfolioCategory', title: 'Categories (drag to reorder)', icon: FolderIcon, S, context}),
            ]),
        ),
      S.divider(),
      orderableDocumentListDeskItem({type: 'testimonial', title: 'Testimonials', icon: CommentIcon, S, context}),
      orderableDocumentListDeskItem({type: 'faq', title: 'FAQs', icon: HelpCircleIcon, S, context}),
      orderableDocumentListDeskItem({type: 'teamMember', title: 'Team Members', icon: UserIcon, S, context}),
      S.divider(),
      singleton(S, 'pageBanners', 'Page Banners', ImagesIcon),
      singleton(S, 'siteSettings', 'Contact Details & Home Slider', CogIcon),
    ])
