# JourneyCodesAyush — blog

Personal blog. No backend. Posts live in `src/data.js` as a plain JS array.

## Setup

```bash
npm install
npm run dev
```

## Adding a post

Every post is a commit. Open `src/data.js` and add an object to the `posts` array at the top:

```js
{
  slug: "your-post-slug",       // used in /article/<slug>
  title: "Your post title",
  date: "July 2025",
  tags: ["cli", "tools"],       // any strings you want
  readMin: 5,                   // estimated read time
  content: `
Your content here.

## A heading

Paragraphs are separated by blank lines. Inline \`code\` works.

\`\`\`
code blocks work too
\`\`\`
  `.trim(),
},
```

Paste it at the top of the array so it shows as latest. Done. Commit.

## Content format

Content is standard Markdown rendered via `marked`.

## License

[MIT License](./LICENSE)
