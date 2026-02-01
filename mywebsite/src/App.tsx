import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL
const calendarHash = '#calendar'
const asset = (path: string) => `${baseUrl}${path}`

const translations = {
  en: {
    languageLabel: 'English',
    languageSwitcherLabel: 'Language',
    metaTitle: 'Night Rain Studio',
    hero: {
      title: 'Night Rain Studio',
      subtitle: 'Apps, Web Services',
    },
    featuredWork: {
      eyebrow: 'Featured Work',
      title: 'Product List',
      ariaLabel: 'Project list',
    },
    projects: [
      {
        title: 'Calendar',
        description:
          'A mobile calendar application that can show and create events using both Chinese Lunar and Gregorian dates.',
        image: asset('projects/Calendar.svg'),
        tags: ['Organization', 'Android'],
        pageHash: calendarHash,
      },
      {
        title: 'JP Music Player',
        description:
          'My first project. A simple windows music listener which integrates different music sources like youtube.',
        image: asset('projects/JPMusicPlayer.png'),
        tags: ['Music', 'Windows'],
        downloadPath: 'downloads/JPMusicPlayer_SetUp.exe',
      },
      {
        title: 'Coming Soon',
        description: 'New releases are in progress - fresh apps and services landing soon.',
        image: asset('projects/coming-soon.svg'),
        tags: [],
      },
    ],
    about: {
      eyebrow: 'Studio Notes',
      title: 'About Developer',
      bullets: ['Student', 'Developer'],
      cards: [
        {
          title: 'Focus',
          description: 'Clean UX, resilient systems, and algorithms solving real life problems.',
        },
        {
          title: 'Stack',
          description: 'React, C++, Python, and workflows for creative apps.',
        },
        {
          title: 'Currently',
          description: 'Building a website that lists all movies showing in Melbourne cinemas.',
        },
      ],
    },
    contact: {
      eyebrow: 'Say Hello',
      title: 'Contact',
      lede: 'Reach out for collaborations, new products, or a quick hello.',
      githubAriaLabel: 'Visit GitHub profile',
      emailAriaLabel: 'Send email',
    },
    footer: '© 2026 Night Rain Studio',
    calendar: {
      backLink: 'Back to home',
      backLinkAriaLabel: 'Back to home',
      eyebrow: 'Night Rain Calendar',
      title: 'Chinese Lunar + Gregorian calendar for Android',
      lede:
        'Plan your schedule with both date systems side by side. Create events in the calendar you prefer and keep everything aligned automatically.',
      primaryAction: 'Download APK',
      overview: {
        eyebrow: 'Overview',
        title: 'Built for dual-date planning',
        lede:
          'Night Rain Calendar helps you move between Chinese Lunar and Gregorian dates without switching tools. It is designed for daily scheduling, cultural events, and long-term planning that needs both systems.',
      },
      highlights: [
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
      ],
      downloads: {
        eyebrow: 'Downloads',
        title: 'Choose your language',
        lede: 'Download the Android APK that matches your preferred language.',
        actionLabel: 'Download APK',
      },
      downloadItems: [
        {
          language: 'English',
          fileName: 'NightRainCalendar-en.apk',
          filePath: 'downloads/NightRainCalendar-en.apk',
        },
        {
          language: 'Simplified Chinese',
          fileName: 'NightRainCalendar-zhHans.apk',
          filePath: 'downloads/NightRainCalendar-zhHans.apk',
        },
        {
          language: 'Traditional Chinese',
          fileName: 'NightRainCalendar-zhHant.apk',
          filePath: 'downloads/NightRainCalendar-zhHant.apk',
        },
      ],
      downloadAriaLabel: (language: string) => `Download ${language} APK`,
    },
  },
  'zh-Hans': {
    languageLabel: '简体中文',
    languageSwitcherLabel: '语言',
    metaTitle: '夜雨工作室 | Night Rain Studio',
    hero: {
      title: 'Night Rain Studio',
      subtitle: '应用、网页服务',
    },
    featuredWork: {
      eyebrow: '精选作品',
      title: '产品列表',
      ariaLabel: '项目列表',
    },
    projects: [
      {
        title: '日历',
        description: '一款移动日历应用，可同时显示并创建农历与公历事件。',
        image: asset('projects/Calendar.svg'),
        tags: ['管理', 'Android'],
        pageHash: calendarHash,
      },
      {
        title: 'JP Music Player',
        description: '我的第一个项目。一个简洁的 Windows 音乐播放器，整合了如 YouTube 等不同音乐来源。',
        image: asset('projects/JPMusicPlayer.png'),
        tags: ['音乐', 'Windows'],
        downloadPath: 'downloads/JPMusicPlayer_SetUp.exe',
      },
      {
        title: '即将上线',
        description: '新作品正在准备中',
        image: asset('projects/coming-soon.svg'),
        tags: [],
      },
    ],
    about: {
      eyebrow: '工作室札记',
      title: '关于开发者',
      bullets: ['学生', '开发者'],
      cards: [
        {
          title: '专注',
          description: '干净简洁的用户体验、稳定高效的系统和算法。',
        },
        {
          title: '技术栈',
          description: 'React、C++、Python，以及创意应用工作流。',
        },
        {
          title: '近况',
          description: '正在构建一个列出墨尔本影院所有上映影片的网站。',
        },
      ],
    },
    contact: {
      eyebrow: '打个招呼',
      title: '联系',
      lede: '欢迎洽谈合作、新产品或简单问候。',
      githubAriaLabel: '访问 GitHub 主页',
      emailAriaLabel: '发送邮件',
    },
    footer: '© 2026 Night Rain Studio',
    calendar: {
      backLink: '返回首页',
      backLinkAriaLabel: '返回首页',
      eyebrow: '夜雨日历',
      title: '适用 Android 系统的农历 + 公历日历',
      lede: '并排使用两种历法规划日程。使用你偏好的历法创建事件，自动保持同步。',
      primaryAction: '下载 APK',
      overview: {
        eyebrow: '概览',
        title: '为双历规划而生',
        lede:
          '夜雨日历让你在农历与公历之间自由切换，无需更换工具。为日常安排、传统节日与需要双历的长期规划而设计。',
      },
      highlights: [
        {
          title: '双历同屏',
          description: '在同一月视图中同时查看农历与公历日期。',
        },
        {
          title: '灵活的事件创建',
          description: '可用任一历法创建事件，并保持两者同步。',
        },
        {
          title: '按语言提供安装包',
          description: '从下方列表选择符合你语言偏好的 APK。',
        },
      ],
      downloads: {
        eyebrow: '下载',
        title: '选择语言',
        lede: '下载与你偏好语言对应的 Android APK。',
        actionLabel: '下载 APK',
      },
      downloadItems: [
        {
          language: '英文',
          fileName: 'NightRainCalendar-en.apk',
          filePath: 'downloads/NightRainCalendar-en.apk',
        },
        {
          language: '简体中文',
          fileName: 'NightRainCalendar-zhHans.apk',
          filePath: 'downloads/NightRainCalendar-zhHans.apk',
        },
        {
          language: '繁体中文',
          fileName: 'NightRainCalendar-zhHant.apk',
          filePath: 'downloads/NightRainCalendar-zhHant.apk',
        },
      ],
      downloadAriaLabel: (language: string) => `下载 ${language} APK`,
    },
  },
  'zh-Hant': {
    languageLabel: '繁體中文',
    languageSwitcherLabel: '語言',
    metaTitle: '夜雨工作室 | Night Rain Studio',
    hero: {
      title: 'Night Rain Studio',
      subtitle: '應用、網頁服務',
    },
    featuredWork: {
      eyebrow: '精選作品',
      title: '產品列表',
      ariaLabel: '專案列表',
    },
    projects: [
      {
        title: '日曆',
        description: '一款行動日曆應用，可同時顯示並建立農曆與公曆事件。',
        image: asset('projects/Calendar.svg'),
        tags: ['管理', 'Android'],
        pageHash: calendarHash,
      },
      {
        title: 'JP Music Player',
        description: '我的第一個專案。一個簡潔的 Windows 音樂播放器，整合了如 YouTube 等不同音樂來源。',
        image: asset('projects/JPMusicPlayer.png'),
        tags: ['音樂', 'Windows'],
        downloadPath: 'downloads/JPMusicPlayer_SetUp.exe',
      },
      {
        title: '即將上線',
        description: '新作品正在準備中——全新的應用和服務即將推出。',
        image: asset('projects/coming-soon.svg'),
        tags: [],
      },
    ],
    about: {
      eyebrow: '工作室札記',
      title: '關於開發者',
      bullets: ['學生', '開發者'],
      cards: [
        {
          title: '專注',
          description: '乾淨的使用者體驗、穩健的系統，以及解決真實問題的演算法。',
        },
        {
          title: '技術棧',
          description: 'React、C++、Python，以及面向創意應用的工作流程。',
        },
        {
          title: '近況',
          description: '正在打造一個列出墨爾本影院所有上映影片的網站。',
        },
      ],
    },
    contact: {
      eyebrow: '打個招呼',
      title: '聯絡',
      lede: '歡迎洽談合作、新產品或簡單問候。',
      githubAriaLabel: '前往 GitHub 個人頁',
      emailAriaLabel: '發送郵件',
    },
    footer: '© 2026 Night Rain Studio',
    calendar: {
      backLink: '返回首頁',
      backLinkAriaLabel: '返回首頁',
      eyebrow: '夜雨日曆',
      title: '面向 Android 的農曆 + 公曆日曆',
      lede: '並排使用兩種曆法規劃行程。使用你偏好的曆法建立事件，自動保持同步。',
      primaryAction: '下載 APK',
      overview: {
        eyebrow: '概覽',
        title: '為雙曆規劃而生',
        lede:
          '夜雨日曆讓你在農曆與公曆之間自由切換，無需更換工具。為日常安排、傳統節日與需要雙曆的長期規劃而設計。',
      },
      highlights: [
        {
          title: '雙曆同屏',
          description: '在同一月視圖中同時查看農曆與公曆日期。',
        },
        {
          title: '靈活的事件建立',
          description: '可用任一曆法建立事件，並保持兩者同步。',
        },
        {
          title: '按語言提供安裝包',
          description: '從下方清單選擇符合你語言偏好的 APK。',
        },
      ],
      downloads: {
        eyebrow: '下載',
        title: '選擇語言',
        lede: '下載與你偏好語言對應的 Android APK。',
        actionLabel: '下載 APK',
      },
      downloadItems: [
        {
          language: '英文',
          fileName: 'NightRainCalendar-en.apk',
          filePath: 'downloads/NightRainCalendar-en.apk',
        },
        {
          language: '簡體中文',
          fileName: 'NightRainCalendar-zhHans.apk',
          filePath: 'downloads/NightRainCalendar-zhHans.apk',
        },
        {
          language: '繁體中文',
          fileName: 'NightRainCalendar-zhHant.apk',
          filePath: 'downloads/NightRainCalendar-zhHant.apk',
        },
      ],
      downloadAriaLabel: (language: string) => `下載 ${language} APK`,
    },
  },
} as const

type LanguageKey = keyof typeof translations
type Translation = (typeof translations)[LanguageKey]

type Project = Readonly<{
  title: string
  description: string
  image: string
  tags: readonly string[]
  pageHash?: string
  downloadPath?: string
}>

type LanguageOption = {
  key: LanguageKey
  label: string
}

const languageOptions: LanguageOption[] = [
  { key: 'en', label: translations.en.languageLabel },
  { key: 'zh-Hans', label: translations['zh-Hans'].languageLabel },
  { key: 'zh-Hant', label: translations['zh-Hant'].languageLabel },
]

const getLanguageFromSearch = (search: string): LanguageKey => {
  const params = new URLSearchParams(search)
  const lang = params.get('lang')
  if (lang === 'en' || lang === 'zh-Hans' || lang === 'zh-Hant') {
    return lang
  }
  return 'en'
}

const buildLanguageHref = (lang: LanguageKey, hash: string) => `?lang=${lang}${hash}`

type LanguageSwitcherProps = {
  currentLanguage: LanguageKey
  hash: string
  ariaLabel: string
}

function LanguageSwitcher({ currentLanguage, hash, ariaLabel }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" role="navigation" aria-label={ariaLabel}>
      {languageOptions.map((option) => (
        <a
          key={option.key}
          className={`language-link${option.key === currentLanguage ? ' is-active' : ''}`}
          href={buildLanguageHref(option.key, hash)}
          aria-current={option.key === currentLanguage ? 'page' : undefined}
        >
          {option.label}
        </a>
      ))}
    </div>
  )
}

type CalendarPageProps = {
  copy: Translation['calendar']
  footer: string
  hash: string
  language: LanguageKey
  languageSwitcherLabel: string
  withLanguageHash: (hash?: string) => string
}

function CalendarPage({
  copy,
  footer,
  hash,
  language,
  languageSwitcherLabel,
  withLanguageHash,
}: CalendarPageProps) {
  return (
    <div className="page calendar-page">
      <header className="detail-hero">
        <div className="detail-toolbar">
          <LanguageSwitcher currentLanguage={language} hash={hash} ariaLabel={languageSwitcherLabel} />
        </div>
        <div className="detail-hero-content">
          <a className="back-link" href={withLanguageHash('')} aria-label={copy.backLinkAriaLabel}>
            &larr; {copy.backLink}
          </a>
          <p className="detail-eyebrow">{copy.eyebrow}</p>
          <h1 className="detail-hero-title">{copy.title}</h1>
          <p className="detail-hero-lede">{copy.lede}</p>
          <div className="detail-actions">
            <a className="primary-button" href="#calendar-downloads">
              {copy.primaryAction}
            </a>
          </div>
        </div>
        <div className="detail-hero-media" aria-hidden="true">
          <img src={asset('projects/Calendar.svg')} alt="" />
        </div>
      </header>

      <main>
        <section className="section calendar-overview">
          <div className="section-header">
            <p className="section-eyebrow">{copy.overview.eyebrow}</p>
            <h2 className="section-title">{copy.overview.title}</h2>
            <p className="section-lede">{copy.overview.lede}</p>
          </div>

          <div className="highlight-grid">
            {copy.highlights.map((highlight) => (
              <div className="highlight-card" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section calendar-downloads" id="calendar-downloads">
          <div className="section-header">
            <p className="section-eyebrow">{copy.downloads.eyebrow}</p>
            <h2 className="section-title">{copy.downloads.title}</h2>
            <p className="section-lede">{copy.downloads.lede}</p>
          </div>

          <div className="download-grid">
            {copy.downloadItems.map((download) => (
              <a
                className="download-card"
                key={download.language}
                href={asset(download.filePath)}
                download
                aria-label={copy.downloadAriaLabel(download.language)}
              >
                <div className="download-meta">
                  <span className="download-language">{download.language}</span>
                  <span className="download-filename">{download.fileName}</span>
                </div>
                <span className="download-action">{copy.downloads.actionLabel}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{footer}</p>
      </footer>
    </div>
  )
}

const projectHasDownload = (project: Project): project is Project & { downloadPath: string } =>
  typeof project.downloadPath === 'string'
const projectHasPage = (project: Project): project is Project & { pageHash: string } =>
  typeof project.pageHash === 'string'

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const language = getLanguageFromSearch(window.location.search)
  const copy = translations[language]
  const isCalendarPage = hash.startsWith(calendarHash)
  const languageQuery = `?lang=${language}`
  const withLanguageHash = (targetHash = '') => `${languageQuery}${targetHash}`

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

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.metaTitle
  }, [language, copy.metaTitle])

  return (
    isCalendarPage ? (
      <CalendarPage
        copy={copy.calendar}
        footer={copy.footer}
        hash={hash}
        language={language}
        languageSwitcherLabel={copy.languageSwitcherLabel}
        withLanguageHash={withLanguageHash}
      />
    ) : (
      <div className="page">
        <header className="hero">
          <div className="hero-toolbar">
            <LanguageSwitcher
              currentLanguage={language}
              hash={hash}
              ariaLabel={copy.languageSwitcherLabel}
            />
          </div>
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
            <h1 className="hero-title">{copy.hero.title}</h1>
            <p className="hero-subtitle">{copy.hero.subtitle}</p>
          </div>
        </header>

        <main>
          <section className="section products" id="products">
            <div className="section-header">
              <p className="section-eyebrow">{copy.featuredWork.eyebrow}</p>
              <h2 className="section-title">{copy.featuredWork.title}</h2>
            </div>

            <div className="product-track" aria-label={copy.featuredWork.ariaLabel}>
              {copy.projects.map((project, index) => {
                const pageHref = projectHasPage(project) ? withLanguageHash(project.pageHash) : undefined
                const downloadHref = projectHasDownload(project) ? asset(project.downloadPath) : undefined

                return projectHasDownload(project) ? (
                  <a
                    className="project-card project-card-link"
                    key={project.title}
                    style={{ '--index': index } as CSSProperties}
                    href={downloadHref}
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
                ) : projectHasPage(project) ? (
                  <a
                    className="project-card project-card-link"
                    key={project.title}
                    style={{ '--index': index } as CSSProperties}
                    href={pageHref}
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
              })}
            </div>
          </section>

          <section className="section about" id="about">
            <div className="section-header">
              <p className="section-eyebrow">{copy.about.eyebrow}</p>
              <h2 className="section-title">{copy.about.title}</h2>
              {copy.about.bullets.map((bullet) => (
                <p key={bullet}>- {bullet}</p>
              ))}
            </div>

            <div className="about-grid">
              {copy.about.cards.map((card) => (
                <div className="about-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section contact" id="contact">
            <div className="section-header">
              <p className="section-eyebrow">{copy.contact.eyebrow}</p>
              <h2 className="section-title">{copy.contact.title}</h2>
              <p className="section-lede">{copy.contact.lede}</p>
            </div>

            <div className="contact-links">
              <a
                className="contact-card"
                href="https://github.com/jacobxxi"
                target="_blank"
                rel="noreferrer"
                aria-label={copy.contact.githubAriaLabel}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.72 0 0 .85-.28 2.78 1.06a9.4 9.4 0 0 1 5.06 0c1.93-1.34 2.78-1.06 2.78-1.06.55 1.42.2 2.46.1 2.72.64.73 1.03 1.65 1.03 2.78 0 3.98-2.35 4.86-4.59 5.11.36.32.69.94.69 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
                <span>JacobXXI</span>
              </a>

              <a
                className="contact-card"
                href="mailto:jacobphhj@gmail.com"
                aria-label={copy.contact.emailAriaLabel}
              >
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
          <p>{copy.footer}</p>
        </footer>
      </div>
    )
  )
}

export default App
