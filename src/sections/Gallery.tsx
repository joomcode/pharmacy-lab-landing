import {useState, useEffect} from 'react';
import {Phone} from '../components/Phone';
import {SectionTitle} from '../components/SectionTitle';

const screens = [
  {
    screenId: '2',
    title: 'Einen effizienten Weg zur Gewinnung von neuen Kunden',
    text:
      'Wir investieren erheblichen Arbeitsaufwand und Geldmittel in die Förderung. Dank unserem Service erfahren mehr Leute über Ihre Apotheke und werden zu Ihren Stammkunden',
  },
  {
    screenId: '3',
    title: 'Aktuelle Preise für Medikamente in Ihrer Apothek',
    text:
      'Wir zeigen Ihre jetzigen Preise und aktualisieren diese rechtzeitig, damit die Kunden all Ihre günstigen Preise und Sonderangebote einsehen',
  },
  {
    screenId: '5',
    title: 'Immer für den Kunden da',
    text:
      'Ihre Pharmazeuten können den Kaufinteressenten beraten sowie mit ihm via Chat, Push-Benachrichtigungen und individuelle Angebote immer im Kontakt bleiben',
  },
  {
    screenId: '5',
    title: 'Persönliche Homepage der Apotheke in der App und auf der Webseite',
    text:
      'Sie brauchen keine vollwertige Webseite zu unterstützen, um im Blickfeld Ihrer Kunden zu stehen. Schaffen Sie anhand der einfachen Tools Ihre individuelle Homepage in unserem Service - ohne Entwicklungsarbeiten',
  },
];

export const Gallery = () => {
  const [opacity, setOpacity] = useState(1);
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      const center = window.innerHeight / 2;
      const items = document.querySelectorAll('.js-text-item');
      const offsets: any[] = [];

      items.forEach((el) => {
        const box = el.getBoundingClientRect();
        offsets.push({
          top: box.top - center,
          bottom: box.bottom - center,
        });
      });

      const deltas = [];

      for (let i = 0; i < offsets.length - 1; i++) {
        deltas.push({
          index: i,
          delta: -offsets[i].bottom - offsets[i + 1].top,
          top: offsets[i + 1].top,
        });
      }

      deltas.sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta));

      const head = deltas[0];

      if (head.top < 150) {
        setOpacity(Math.max(0, 1 - Math.min(1, (head.top + 50) / 200)));
      } else if (head.delta > -300) {
        const opacity = Math.min(1, -head.delta / 200);

        setOpacity(Math.max(0, opacity));

        if (opacity < 0) {
          setScreenIndex(head.index + 1);
        } else {
          setScreenIndex(head.index);
        }
      } else {
        setOpacity(1);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='title-wrapper'>
            <div className='title'>
              <SectionTitle>
                Was bieten <br /> wir an
              </SectionTitle>
            </div>
          </div>
          <div className='phone'>
            <Phone screenId={screens[screenIndex].screenId} opacity={opacity} />
          </div>
          <div className='texts-wrapper'>
            <div className='texts'>
              {screens.map(({title, text}, i) => (
                <div key={title} className='item js-text-item' data-item={i}>
                  <h2 className='item-title'>{title}</h2>
                  <p className='item-text'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: #f9f9f9;
        }
        .wrapper {
          display: flex;
          max-width: 1440px;
          padding: 86px 60px 130px;
          margin: 0 auto;
        }
        .title-wrapper {
          flex-basis: 100px;
          flex-grow: 1;
        }
        .title {
          position: sticky;
          top: 60px;
          margin-bottom: 200px;
        }
        .phone {
          position: sticky;
          top: 0;
          display: flex;
          min-height: 100vh;
          height: 100vh;
        }
        .texts-wrapper {
          display: flex;
          justify-content: flex-end;
          flex-basis: 100px;
          flex-grow: 1;
        }
        .texts {
          max-width: 315px;
        }
        .item {
          margin: 250px 0 160px;

          &:not(:first-of-type) {
            margin-top: 400px;
          }
        }
        .item-title {
          line-height: 30px;
          font-size: 20px;
          font-weight: 500;
          color: #2d2d34;
        }
        .item-text {
          margin-top: 22px;
          line-height: 24px;
          font-size: 18px;
          color: #2d2d34;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};
