import { d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_5H5vyPDq.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMQCgtQn.mjs';
import { s as slugify } from '../chunks/utils_B5HB816P.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  function groupTagsByFirstLetter(tags) {
    const grouped = tags.reduce(
      (acc, tag) => {
        const firstLetter = tag.label[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(tag);
        return acc;
      },
      {}
    );
    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)).map(([letter, tags2]) => ({
      letter,
      tags: tags2.sort((a, b) => a.label.localeCompare(b.label))
    }));
  }
  const allPosts = await getCollection("blog");
  const mappedTags = {};
  for (const post of allPosts) {
    for (const tag of post.data?.tags || []) {
      const tagValue = slugify(tag);
      if (mappedTags[tagValue]) {
        mappedTags[tagValue].postCount += 1;
      } else {
        const _tag = {
          value: tagValue,
          label: tag,
          postCount: 1
        };
        mappedTags[tagValue] = _tag;
      }
    }
  }
  const groupedTags = groupTagsByFirstLetter(Object.values(mappedTags));
  const title = `All Tags`;
  const description = "Post tags: concise keywords categorizing content for easy navigation and improved searchability";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mb-10"> <h1 class="text-3xl font-bold mb-2">${title}</h1> <p class="text-skin-base text-lg">${description}</p> </div> <div> ${groupedTags.map(({ letter, tags }) => renderTemplate`<div class="flex gap-2 border-b border-skin-muted py-3 mb-5 capitalize"> <h2 class="text-2xl font-bold text-skin-muted w-7 shrink-0">${letter}</h2> <div class="flex gap-2 flex-wrap"> ${(tags || [])?.map((tag) => renderTemplate`<a class="border border-skin-mutedrounded-2xl
                    text-sm text-skin-base no-underline px-3 py-1
                    transition-all duration-700
                  hover:border-skin-hue"${addAttribute(`/tags/${slugify(tag.value)}/`, "href")}> ${tag.label} (${tag.postCount})
</a>`)} </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
