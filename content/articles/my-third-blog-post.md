---
title: My third Blog Post
description: Learning how to use @nuxt/content to create a blog
image: 'https://res.cloudinary.com/redfern-web/image/upload/v1599840408/redfern-dev/png/nuxt.png'
alt: my third blog post
tags: ['VueJS', 'Nuxt']
published: '2020-09-02'
author:
  name: John
  bio: All about John
  image: https://avatars.githubusercontent.com/u/40572114?s=400&u=c7d9950aceac671cb565a7158ac1890bd3d0c03a&v=4
---
# Third Article


## This is a heading Leppard

This is some more info

### This is a sub heading Deff

This is some more info

### This is another sub heading

This is some more info Deff


## This is another heading

This is some more info


# My third blog post

Welcome to my third blog post using content module

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class of note
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

<!-- <author :author="author"></author> -->

export default {
  nuxt: 'is the best'
}