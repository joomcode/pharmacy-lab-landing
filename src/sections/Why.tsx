import {SectionTitle} from '../components/SectionTitle';

const texts = [
  {
    text: 'Wir übernehmen den gesamten Aufwand rund um die Integration Ihrer Apotheke zu unserem  Service',
  },
  {
    text: 'Wir wissen, wie wir neue Kunden für Sie gewinnen und zu Ihren Stammkunden machen',
  },
  {
    text:
      'Wir helfen dabei, Ihre Kommunikation mit Kunden zu entwickeln, damit der Kundenservice zu einer Kundenbindung führt',
  },
  {
    text: 'Wir bieten neue Möglichkeiten für lokale Apotheken',
  },
];

export const Why = () => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <SectionTitle color='#fff'>
          Warum Joom Pharm <br /> Solutions?
        </SectionTitle>
        <div className='grid'>
          {texts.map(({text}, i) => (
            <div key={text} className='item'>
              <span className='item-number'>{i + 1}.</span>
              <p className='item-text'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        background: #1d3347;
      }
      .wrapper {
        position: relative;
        max-width: 1440px;
        margin: auto;
        padding: 90px var(--padding) 60px;

        @media (min-width: 768px) {
          padding-bottom: 130px;
        }
      }
      .grid {
        margin-top: 40px;

        @media (min-width: 768px) {
          display: grid;
          margin-top: 100px;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 40px;
        }
      }
      .item {
        padding-bottom: 40px;
        border-bottom: 3px solid #5bb75f;

        @media (min-width: 768px) {
          padding-bottom: 50px;
        }
      }
      .item-number {
        display: block;
        margin-top: 20px;
        line-height: 70px;
        font-size: 30px;
        font-weight: 500;
        color: #5bb75f;

        @media (min-width: 768px) {
          margin: 0;
          font-size: 50px;
        }
      }
      .item-text {
        line-height: 24px;
        font-size: 16px;
        color: #f9f9f9;
        opacity: 0.8;

        @media (min-width: 768px) {
          font-size: 20px;
        }
      }
    `}</style>
  </>
);
