import { contacts } from './data/contacts';
import {
  aboutParagraphs,
  documentCards,
  formats,
  heroFacts,
  images,
  navItems,
  paymentRules,
  preparationSteps,
  requestCards,
  specialist,
  testimonialSources,
  testimonials,
  trustCards,
} from './data/siteContent';
import { assetUrl } from './utils/assetUrl';
import { ExternalLink } from './components/ExternalLink';
import { Brand } from './components/Brand';
import { SectionHeading } from './components/SectionHeading';
import { TitleTextCard } from './components/TitleTextCard';

type ImageKey = keyof typeof images;

function ContactButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'contact-actions contact-actions--compact' : 'contact-actions'}>
      <ExternalLink className="button button--primary" href={contacts.telegram.href}>
        {compact ? contacts.telegram.compactLabel : contacts.telegram.ctaLabel}
      </ExternalLink>
      {!compact && contacts.telegram.showHint ? <p className="telegram-flow-note">{contacts.telegram.hint}</p> : null}
      <a className="button" href={contacts.max.href}>
        Написать в MAX
      </a>
      <ExternalLink className="button button--ghost" href={contacts.vk.href}>
        VK
      </ExternalLink>
      <p className="contact-phone">
        Единый номер связи: <a href={contacts.max.href}>{contacts.max.phoneLabel}</a>
      </p>
    </div>
  );
}

function FramedImage({ image, className = '' }: { image: ImageKey; className?: string }) {
  const current = images[image];

  if (!current) {
    console.error(`FramedImage: unknown image key "${image}"`);
    return null;
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    console.error(`Failed to load image: ${target.src}`);
    target.style.display = 'none';
  };

  return (
    <figure className={`image-frame ${className}`.trim()}>
      <img
        src={assetUrl(current.src)}
        alt={current.alt}
        loading={image === 'hero' ? 'eager' : 'lazy'}
        onError={handleError}
      />
    </figure>
  );
}

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <Brand ariaLabel={specialist.shortName} />
        <nav className="main-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ExternalLink className="header-cta" href={contacts.telegram.href}>
          {contacts.telegram.compactLabel}
        </ExternalLink>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Комплексная медицинская и психологическая помощь</p>
            <h1 id="hero-title">{specialist.fullName}</h1>
            <p className="hero-role">{specialist.role}</p>
            <p className="hero-lead">
              Бережная комплексная помощь на стыке доказательной медицины, психологии и психотерапевтических подходов. Стаж —{' '}
              <strong className="experience-years">11 лет</strong>. Индивидуальный маршрут и конфиденциальное пространство для восстановления внутренней опоры.
            </p>
            <div className="hero-actions">
              <ExternalLink className="button button--primary" href={contacts.telegram.href}>
                {contacts.telegram.ctaLabel}
              </ExternalLink>
              <a className="button button--ghost" href="#requests">
                Узнать, с чем можно обратиться
              </a>
            </div>
            <ul className="fact-list" aria-label="Ключевые факты">
              {heroFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="hero-visual">
            <FramedImage image="hero" />
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <SectionHeading
              eyebrow="Обо мне"
              title="Когда земля уходит из-под ног, важно не просто выстоять. Важно найти себя настоящего."
            />
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <FramedImage image="about" className="image-frame--soft" />
        </section>

        <section className="section" id="requests">
          <SectionHeading
            eyebrow="Направления работы"
            title="С какими запросами я работаю"
          />
          <div className="request-grid">
            {requestCards.map((card, index) => (
              <article className="content-card content-card--large" key={card.title}>
                <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <ul className="request-points">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-section">
          <SectionHeading eyebrow="Профессиональный подход" title="Почему выбирают меня?" />
          <div className="trust-grid">
            {trustCards.map((item) => (
              <TitleTextCard className="content-card" title={item.title} text={item.text} key={item.title} />
            ))}
          </div>
        </section>

        <section className="section documents-section" id="documents">
          <SectionHeading
            eyebrow="Документы"
            title="Образование и профессиональная подготовка"
            text="Ключевые дипломы и сертификаты, подтверждающие медицинское образование, подготовку в терапии, психологии и дополнительных профессиональных направлениях."
          />
          <p className="document-note">В публичных превью скрыты только серийные и регистрационные номера документов.</p>
          <div className="document-grid">
            {documentCards.map((item) => (
              <article className="document-card" key={item.title}>
                <ExternalLink className="document-card__image" href={assetUrl(item.image)}>
                  <img src={assetUrl(item.image)} alt={item.alt} loading="lazy" />
                </ExternalLink>
                <div className="document-card__copy">
                  <span className="eyebrow">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section formats-section" id="formats">
          <div>
            <SectionHeading eyebrow="Форматы работы" title="Формат подбирается после первого контакта" />
            <div className="format-list">
              {formats.map((item) => (
                <TitleTextCard title={item.title} text={item.text} key={item.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section video-section" aria-labelledby="video-title">
          <div className="video-placeholder">
            <span className="play-icon" aria-hidden="true" />
            <div>
              <p className="eyebrow">Видеоотзыв</p>
              <h2 id="video-title">Видеоотзыв пациента</h2>
              <p>Скоро здесь появится короткий видеоотзыв о результате работы. Сейчас блок подготовлен для будущей публикации.</p>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <SectionHeading
            eyebrow="Отзывы"
            title="Отзывы пациентов"
            text="Короткие выжимки из публичных источников без персональных данных и чувствительных медицинских подробностей."
          />
          <div className="review-grid" aria-label="Отзывы пациентов">
            {testimonials.map((item) => (
              <article className="review-card" key={item.text}>
                <span className="eyebrow">{item.source}</span>
                <p>{item.text}</p>
                <ExternalLink href={item.href}>
                  Источник
                </ExternalLink>
              </article>
            ))}
          </div>
          <div className="source-links" aria-label="Ссылки на источники отзывов">
            {testimonialSources.map((source) => (
              <ExternalLink className="button button--ghost" href={source.href} key={source.href}>
                {source.label}
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="section safety-section">
          <SectionHeading eyebrow="Конфиденциальность" title="Конфиденциальность и безопасное пространство" />
          <p className="large-copy">
            Работа проходит в атмосфере принятия, без осуждения и с соблюдением врачебной тайны и профессиональной этики. Обсуждаемые темы, личные обстоятельства и сам факт обращения рассматриваются как конфиденциальная информация в рамках действующих правил и закона.
          </p>
        </section>

        <section className="section steps-section">
          <SectionHeading eyebrow="Первая встреча" title="Как подготовиться" />
          <ol className="steps-list">
            {preparationSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="section policy-section">
          <SectionHeading eyebrow="Организационные правила" title="Запись, перенос и отмена" />
          <ul className="policy-list">
            {paymentRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className="final-cta" id="contacts">
          <p className="eyebrow">Первый шаг</p>
          <h2>Сделайте первый шаг к решению проблемы уже сегодня</h2>
          <p>
            Это может быть короткое сообщение. Не нужно заранее идеально формулировать запрос - достаточно написать, что вы хотите записаться на первичную консультацию.
          </p>
          <p>Выберите удобный способ связи: Telegram, MAX или VK.</p>
          <ContactButtons />
          <div className="message-hint">
            <span className="eyebrow">Подсказка первого сообщения</span>
            <p>{contacts.firstMessage}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Brand />
          <p>{specialist.role}</p>
        </div>
        <ContactButtons compact />
      </footer>

      <ExternalLink className="mobile-sticky-cta" href={contacts.telegram.href}>
        {contacts.telegram.ctaLabel}
      </ExternalLink>
    </div>
  );
}

export { FramedImage };
export default App;
