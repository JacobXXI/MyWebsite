import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const calendarDownloads = [
  {
    language: 'English',
    fileName: 'NightRainCalendar-en.apk',
    href: `${baseUrl}downloads/NightRainCalendar-en.apk`,
  },
  {
    language: 'Simplified Chinese',
    fileName: 'NightRainCalendar-zhHans.apk',
    href: `${baseUrl}downloads/NightRainCalendar-zhHans.apk`,
  },
  {
    language: 'Traditional Chinese',
    fileName: 'NightRainCalendar-zhHant.apk',
    href: `${baseUrl}downloads/NightRainCalendar-zhHant.apk`,
  },
]

const calendarHighlights = [
  {
    title: 'Dual calendar view',
    description: 'See Chinese Lunar and Gregorian dates together in one monthly view.',
  },
  {
    title: 'Flexible event creation',
    description: 'Create events with either calendar system and keep both aligned.',
  },
  {
    title: 'Language-specific builds',
    description: 'Pick the APK that matches your preferred language from the list below.',
  },
]

const projects = [
  {
    title: 'JP Music Player',
    description:
      'A windows music listener which integrates different music sources like youtube.',
    image: `${baseUrl}projects/JPMusicPlayer.png`,
    tags: ['Music', 'Windows'],
    downloadHref: `${baseUrl}downloads/JPMusicPlayer_SetUp.exe`,
  },
  {
    title: 'Calendar',
    description:
      'A mobile calendar application that can show and create events using both Chinese Lunar and Gregorian dates.',
    image: `${baseUrl}projects/Calendar.svg`,
    tags: ['Organization', 'Android'],
    pageHref: `${baseUrl}#calendar`,
  },
  {
    title: 'Coming Soon',
    description:
      'New releases are in progress - fresh apps and services landing soon.',
    image: `${baseUrl}projects/coming-soon.svg`,
    tags: [],
  },
]

const calendarHash = '#calendar'

function CalendarPage() {
  return (
    <div className="page calendar-page">
      <header className="detail-hero">
        <div className="detail-hero-content">
          <a className="back-link" href={`${baseUrl}#`} aria-label="Back to home">
            &larr; Back to home
          </a>
          <p className="detail-eyebrow">Night Rain Calendar</p>
          <h1 className="detail-hero-title">Chinese Lunar + Gregorian calendar for Android</h1>
          <p className="detail-hero-lede">
            Plan your schedule with both date systems side by side. Create events in the
            calendar you prefer and keep everything aligned automatically.
          </p>
          <div className="detail-actions">
            <a className="primary-button" href="#calendar-downloads">
              Download APK
            </a>
          </div>
        </div>
        <div className="detail-hero-media" aria-hidden="true">
          <img src={`${baseUrl}projects/Calendar.svg`} alt="" />
        </div>
      </header>

      <main>
        <section className="section calendar-overview">
          <div className="section-header">
            <p className="section-eyebrow">Overview</p>
            <h2 className="section-title">Built for dual-date planning</h2>
            <p className="section-lede">
              Night Rain Calendar helps you move between Chinese Lunar and Gregorian dates
              without switching tools. It is designed for daily scheduling, cultural events,
              and long-term planning that needs both systems.
            </p>
          </div>

          <div className="highlight-grid">
            {calendarHighlights.map((highlight) => (
              <div className="highlight-card" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section calendar-downloads" id="calendar-downloads">
          <div className="section-header">
            <p className="section-eyebrow">Downloads</p>
            <h2 className="section-title">Choose your language</h2>
            <p className="section-lede">
              Download the Android APK that matches your preferred language.
            </p>
          </div>

          <div className="download-grid">
            {calendarDownloads.map((download) => (
              <a
                className="download-card"
                key={download.language}
                href={download.href}
                download
                aria-label={`Download ${download.language} APK`}
              >
                <div className="download-meta">
                  <span className="download-language">{download.language}</span>
                  <span className="download-filename">{download.fileName}</span>
                </div>
                <span className="download-action">Download APK</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Night Rain Studio</p>
      </footer>
    </div>
  )
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const isCalendarPage = hash.startsWith(calendarHash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (isCalendarPage) {
      window.scrollTo(0, 0)
    }
  }, [isCalendarPage])

  return (
    isCalendarPage ? (
      <CalendarPage />
    ) : (
      <div className="page">
        <header className="hero">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={`${baseUrl}background.mp4`} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Night Rain Studio</h1>
            <p className="hero-subtitle">Apps, Web Services</p>
          </div>
        </header>

        <main>
          <section className="section products" id="products">
            <div className="section-header">
              <p className="section-eyebrow">Featured Work</p>
              <h2 className="section-title">Product List</h2>
            </div>

            <div className="product-track" aria-label="Project list">
              {projects.map((project, index) => (
                project.downloadHref ? (
                  <a
                    className="project-card project-card-link"
                    key={project.title}
                    style={{ '--index': index } as CSSProperties}
                    href={project.downloadHref}
                    download
                  >
                    <div className="project-media">
                      <img src={project.image} alt={`${project.title} preview`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : project.pageHref ? (
                  <a
                    className="project-card project-card-link"
                    key={project.title}
                    style={{ '--index': index } as CSSProperties}
                    href={project.pageHref}
                  >
                    <div className="project-media">
                      <img src={project.image} alt={`${project.title} preview`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <article
                    className="project-card"
                    key={project.title}
                    style={{ '--index': index } as CSSProperties}
                  >
                    <div className="project-media">
                      <img src={project.image} alt={`${project.title} preview`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              ))}
            </div>
          </section>

          <section className="section about" id="about">
            <div className="section-header">
              <p className="section-eyebrow">Studio Notes</p>
              <h2 className="section-title">About Developer</h2>
              <p> - Student</p>
              <p> - Developer</p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <h3>Focus</h3>
                <p>
                  Clean UX, resilient systems, and algorithms solving real life problems.
                </p>
              </div>
              <div className="about-card">
                <h3>Stack</h3>
                <p>
                  React, C++, Python, and workflows for creative apps.
                </p>
              </div>
              <div className="about-card">
                <h3>Currently</h3>
                <p>
                  Building a website that lists all movies showing in Melbourne cinemas.
                </p>
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div className="section-header">
              <p className="section-eyebrow">Say Hello</p>
              <h2 className="section-title">Contact</h2>
              <p className="section-lede">
                Reach out for collaborations, new products, or a quick hello.
              </p>
            </div>

            <div className="contact-links">
              <a
                className="contact-card"
                href="https://github.com/jacobxxi"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub profile"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.72 0 0 .85-.28 2.78 1.06a9.4 9.4 0 0 1 5.06 0c1.93-1.34 2.78-1.06 2.78-1.06.55 1.42.2 2.46.1 2.72.64.73 1.03 1.65 1.03 2.78 0 3.98-2.35 4.86-4.59 5.11.36.32.69.94.69 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
                <span>JacobXXI</span>
              </a>

              <a className="contact-card" href="mailto:jacobphhj@gmail.com" aria-label="Send email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.2l8 5.07 8-5.07V6H4Zm16 12V8.53l-7.47 4.74a1 1 0 0 1-1.06 0L4 8.53V18h16Z"
                  />
                </svg>
                <span>jacobphhj@gmail.com</span>
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Night Rain Studio</p>
        </footer>
      </div>
    )
  )
}

export default App
