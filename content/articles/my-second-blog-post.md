---
title: My second Blog Post
description: Learning how to use @nuxt/content to create a blog
image: 'https://res.cloudinary.com/redfern-web/image/upload/v1599840408/redfern-dev/png/nuxt.png'
alt: my second blog post
tags: ['VueJS', 'Nuxt']
published: '2020-09-02'
author:
  name: Benjamin
  bio: All about Benjamin
  image: https://images.unsplash.com/photo-1600267185393-e158a98703de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=195&q=80
---

## This is a heading Leppard

This is some more info

### This is a sub heading Deff

This is some more info

### This is another sub heading

This is some more info Deff


## This is another heading

This is some more info


# My second blog post

Welcome to my second blog post using content module

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