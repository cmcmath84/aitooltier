import type { NextConfig } from "next";

// Security headers applied to every response. Intentionally conservative:
// no CSP yet (needs a proper allowlist audit against Tailwind inline styles
// + Vercel Analytics inline scripts; shipping a broken CSP is worse than
// shipping none). The five headers below are uniformly safe for a static
// review site and address the common passive attacks: clickjacking, MIME
// sniffing, protocol downgrade, excessive referer leakage, and unneeded
// browser permissions.
const securityHeaders = [
  // Force HTTPS. 2 years, include subdomains, eligible for HSTS preload.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Don't let browsers MIME-sniff -- if we serve text/plain, render as such.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking: we never want aitooltier.com in a frame.
  { key: "X-Frame-Options", value: "DENY" },
  // Modern equivalent of X-Frame-Options; redundant belt-and-suspenders.
  // Placed via CSP once we add one; for now X-Frame-Options covers it.
  // Leak minimal referer to cross-origin requests.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny browser permissions we never use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
