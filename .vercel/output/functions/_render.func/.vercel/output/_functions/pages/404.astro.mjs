import { d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BOMUOIjH.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_jw6ENTIr.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMQCgtQn.mjs';
export { renderers } from '../renderers.mjs';

const NotFoundImage = new Proxy({"src":"/_astro/404-not-found.B9gbr-fO.png","width":600,"height":399,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/assets/img/404-not-found.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 Page Not Found - " + SITE_TITLE, "description": SITE_DESCRIPTION + " 404 Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container text-center"> ${renderComponent($$result2, "Image", $$Image, { "width": 300, "class": "my-8 mx-auto", "src": NotFoundImage, "alt": "404 Page Not Found" })} <div class="p-4"> <h1 class="text-5xl font-bold my-4">Page Not Found</h1> <p class="text-xl">
The page you're looking for is either moved or no longer exists. <br>
Please contact the site owner that linked you to the original URL and let them know their link is broken.
</p> </div> </div> ` })}`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/404.astro", void 0);

const $$file = "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
