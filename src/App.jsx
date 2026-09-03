import { useState, useEffect } from "react";
import { marked } from 'marked'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import { posts } from "./data.js";

// ─── THEME ─────────────────────────────────────────────────────────────────────
function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true; // dark default
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}

// ─── HEADER ────────────────────────────────────────────────────────────────────
function Header({ dark, toggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-identity">
          <span className="site-handle">JourneyCodesAyush</span>
          <span className="site-tagline">
            builds things nobody asked for, mostly to avoid studying
          </span>
        </Link>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

// ─── HOME ──────────────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate();
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [latest, ...rest] = sorted;

  return (
    <main className="main-content">
      {/* Latest post */}
      <section
        className="latest-post"
        onClick={() => navigate(`/article/${latest.slug}`)}
      >
        <div className="latest-eyebrow">latest post</div>
        <h1 className="latest-title">{latest.title}</h1>
        <div className="latest-meta">
          <span>{latest.date}</span>
          <span className="meta-dot">·</span>
          <span>{latest.readMin} min read</span>
          {latest.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* All posts */}
      <section className="post-list">
        {rest.map((post) => (
          <article
            key={post.slug}
            className="post-row"
            onClick={() => navigate(`/article/${post.slug}`)}
          >
            <div className="post-row-main">
              <h2 className="post-row-title">{post.title}</h2>
              <div className="post-row-meta">
                <span>{post.date}</span>
                <span className="meta-dot">·</span>
                <span>{post.readMin} min</span>
                {post.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <svg
              className="post-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </article>
        ))}
      </section>
    </main>
  );
}

// ─── ARTICLE ───────────────────────────────────────────────────────────────────
function Article() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="main-content">
        <p className="not-found">post not found.</p>
        <Link to="/" className="back-link">
          ← back
        </Link>
      </main>
    );
  }

  return (
    <main className="main-content article-content">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← back
      </button>
      <header className="article-header">
        <h1 className="article-title">{post.title}</h1>
        <div className="article-meta">
          <span>{post.date}</span>
          <span className="meta-dot">·</span>
          <span>{post.readMin} min read</span>
          {post.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </header>
      <div className="article-body"
      dangerouslySetInnerHTML={{__html:marked(post.content)}}/>
    </main>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, toggleTheme] = useTheme();

  return (
    <BrowserRouter>
      <div className="app">
        <Header dark={dark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
        <footer className="site-footer">
          <span>JourneyCodesAyush · {new Date().getFullYear()}</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
