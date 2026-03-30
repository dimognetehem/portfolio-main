import { c as createAstro, d as createComponent, e as addAttribute, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, f as renderComponent, t as renderHead } from './astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const Favicon = new Proxy({"src":"/_astro/portrait_black_and_white.Cw1XbfSF.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/assets/img/portrait_black_and_white.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://dimognetehem.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/syakir.webp" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon"${addAttribute(Favicon.src, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/layouts/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://dimognetehem.vercel.app");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { "border-b border-zinc-500 dark:border-zinc-300": isActive }, { "text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50": !isActive }, { "text-zinc-950 dark:text-zinc-50": isActive }], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/layouts/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menu = [
    {
      link: "/#experience",
      label: "Experience"
    },
    {
      link: "/#projects",
      label: "Projects"
    },
    {
      link: "/#posts",
      label: "Posts"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<header id="site-header"', '> <div class="container bg-transparent"> <nav class="flex gap-4 items-center justify-between py-3"> <h2 class="m-0 opacity-0 pointer-events-none"> <a href="" class="flex gap-4 items-center text-xl font-black uppercase"></a> </h2> <div class="w-auto max-w-full px-3 z-[999]"> <div class="flex px-2.5 bg-white/10 ring-1 shadow-skin-muted shadow ring-skin-muted backdrop-blur-md leading-tight rounded-full"> <div class="px-2.5 text-sm"> ', " </div> ", ` </div> </div> <div class="flex"> <button class="p-3" id="themeToggle" aria-label="Theme mode"> <svg class="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--color-text-base))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> <svg class="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--color-text-base))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> </button> </div> </nav> </div>  <script>
		const theme = (() => {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return 'dark';
			}
			if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
				return localStorage.getItem('theme');
			}
			return 'light';
		})();

		if (theme === 'light') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}

		window.localStorage.setItem('theme', theme || '');

		function sendMessage(message) {
			const iframe = document.querySelector('iframe.giscus-frame');
			if (!iframe) return;
			iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
		}

		const handleToggleClick = () => {
			const element = document.documentElement;
			element.classList.toggle('dark');

			const isDark = element.classList.contains('dark');
			if (isDark) {
				sendMessage({
					setConfig: {
						theme: 'dark_dimmed'
					}
				});
			} else {
				sendMessage({
					setConfig: {
						theme: 'light'
					}
				});
			}
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		};
		document.getElementById('themeToggle')?.addEventListener('click', handleToggleClick);
	<\/script> </header>`])), maybeRenderHead(), addAttribute(["flex fixed top-1 items-center w-full transition duration-300 z-[999] border-[var(--soft-border-color)]"], "class:list"), renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "py-3 flex items-center", "href": "/", "aria-label": "Home" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> ` }), menu.map((item) => renderTemplate`<div class="px-2.5 text-sm"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "py-3 flex items-center", "href": item.link }, { "default": ($$result2) => renderTemplate`${item.label}` })} </div>`));
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/layouts/components/Header.astro", void 0);

const $$ArtPlums = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pointer-events-none fixed bottom-0 left-0 right-0 top-0 print:hidden" style="mask-image: radial-gradient(circle, transparent, black); -webkit-mask-image: radial-gradient(circle, transparent, black);"> <canvas id="artPlumCanvas" width="400" height="400"></canvas> </div> `;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/components/ArtPlums.astro", void 0);

const $$Astro = createAstro("https://dimognetehem.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body class="relative bg-skin-fill font-sans"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "ArtPlums", $$ArtPlums, {})} <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
