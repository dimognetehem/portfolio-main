import 'clsx';

const slugify = (input) => {
  if (!input) return "";
  var slug = input.toLowerCase().trim();
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
};
const unslugify = (slug) => slug.replace(/\-/g, " ").replace(
  /\w\S*/g,
  (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
);

export { slugify as s, unslugify as u };
