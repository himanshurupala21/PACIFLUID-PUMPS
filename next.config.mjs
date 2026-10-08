/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/index.htm", destination: "/" },
      { source: "/index.html", destination: "/" },
      { source: "/about-us.htm", destination: "/about" },
      { source: "/about-us.html", destination: "/about" },
      { source: "/product.htm", destination: "/products" },
      { source: "/product.html", destination: "/products" },
      { source: "/products.htm", destination: "/products" },
      { source: "/contact.htm", destination: "/contact" },
      { source: "/contact.html", destination: "/contact" },
      { source: "/application.htm", destination: "/applications" },
      { source: "/application.html", destination: "/applications" },
      { source: "/applications.htm", destination: "/applications" },
      { source: "/valued-client.htm", destination: "/clients" },
      { source: "/valued-client.html", destination: "/clients" },
      { source: "/infrastructure.htm", destination: "/about" },
      { source: "/infrastructure.html", destination: "/about" },
      { source: "/quality-policy.htm", destination: "/about" },
      { source: "/quality-policy.html", destination: "/about" },
      { source: "/gp.htm", destination: "/products/gp-series" },
      { source: "/gp.html", destination: "/products/gp-series" },
      { source: "/gpss.htm", destination: "/products/gpss-series" },
      { source: "/gpss.html", destination: "/products/gpss-series" },
      { source: "/pgp.htm", destination: "/products/pgp-series" },
      { source: "/pgp.html", destination: "/products/pgp-series" },
      { source: "/piga.htm", destination: "/products/piga-series" },
      { source: "/piga.html", destination: "/products/piga-series" },
      { source: "/pigb.htm", destination: "/products/pigb-series" },
      { source: "/pigb.html", destination: "/products/pigb-series" },
      { source: "/mail.php", destination: "/api/inquiry" },
    ];
  },
};

export default nextConfig;
