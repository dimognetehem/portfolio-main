import { d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMQCgtQn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "All My Projects", "description": "All my project portfolio from real projects to open source projects." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mb-10"> <h1 class="text-3xl font-bold mb-2">All My Projects</h1> <p class="text-skin-base text-lg">All my project portfolio from real projects to open source projects.</p> </div> </div> ` })}`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
