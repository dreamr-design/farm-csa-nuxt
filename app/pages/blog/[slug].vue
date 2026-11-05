<script setup>
import { blogEntry } from '~/utils/posts';

definePageMeta({ slug: 'blog-post' });
const entry = blogEntry(useRoute().params.slug);
if (!entry) throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true });
useHead({
  title: entry.title,
  meta: [
    { name: 'description', content: entry.description },
  ],
});
</script>

<template>
<main id="main">
    <article class="post" aria-labelledby="page-title">
      <div class="page-hero">
        <div class="wrap">
          <div>
            <p class="kicker">Farm notes · From the rows at Bramblecut</p>
            <h1 id="page-title">{{ entry.title }}</h1>
            <p class="lede">{{ entry.description }}</p>
            <p class="post-meta"><span>Written after chores</span><span class="post-date">{{ entry.date }}</span></p>
          </div>
          <p class="stamp stamp--round">Written<strong>Wed.</strong>packed Thurs.</p>
        </div>
      </div>

      <div class="wrap post-wrap">
        <figure class="post-lead">
          <img src="/assets/img/hills.svg" alt="Screenprint of the Bramblecut hollow at sunrise: the red barn, a silo, and the striped rows of the south slope" width="1440" height="320">
        </figure>

        <div class="post-body" v-html="entry.content"></div>

        <p class="post-back"><a href="/blog/">&larr; All farm notes</a></p>
      </div>
    </article>
  </main>
</template>
