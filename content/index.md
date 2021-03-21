---
title: Article One
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
image: 'https://res.cloudinary.com/redfern-web/image/upload/v1599840408/redfern-dev/png/nuxt.png'
tags: ['VueJS', 'Nuxt']
published: '2020-09-01'
---

## Getting started

i never thought about doing something like this
but jesus:
```js
function route(path, name, defaultView, components = {}) {
    components['default'] = defaultView

    return {path, name, components}
}

function layout(path, components, children) {
    components['default'] = DefaultView

    return {path, components, children}
}

export default [
    layout('/', {
        vAppBar: AppBarLoggedIn,
        vNavigationDrawer: NavigationDrawerLoggedIn
    }, [
        route('/inquiries', 'inquiries', inquiries),
        route('/containers', 'containers', containers),
        route('/containers/:container_id', 'containers.show', container),
        route('/inquiries/:inquiry_id', 'inquiries.show', inquiry),
        route('/sessions/:session_id', 'sessions.show', session),
        route('/sessions', 'sessions', sessions),
        route('/profile', 'profile', profile),
    ]),
    layout('/', {
        vAppBar: AppBarGuest
    }, [
        route('/login', 'login', login),
        route('/register', 'register', register)
    ])
]
```

what comfort
that beats 500 lines



