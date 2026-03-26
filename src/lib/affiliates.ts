// Affiliate link configuration
// When monetization is OFF: links go directly to tool URL
// When monetization is ON: flip the flag and update URLs with affiliate tags
// Users never see affiliate URLs -- they just see /go/toolname

export const MONETIZATION_ENABLED = false;

// Map tool slugs to their affiliate URLs
// Update these when you join affiliate programs
const affiliateLinks: Record<string, string> = {
  midjourney: "https://midjourney.com",
  "dall-e": "https://openai.com/dall-e-3",
  "stable-diffusion": "https://stability.ai",
  // Add more as you sign up for affiliate programs:
  // "jasper": "https://jasper.ai?ref=YOUR_ID",
  // "copy-ai": "https://copy.ai?via=YOUR_ID",
};

export function getAffiliateUrl(toolSlug: string, fallbackUrl: string): string {
  if (!MONETIZATION_ENABLED) {
    return fallbackUrl;
  }
  return affiliateLinks[toolSlug] || fallbackUrl;
}
