import {useCallback, useEffect, useRef, useState} from 'react';
import {FeatureScreen} from '../components/FeatureScreen';
import {Slider} from '../components/Slider';
import {SectionTitle} from '../components/SectionTitle';

const screens = [
  {
    screenId: '2',
    title: 'Эффективный канал привлечения клиентов',
    text:
      'Мы инвестируем значительные усилия и средства в продвижение. Наш сервис поможет большему числу людей узнать о вашей аптеке и стать ее постоянными покупателями.',
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
    title: 'Всегда на связи с клиентом',
    text:
      'Ваши фармацевты смогут проконсультировать потенциального покупателя и быть всегда с ним на связи с помощью чата, писем, пуш-уведомлений и персональных предложений. ',
  },
  {
    screenId: '4',
    title: 'Эффективный канал привлечения клиентов',
    text:
      'Мы инвестируем значительные усилия и средства в продвижение. Наш сервис поможет большему числу людей узнать о вашей аптеке и стать ее постоянными покупателями.',
  },
];

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

      const thresholds = scrollTop > prevScrollTopRef.current ? [0.2, 0.5] : [0.3, 0.8];
      let index;

      if (isLongScreen) {
        const height = window.innerHeight - scrollZoneRef.current.offsetHeight;
        const scroll = height - scrollZoneRef.current.offsetTop + scrollTop;

        if (scroll < height * 0.45) {
          index = 0;
        } else if (scroll < height * 0.75) {
          index = 1;
        } else {
          index = 2;
        }
      } else {
        const scroll = scrollTop - scrollZoneRef.current.offsetTop;
        const height = scrollZoneRef.current.offsetHeight - window.innerHeight;

        if (scroll < height * thresholds[0]) {
          index = 0;
        } else if (scroll < height * thresholds[1]) {
          index = 1;
        } else {
          index = 2;
        }
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
                  <SectionTitle isSmall>Что мы предлагаем</SectionTitle>
                  <Slider count={3} activeIndex={screenIndex} onClick={onSliderClick} />
                </div>
              </div>
            </div>
            <div className='gallery'>
              <div className='gallery-list' ref={galleryRef}>
                {screens.map((params) => (
                  <FeatureScreen key={params.screenId} {...params} />
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
