"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

const GITHUB_ISSUE_URL =
  "https://github.com/cmcmath84/aitooltier/issues/new";

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [pitch, setPitch] = useState("");
  const [submitter, setSubmitter] = useState("");
  const [openIn, setOpenIn] = useState<"github" | null>(null);

  function buildIssueUrl(): string {
    const title = `Tool submission: ${name.trim() || "(unnamed)"}`;
    const body = [
      "### Tool name",
      name.trim() || "(not provided)",
      "",
      "### Tool URL",
      url.trim() || "(not provided)",
      "",
      "### Category suggestion",
      category || "(not provided)",
      "",
      "### Short pitch",
      pitch.trim() || "(not provided)",
      "",
      "### Submitter",
      submitter.trim() || "(anonymous)",
      "",
      "---",
      "_Filed via https://aitooltier.com/submit_",
    ].join("\n");

    const params = new URLSearchParams({
      title,
      body,
      labels: "tool-submission",
    });
    return `${GITHUB_ISSUE_URL}?${params.toString()}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const issueUrl = buildIssueUrl();
    setOpenIn("github");
    window.open(issueUrl, "_blank", "noopener,noreferrer");
  }

  const valid = name.trim().length > 1 && url.trim().length > 4;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="tool-name"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Tool name <span className="text-red-600">*</span>
        </label>
        <input
          id="tool-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Cursor, Claude, Runway Gen-4"
          required
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="tool-url"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Tool URL <span className="text-red-600">*</span>
        </label>
        <input
          id="tool-url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://"
          required
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="tool-category"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Suggested category
        </label>
        <select
          id="tool-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
        >
          <option value="">-- pick one (optional) --</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
          <option value="__other__">Other / new category</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="tool-pitch"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Short pitch
        </label>
        <textarea
          id="tool-pitch"
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
          rows={5}
          placeholder="What does this tool actually do? What makes it interesting enough to review? Any notable launch, feature, or benchmark? Link to press or vendor docs if you have them."
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="tool-submitter"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Your name / X / email (optional)
        </label>
        <input
          id="tool-submitter"
          type="text"
          value={submitter}
          onChange={(e) => setSubmitter(e.target.value)}
          placeholder="So we can credit you or follow up if needed"
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!valid}
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-bold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Open GitHub issue
        </button>
        <p className="text-xs text-muted-foreground">
          Opens in a new tab. Review the pre-filled issue, then click
          &ldquo;Submit new issue&rdquo; on GitHub.
        </p>
      </div>

      {openIn === "github" && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
          A new tab opened with your pre-filled submission. If it
          didn&apos;t,{" "}
          <a
            href={buildIssueUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            click here to open it manually
          </a>
          .
        </div>
      )}
    </form>
  );
}
