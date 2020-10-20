import {SectionTitle} from '../components/SectionTitle';
import {Dialog} from '../components/Dialog';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useState} from 'react';
import {Icon} from '../components/Icon';

const dialogs = [
  {
    question: 'Ich möchte den lokalen Einzelhandel und nicht die globalen Online-Giganten unterstützen',
    response:
      'Viele Leute wollen den Einzelhandel in ihrer eigenen Stadt unterstützen, und wir möchten dazu beitragen, dass das noch bequemer möglich ist.',
  },
  {
    question: 'Existierende Online-Apotheken sind nicht benutzerfreundlich und praktisch',
    response:
      'Oft kaufen Kunden Medikamente in großen Online-Versandapotheken, weil Arzneimittel auf den Webseiten der lokalen Apotheken nicht bequem bestellt werden können. Wir haben die meisten Schwierigkeiten der Kunden dabei berücksichtigt und unsere Schnittstelle benutzerfreundlich und einfach gestaltet.',
  },
  {
    question: 'Wie finde ich in der Nähe eine Apotheke mit dem günstigsten Angebot für OTC-Arzneimittel?',
    response:
      'Wir schaffen einen gemeinschaftlichen Raum, wo der Kunde ein günstiges Angebot von den Apotheken in seiner Nähe leicht finden und auswählen kann.',
  },
  {
    question: 'Ich will Produkte bei den bewährten deutschen Apotheken kaufen',
    response:
      'Jeder zweite Befragte betont, dass er kein Vertrauen zu großen ausländischen Arzneimittelverkäufern hat, aber zugleich auch keinen lokalen Service mit gutem Ruf und großem Sortiment kennt. Wir wollen deutsche lokale Apotheken verbinden, um dieses Problem zu beheben.',
  },
];

export const Talk = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <SectionTitle dotColor='#fff' color='#fff'>
              Wir hören Ihren <br /> Kunden zu
            </SectionTitle>
          </div>
          <div className='chat-gallery'>
            <div className='dialogs'>
              {dialogs.map(({question, response}, i) => (
                <div
                  key={i}
                  className={'dialog-wrapper' + (i === currentIndex ? ' active' : ' inactive')}
                  style={{
                    transform: `translate(${i * -100}%, 0)`,
                  }}
                >
                  <Dialog question={question} isActive={i === currentIndex} response={response} />
                </div>
              ))}
            </div>
            <div className='controls'>
              <button
                type='button'
                className='controls-button'
                title='Previous'
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                <Icon name='chevron-left' width={48} height={48} />
              </button>
              <button
                type='button'
                className='controls-button'
                title='Next'
                disabled={currentIndex === dialogs.length - 1}
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                <Icon name='chevron-right' width={48} height={48} />
              </button>
            </div>
            <div className='slider-wrapper'>
              <HorizontalSlider count={dialogs.length} activeIndex={currentIndex} onClick={setCurrentIndex} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: #5bb75f;
        }
        .wrapper {
          position: relative;
          max-width: 1440px;
          padding: 60px 0 0;
          margin: auto;

          @media (min-width: 768px) {
            padding: 86px var(--padding) 80px;
          }
        }
        .title-wrapper {
          padding: 0 var(--padding);

          @media (min-width: 768px) {
            padding: 0;
          }
        }
        .chat-gallery {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0;

          @media (min-width: 768px) {
            margin: 80px 0 0;
          }
        }
        .controls {
          display: none;

          @media (min-width: 768px) {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-between;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            pointer-events: none;

            & > :global(*) {
              pointer-events: initial;
            }
          }
        }
        .controls-button {
          padding: 0;
          border: none;
          background: none;
          opacity: 0.5;

          &:hover {
            opacity: 1;
          }
        }
        .dialogs {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0 0 110px;
          overflow: hidden;

          @media (min-width: 768px) {
            padding: 40px 0 120px;
            margin-bottom: -20px;
          }
        }
        .dialog-wrapper {
          width: 100%;
          flex-shrink: 0;

          &.active {
            z-index: 1;
          }

          &.inactive {
            pointer-events: none;
            user-select: none;

            animation: hidding 0.4s forwards;
          }
        }
        .slider-wrapper {
          position: absolute;
          bottom: 40px;
          z-index: 1;

          @media (min-width: 768px) {
            position: relative;
            margin: 0;
          }
        }

        @keyframes hidding {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
