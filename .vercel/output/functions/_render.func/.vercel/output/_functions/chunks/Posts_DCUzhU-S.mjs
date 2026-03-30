import { c as createAstro, d as createComponent, m as maybeRenderHead, e as addAttribute, f as renderComponent, r as renderTemplate, g as renderSlot } from './astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_5H5vyPDq.mjs';
import { $ as $$FormattedDate } from './FormattedDate_DJula0Zt.mjs';
import { $ as $$Image } from './_astro_assets_BOMUOIjH.mjs';
import 'clsx';
import { s as slugify } from './utils_B5HB816P.mjs';

const $$Astro$2 = createAstro("https://dimognetehem.vercel.app");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${post.slug}`, "href")}${addAttribute(post.data.title, "title")}${addAttribute(post.data.description, "aria-label")} class="group min-h-96"> <article class="h-full rounded-md overflow-hidden flex flex-col justify-stretch"> <div class="w-full block"> ${post.data.coverImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "bg-center h-full object-cover w-full m-0", "src": post.data.coverImage, "alt": post.data.title, "loading": "eager" })}`} </div> <div class="w-full flex-grow rounded-b-md flex flex-col items-start relative justify-between bg-skin-muted/20 backdrop-blur-md pb-4 pl-4 pr-4"> <div class="p-4 bg-skin-fill flex flex-col text-balance absolute bottom-5 left-5 right-5 min-h-[140%]"> <div class="items-center text-skin-muted inline-flex mb-2 space-x-1"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(post.data.pubDate) })} </div> <p class="text-skin-base line-clamp-2 text-lg font-display">${post.data.title}</p> <p class="mt-6 text-skin-muted line-clamp-4 text-sm">${post.data.description}</p> </div> </div> </article> </a>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/components/PostCard.astro", void 0);

const $$Astro$1 = createAstro("https://dimognetehem.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-4 print:gap-0", className], "class:list")}> ${title && renderTemplate`<h3${addAttribute(id || title, "id")} class="relative flex w-full text-skin-muted items-center gap-3 pb-4 text-3xl print:gap-1 print:pb-0 print:text-xl"> ${title} </h3>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/components/Section.astro", void 0);

const $$Astro = createAstro("https://dimognetehem.vercel.app");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { tag } = Astro2.props;
  let posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  if (tag) {
    posts = posts.filter((post) => post.data.tags?.map((tag2) => slugify(tag2)).includes(tag || ""));
  }
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "posts", "className": Astro2.props.className, "title": "Posts" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid gap-4 grid-cols-1 items-stretch lg:gap-y-8 sm:grid-cols-2"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ` })}`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/components/sections/Posts.astro", void 0);

export { $$Posts as $, $$Section as a };
