// ─── POSTS DATA ────────────────────────────────────────────────────────────────
// Add a new object here for every blog post. Each post is a commit.
//
// Fields:
//   slug    — URL-safe identifier, used in /article/<slug>
//   title   — post title
//   date    — "Month YYYY"
//   tags    — array of strings
//   readMin — estimated read time
//   content — markdown-ish content as a string (supports ## headings, ` code`, ```blocks```, blank lines = paragraphs)

export const posts = [
    {
        slug: "local-first-cli-syncer",
        title: "example blog",
        date: "June 2026",
        tags: ["experiment", "blog"],
        readMin: 1,
        content: `
This is a basic text block
`.trim(),
    },
]