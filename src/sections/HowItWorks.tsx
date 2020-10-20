import {SectionTitle} from '../components/SectionTitle';
import {Icon} from '../components/Icon';
import {useEffect, useRef, useState} from 'react';

const clientsFeatures = [
  {
    icon: 'search',
    text: 'Der Kunde sucht nach dem Medikament',
  },
  {
    icon: 'results',
    text: 'Er sieht die Angebote von unterschiedlichen Apotheken',
  },
  {
    icon: 'pharmacy',
    text: 'Er wählt die Variante, welche ihm preislich und geographisch passt',
  },
  {
    icon: 'delivery',
    text: 'Wir reservieren das Medikament oder bereiten es für die Lieferung vor',
  },
];

const pharmacyFeatures = [
  {
    icon: 'web',
    text: 'Der Kunde geht auf die Seite seiner Lieblingsapotheke',
  },
  {
    icon: 'click',
    text: 'Er sendet das E-Rezept mit einem Mausklick',
  },
  {
    icon: 'consult',
    text: 'Der Apotheker findet das notwendige Medikament',
  },
  {
    icon: 'delivery',
    text: 'Wir reservieren das Medikament oder bereiten es für die Lieferung vor',
  },
];

export const HowItWorks = () => {
  const [isPhone, setIsPhone] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function onResize() {
      setIsPhone((containerRef.current as any).offsetWidth < 768);
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const title1 = (
    <>
      Ich will möglichst bequem ein <br /> OTC-Arzneimittel kaufen
    </>
  );
  const title2 = (
    <>
      Ich will ein Rx-Arzneimittel mit einem <br /> Mausklick kaufen
    </>
  );
  let content;

  if (isPhone) {
    content = (
      <>
        <div className='quote'>
          <Icon name='quote' className='quote-icon_mobile' color='#65b869' width={26} height={23} />
          {title1}
        </div>
        <ul className='items-container'>
          {clientsFeatures.map(({icon, text}, i) => (
            <li key={i} className='item-wrapper'>
              <Item icon={icon} text={text} longArrow />
            </li>
          ))}
          <li className='item-wrapper'>
            <FinalBadge />
          </li>
        </ul>
        <div className='quote second'>
          <Icon name='quote' className='quote-icon_mobile' color='#94c5bc' width={26} height={23} />
          {title2}
        </div>
        <ul className='items-container'>
          {pharmacyFeatures.map(({icon, text}, i) => (
            <li key={i} className='item-wrapper'>
              <Item icon={icon} text={text} red longArrow />
            </li>
          ))}
          <li className='item-wrapper'>
            <FinalBadge />
          </li>
        </ul>
        <style jsx>{`
          .quote {
            position: relative;
            margin: 100px var(--padding) 0;
            line-height: 30px;
            font-size: 18px;
            font-weight: 500;
            color: #2d2d34;

            &.second {
              margin-top: 160px;
            }
          }
          :global(.quote-icon_mobile) {
            position: absolute;
            top: -30px;
            left: 0;
          }
          .items-container {
            display: flex;
            padding: 20px var(--padding) 50px;
            margin: 20px 0 70px;
            list-style: none;
            overflow-x: scroll;

            &::-webkit-scrollbar {
              height: 8px;
            }

            &::-webkit-scrollbar-track {
              border-radius: 4px;
              background: #e6e6e6;
            }

            &::-webkit-scrollbar-thumb {
              border-radius: 4px;
              background: #5bb65f;
            }

            &::-webkit-scrollbar-button {
              width: 10px;
            }
          }
          .item-wrapper {
            display: block;
            width: 194px;
            flex-shrink: 0;
            padding: 20px 20px 0 0;
          }
        `}</style>
      </>
    );
  } else {
    content = (
      <>
        <div className='grid'>
          <div className='quote' style={{gridArea: 'h1'}}>
            <Icon name='quote' className='quote-icon' color='#65b869' width={39} height={35} />
            {title1}
          </div>
          {clientsFeatures.map(({icon, text}, i) => (
            <Item
              key={i}
              icon={icon}
              text={text}
              area={`c${i + 1}`}
              isLast={i === clientsFeatures.length - 1}
              isLastTop={i === clientsFeatures.length - 1}
            />
          ))}
          <FinalItem />
          <div className='quote second' style={{gridArea: 'h2'}}>
            <Icon name='quote' className='quote-icon' color='#94c5bc' width={39} height={35} />
            {title2}
          </div>
          {pharmacyFeatures.map(({icon, text}, i) => (
            <Item key={i} icon={icon} text={text} area={`d${i + 1}`} red isLast={i === pharmacyFeatures.length - 1} />
          ))}
        </div>
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr max-content 50px;
            grid-template-rows: min-content min-content min-content min-content min-content min-content;
            grid-template-areas:
              'h1   h1   h1   h1   .'
              'c1_1 c2_1 c3_1 c4_1 f'
              'c1_2 c2_2 c3_2 c4_2 f'
              'h2   h2   h2   h2   f'
              'd1_1 d2_1 d3_1 d4_1 f'
              'd1_2 d2_2 d3_2 d4_2 .';
            padding: 0 var(--padding);
          }
          .quote {
            position: relative;
            margin: 120px 0 60px;
            line-height: 30px;
            font-size: 25px;
            font-weight: 500;
            color: #2d2d34;

            &.second {
              margin-top: 160px;
            }
          }
          :global(.quote-icon) {
            position: absolute;
            top: -55px;
            left: 0;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <div className='container' ref={containerRef}>
        <div className='wrapper'>
          <div className='title'>
            <SectionTitle>
              Wie funktioniert das <br /> für Ihre Kunden
            </SectionTitle>
          </div>
          {content}
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        .wrapper {
          max-width: 1440px;
          padding: 50px 0;
          margin: auto;

          @media (min-width: 768px) {
            padding: 106px 0 90px;
          }
        }
        .title {
          padding: 0 var(--padding);
        }
      `}</style>
    </>
  );
};

type ItemProps = {
  icon: string;
  text: string;
  area?: string;
  isLast?: boolean;
  isLastTop?: boolean;
  longArrow?: boolean;
  red?: boolean;
};

const Item = ({icon, text, area, isLast = false, isLastTop = false, red = false, longArrow = false}: ItemProps) => (
  <>
    <div className='icon' style={area ? {gridArea: `${area}_1`} : undefined}>
      <span className={'circle' + (red ? ' red' : '')} />
      <span className={'arrow' + (isLast ? '' : ' pike') + (red ? ' red' : '') + (longArrow ? ' long' : '')} />
      <Icon name={icon} className='icon-pic' color={red ? '#10826d' : '#408043'} />
    </div>
    <p className={'text' + (isLastTop ? ' last' : '')} style={area ? {gridArea: `${area}_2`} : undefined}>
      {text}
    </p>
    <style jsx>{`
      .icon {
        position: relative;
        margin-left: 30px;
      }
      .circle {
        display: block;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: #5bb75f;
        background: rgba(91, 183, 95, 0.3);

        &.red {
          background: rgba(148, 197, 188, 0.5);
        }
      }
      .arrow {
        position: absolute;
        display: block;
        top: 32px;
        left: 64px;
        right: 0;
        height: 1px;
        background: #cae5cb;

        &.red {
          background: #c6dfda;
        }

        &.pike {
          right: 40px;
        }

        &.long {
          right: 10px;
        }

        &.pike::after {
          position: absolute;
          content: '';
          top: -5px;
          right: -10px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-left-color: #cae5cb;
        }

        &.red::after {
          border-left-color: #c6dfda;
        }
      }
      :global(.icon-pic) {
        position: absolute;
        top: -14px;
        left: -30px;
        width: 60px;
        height: 60px;
      }
      .text {
        max-width: 210px;
        margin-top: 44px;
        line-height: 25px;
        font-size: 20px;
        color: #2d2d34;
        opacity: 0.8;

        &.last {
          margin-right: 40px;
        }
      }
    `}</style>
  </>
);

const FinalItem = () => (
  <>
    <div className='final'>
      <span className='top-arrow' />
      <FinalBadge complex />
      <span className='bottom-arrow' />
    </div>
    <style jsx>{`
      .final {
        grid-area: f;
        display: flex;
        flex-direction: column;
      }
      .top-arrow {
        position: relative;
        flex-grow: 1;
        margin: 32px 0;
        border-left: 1px solid #cae5cb;

        &::after {
          position: absolute;
          content: '';
          bottom: -10px;
          left: -6px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-top-color: #cae5cb;
        }
      }
      .bottom-arrow {
        position: relative;
        flex-grow: 1;
        margin: 32px 0 31px;
        border-left: 1px solid #c6dfda;

        &::after {
          position: absolute;
          content: '';
          top: -10px;
          left: -6px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-bottom-color: #c6dfda;
        }
      }
    `}</style>
  </>
);

const FinalBadge = ({complex = false}: {complex?: boolean}) => (
  <>
    <div className={'badge' + (complex ? ' complex' : '')}>
      <span className='circle'>
        <span className='icon' />
      </span>
      <p className='text'>
        Der Kunde ist mit <br /> Ihrer ApothekE <br /> zufrieden
      </p>
    </div>
    <style jsx>{`
      .badge {
        display: flex;
        flex-direction: column;

        &.complex {
          align-items: center;
          margin-left: -100%;
        }
      }
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: #f9f9f9;
        box-shadow: 0 20px 44px rgba(200, 32, 32, 0.15);
      }
      .icon {
        width: 24px;
        height: 25px;
        margin-bottom: -2px;
        background: url('/icons/heart.png');
      }
      .text {
        margin-top: 44px;
        line-height: 21px;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        color: #2d2d34;

        .complex {
          margin-top: 10px;
          text-align: center;
          white-space: nowrap;
        }
      }
    `}</style>
  </>
);
