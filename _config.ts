import lume from "lume/mod.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import basePath from "lume/plugins/base_path.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";

const site = lume({
  location: new URL("https://resume.suderman.dev"),
  prettyUrls: false, // Disable pretty urls
});

// Ignores
site.ignore("README.md");

// Use the plugins
site.use(basePath());
site.use(resolveUrls());
site.use(modifyUrls());
site.use(slugifyUrls({ alphanumeric: false }));

// Copy root static files
site.copy("favicon.ico");
site.copy("styles.css");
site.copy("fonts");

export default site;
