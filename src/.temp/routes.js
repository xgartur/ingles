const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/arturo/git/arturo/ingles/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/home/arturo/git/arturo/ingles/src/templates/Author.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/arturo/git/arturo/ingles/src/templates/Category.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/arturo/git/arturo/ingles/src/templates/BlogPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--infinity-vue" */ "/home/arturo/git/arturo/ingles/src/pages/Infinity.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--custom-page-vue" */ "/home/arturo/git/arturo/ingles/src/templates/CustomPage.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/arturo/git/arturo/ingles/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/arturo/git/arturo/ingles/src/pages/Index.vue")

export default [
  {
    path: "/tags/tag1/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag2/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag3/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag4/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag5/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/troes-retardat/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/john-doe/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/hans-wurst/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/digital/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/business/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/posts/troes-retardat/",
    component: c4
  },
  {
    path: "/posts/iter-vultus-quidem-pariter-caligine-inane-hanc/",
    component: c4
  },
  {
    path: "/infinity/:page(\\d+)?/",
    component: c5
  },
  {
    path: "/about-us/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
