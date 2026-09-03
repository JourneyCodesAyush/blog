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
        slug: "intro",
        title: "Introducing myself",
        date: "September 2026",
        tags: ["ai", "blog"],
        readMin: 2,
        content: `
This is my first blog and first piece of text that I am going to put on the Internet as my "blog".

So tighten your seat belts and let's start the b-log....

Since this is my first blog, let me introduce myself...
I am a student studying computer engineering and I build tools nobody uses

I build tools nobody asked for, like \`mklicense\` which is a CLI tool to generate \`LICENSE\` file for your repo so you don't have to search around looking for the text and create it every single time.

If you are interested, you can visit it [here](https://github.com/journeycodesayush/mklicense)

I think this much of introduction should be sufficient, but if its not, let me know...
But how will I get your message?
because this is a static page with no features whatsoever

So let's come to a point where you can text me on LinkedIn, yeah the place where you see people your age over achieve things in life
and you are stalking their profile

Nah, I am not those over achievers, I do stuff that make me happy, so my slogan (for now) is "Do things that make you smile"

(Okay, I didn't come up with this line, got this line from my t-shirt)

I am sorry, I drifted from the topic
so the topic is 'Claude' and how 'amazing' it is

I am not a frontend guy who loves to make a nice website to show around
I just can't get my head around
But I can definitely judge how the frontend looks and how it feels

It's like, "I observe and I judge"

But, I just feel frontend is not my cup of milk (I rarely consume tea)

And I badly wanted to write about things I have been doing and building tools

So I did what an engineer should do, "Cutting corners"
Shamelessly prompted "Claude" of my requirements of a static blog page and it asked some questions regarding layout and generated this page that you are reading

Yes, this website is built by "Claude" and it made it responsive as well.

I had nowhere mentioned about responsiveness but claude made it

And the color selection is amazing nice too (though prompts where mine)

And btw, I am using Claude Sonnet 4.6 on Low mode and now I imagine how powerful Fable and Mythos might be that but boy do I have any subscriptions :(

But I think this should be enough for the first post

If you have anything to say, feel free to reach out on LinkedIn.
`.trim()
    }
]
