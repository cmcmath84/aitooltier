import { ToolReview } from "@/lib/types";

export const poe: ToolReview = {
  slug: "poe",
  name: "Poe",
  tagline: "One subscription, every major AI model -- Quora's multi-model chatbot lets you switch between GPT-4, Claude, and more",
  category: "ai-chatbots",
  url: "https://poe.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 8,
    features: 7,
    overall: 7.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Limited daily messages", "Access to basic models", "Custom bot creation"],
    },
    {
      plan: "Poe Subscriber",
      price: "$19.99",
      period: "month",
      features: ["GPT-4, Claude 3.5, Gemini Pro", "Higher message limits", "Image generation", "Priority access"],
    },
    {
      plan: "Annual",
      price: "$199.99",
      period: "year",
      features: ["Same as monthly", "2 months free"],
    },
  ],

  pros: [
    "Access to GPT-4, Claude, Gemini, Llama, and others all in one place -- great for comparing responses side by side",
    "Custom bot builder lets you create specialized AI assistants with system prompts and specific model configs",
    "One subscription is cheaper than paying for ChatGPT Plus and Claude Pro separately if you use both regularly",
    "Clean, fast interface that works well on mobile -- the app is actually pleasant to use unlike some AI chat apps",
  ],
  cons: [
    "Message limits on premium models are tighter than subscribing to those models directly -- you get less GPT-4 usage than ChatGPT Plus",
    "You're always one step removed from the source -- new features hit ChatGPT and Claude before they reach Poe",
    "Custom bots are neat but limited -- you can't do anything close to what OpenAI's GPTs or Claude's Projects offer",
    "The free tier is very restrictive, you'll hit the daily limit within a few conversations",
  ],
  knownIssues: [
    {
      description: "Premium model quotas reset at inconsistent times, and usage tracking in the UI doesn't always match actual remaining messages",
      source: "Reddit r/Poe",
      date: "2026-03",
    },
    {
      description: "Some custom bots break when underlying models are updated, requiring manual system prompt adjustments",
      source: "Poe Community",
      date: "2026-02",
    },
  ],
  bestFor: "AI power users who want to try multiple models without managing separate subscriptions for each one.",
  notFor: "Anyone who primarily uses one model -- just subscribe to that model's native platform for better limits and features.",
  verdict: "Poe's value proposition is simple: pay one price, get access to all the major AI models. And for people who regularly switch between GPT-4 and Claude depending on the task, it actually makes financial sense. The interface is clean and the custom bot feature is a nice bonus. But you're always getting a slightly diminished version of each model -- fewer messages, delayed feature rollouts, and less integration depth. If you're a model-hopper who likes variety, Poe is great. If you have a favorite model, subscribe to it directly.",

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Poe official site", dateAccessed: "2026-03-27" },
    { name: "Reddit r/Poe", dateAccessed: "2026-03-27" },
    { name: "Poe Community", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://poe.com",
  status: "active",
  metaTitle: "Poe Review 2026: One Sub for GPT-4, Claude, Gemini -- Worth It?",
  metaDescription: "Poe review. Multi-model AI chatbot with GPT-4, Claude, Gemini access for $20/mo. But are the limits too tight? Honest scores, pricing. March 2026.",
};
