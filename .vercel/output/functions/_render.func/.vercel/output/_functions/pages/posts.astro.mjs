import { d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMQCgtQn.mjs';
import { $ as $$Posts } from '../chunks/Posts_DCUzhU-S.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "All posts";
  const description = "Articles, guides, tutorials about web development.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="max-w-screen-md mx-auto pt-28 pb-16"> ${renderComponent($$result2, "Posts", $$Posts, {})} </div> </div> ` })}`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
