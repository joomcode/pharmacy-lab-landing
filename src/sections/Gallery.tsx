import {useCallback, useEffect, useRef, useState} from 'react';
import {FeatureScreen} from '../components/FeatureScreen';
import {Slider} from '../components/Slider';
import {SectionTitle} from '../components/SectionTitle';

const screens = [
  {
    screenId: '2',
    title: 'Einen effizienten Weg zur Gewinnung von neuen Kunden',
    text:
      'Wir investieren erheblichen Arbeitsaufwand und Geldmittel in die Förderung. Dank unserem Service erfahren mehr Leute über Ihre Apotheke und werden zu Ihren Stammkunden',
    dots: [
      {
        top: -0.1,
        left: 0.05,
      },
      {
        top: 1,
        left: 0.85,
      },
    ],
  },
  {
    screenId: '3',
    title: 'Aktuelle Preise für Medikamente in Ihrer Apothek',
    text:
      'Wir zeigen Ihre jetzigen Preise und aktualisieren diese rechtzeitig, damit die Kunden all Ihre günstigen Preise und Sonderangebote einsehen',
  },
  {
    screenId: '4',
    title: 'Immer für den Kunden da',
    text:
      'Ihre Pharmazeuten können den Kaufinteressenten beraten sowie mit ihm via Chat, Push-Benachrichtigungen und individuelle Angebote immer im Kontakt bleiben',
  },
  {
    screenId: '4',
    title: 'Persönliche Homepage der Apotheke in der App und auf der Webseite',
    text:
      'Sie brauchen keine vollwertige Webseite zu unterstützen, um im Blickfeld Ihrer Kunden zu stehen. Schaffen Sie anhand der einfachen Tools Ihre individuelle Homepage in unserem Service - ohne Entwicklungsarbeiten',
  },
];

function findByThreshold(param: number, thresholds: number[]) {
  for (let i = 0; i < thresholds.length; i++) {
    if (param < thresholds[i]) {
      return i;
    }
  }

  return thresholds.length;
}

export const Gallery = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [isLongScreen, setIsLongScreen] = useState(false);
  const [disableListeners, setDisableListeners] = useState(false);
  const containerRef: any = useRef(null);
  const galleryRef: any = useRef(null);
  const scrollZoneRef: any = useRef(null);
  const prevScrollTopRef = useRef(0);

  const onSliderClick = useCallback(
    (index: number) => {
      if (isLongScreen) {
        setDisableListeners(true);
        setScreenIndex(index);
        return;
      }

      const height = scrollZoneRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: scrollZoneRef.current.offsetTop + height / 6 + (height / 3) * index,
      });
    },
    [isLongScreen],
  );

  useEffect(() => {
    if (disableListeners) {
      return;
    }

    function onResize() {
      setIsLongScreen(containerRef.current.offsetHeight * 1.4 < window.innerHeight);
    }

    function onScroll() {
      const scrollTop = (document as any).scrollingElement.scrollTop;

      const thresholds = scrollTop > prevScrollTopRef.current ? [0.2, 0.45, 0.7] : [0.2, 0.5, 0.8];
      let index;

      if (isLongScreen) {
        const height = window.innerHeight - scrollZoneRef.current.offsetHeight;
        const scroll = height - scrollZoneRef.current.offsetTop + scrollTop;

        index = findByThreshold(scroll / height, [0.45, 0.65, 0.85]);
      } else {
        const scroll = scrollTop - scrollZoneRef.current.offsetTop;
        const height = scrollZoneRef.current.offsetHeight - window.innerHeight;

        index = findByThreshold(scroll / height, thresholds);
      }

      prevScrollTopRef.current = scrollTop;
      setScreenIndex(index);
    }

    onResize();
    onScroll();

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [isLongScreen, disableListeners]);

  useEffect(() => {
    galleryRef.current.style.setProperty('--shift', `-${screenIndex * 846}px`);
  }, [screenIndex]);

  return (
    <>
      <div className={'scroll-zone' + (isLongScreen ? ' long' : ' short')} ref={scrollZoneRef}>
        <div className='container'>
          <div className='content' ref={containerRef}>
            <div className='left-wrapper'>
              <div className='left-container'>
                <div className='left-inner'>
                  <SectionTitle isSmall>
                    {' '}
                    Was bieten <br /> wir an
                  </SectionTitle>
                  <Slider count={screens.length} activeIndex={screenIndex} onClick={onSliderClick} />
                </div>
              </div>
            </div>
            <div className='gallery'>
              <div className='gallery-list' ref={galleryRef}>
                {screens.map((params) => (
                  <FeatureScreen key={params.title} {...params} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scroll-zone {
          background: #f9f9f9;

          &.short {
            height: 2000px;

            .container {
              display: flex;
              align-items: center;
              min-height: 100vh;
            }
          }
        }
        .container {
          position: sticky;
          top: 0;
        }
        .content {
          position: relative;
          width: 100%;
        }
        .gallery {
          position: relative;
          width: 100%;
          height: 854px;
          overflow: hidden;
        }
        .gallery-list {
          width: 100%;
          transition: transform 0.7s;
          transform: translate(0, var(--shift, 0));
        }
        .left-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .left-container {
          max-width: 1440px;
          height: 100%;
          padding: 88px 60px 60px;
          margin: 0 auto;
        }
        .left-inner {
          position: relative;
          height: 100%;
        }
      `}</style>
    </>
  );
};
