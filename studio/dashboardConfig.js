export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600ef7685dcdea1df995371e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rwbpwwh1',
                  apiId: '2e2965dd-b6e4-4b4a-8e86-144b0da86cb2'
                },
                {
                  buildHookId: '600ef7685e57f110dd5b30f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eq9dwhe9',
                  apiId: 'a708706a-597b-4ba5-bd07-8a12eefb20c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielemonaca/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eq9dwhe9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
