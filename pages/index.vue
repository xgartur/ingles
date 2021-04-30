<template lang="pug">
  div
    section.hero.is-info.is-medium
      .hero-head
        nav.navbar
          .container
            .navbar-brand
              a.navbar-item
                p.is-size-4 4rtur8
              span.navbar-burger(data-target='navbarMenuHeroA')
                span
                span
                span
            #navbarMenuHeroA.navbar-menu
              .navbar-end
                a.navbar-item.is-active
                  | Home
      .hero-body
        .container.has-text-centered
          p.title
            | Ingles
          p.subtitle
            | Blog
    .container.margin
      .content
        h1 {{page.title}}
        nuxt-content(:document="page")

</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()
    console.log(page)
    return {
      page
    }
  }
}
</script>
<style>
.margin{
  margin-top:100px;
}
.nuxt-content h1 > a::before,.nuxt-content h2 > a::before, .nuxt-content h3 > a::before {
    content: "#";
    --text-opacity: 1;
    color: #167DF0;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;
    position: absolute;
    opacity: 1;
}
</style>
