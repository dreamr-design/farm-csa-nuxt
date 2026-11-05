<script setup>
import { blogPage } from '~/utils/posts';

const props = defineProps({ number: { type: Number, required: true } });
const list = blogPage(props.number);
if (!list) throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true });
useHead({
  title: 'Farm notes | Bramblecut Farm',
  meta: [
    { name: 'description', content: 'The Wednesday note from Bramblecut Farm: what went into the ground, what came out of it, what to cook with this week\'s crate, and what the weather did to the peppers.' },
  ],
});
</script>

<template>
<main id="main">
    <section class="page-hero" aria-labelledby="page-title">
      <div class="wrap">
        <div>
          <p class="kicker">Farm notes · Every Wednesday since 2013</p>
          <h1 id="page-title">Notes from the rows, written after chores.</h1>
          <p class="lede">The Wednesday note goes out the night before every pickup: what went into the ground, what came out of it, what to cook with the crate, and what the weather did to the peppers. These are the ones members asked us to keep.</p>
        </div>
        <p class="stamp stamp--round">Written<strong>Wed.</strong>packed Thurs.</p>
      </div>
    </section>

    <section class="section band" aria-label="Latest farm notes">
      <div class="wrap">
        <div class="post-list">
          <template v-for="entry in list.posts" :key="entry.url">
            <article class="post-card">
              <div class="packet">
                <div class="packet__top"><span>Farm note</span><span class="reg" aria-hidden="true"></span></div>
                <div class="packet__art"><img :src="entry.cover" alt="" width="200" height="200" loading="lazy"></div>
                <h2 class="packet__name"><a :href="entry.url">{{ entry.title }}</a></h2>
                <p class="post-card__excerpt">{{ entry.description }}</p>
                <p class="post-card__by"><span>Bramblecut Farm</span><span class="post-date">{{ entry.date }}</span></p>
                <div class="packet__ink" aria-hidden="true"><i></i><i></i><i></i></div>
              </div>
            </article>
          </template>
        </div>

        <nav class="pagination" aria-label="Blog pages">
          <template v-if="list.prev"><a class="pagination__step" :href="list.prev">&larr; Newer notes</a></template>
          <template v-if="list.next"><a class="pagination__step" :href="list.next">Older notes &rarr;</a></template>
        </nav>
      </div>
    </section>
  </main>
</template>
