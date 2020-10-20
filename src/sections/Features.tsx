import {Icon} from '../components/Icon';

const features = [
  {
    icon: 'feature_1',
    title: 'Integration von E-Rezepten',
    text:
      'Sobald die Gesetzgebung erneuert wird, können Ihre Kunden über unseren Service Rx-Arzneimittel mit einem Mausklick bestellen',
  },
  {
    icon: 'feature_2',
    title: 'Einfache Integration von Apotheken',
    text: 'Wir übernehmen die Integration Ihrer Apotheke: Sie benötigen nur minimal Aufwand und Zeit',
  },
  {
    icon: 'feature_3',
    title: 'Bedienerfreundliche Schnittstelle für Ihre Kunden',
    text:
      'Nach einer Umfrage unter Apothekenkunden wissen wir genau, womit diese beim Online-Kauf von Medikamenten unzufrieden sind. J-Pharm hat diese Mängel nicht',
  },
  {
    icon: 'feature_4',
    title: 'Lieferservice',
    text: 'Liefern Sie selbst oder nutzen Sie unseren Lieferservice',
  },
];

export const Features = () => {
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='grid'>
            {features.map(({icon, title, text}) => (
              <div key={title} className='feature'>
                <span className='feature-icon-wrapper'>
                  <Icon name={icon} width={100} height={100} />
                </span>
                <h2 className='feature-title'>{title}</h2>
                <p className='feature-text'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }
        .wrapper {
          position: relative;
          max-width: 1440px;
          margin: auto;
          padding: 112px var(--padding) 100px;
        }
        .grid {
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 55px;
          }
        }
        .feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 40px;

          &:not(:last-of-type) {
            margin-bottom: 70px;
          }

          @media (min-width: 768px) {
            margin: 0 !important;
          }
        }
        .feature-icon-wrapper {
          margin-bottom: 22px;
        }
        .feature-title {
          font-weight: 500;
          font-size: 18px;
          line-height: 30px;
          color: #2d2d34;

          @media (min-width: 768px) {
            font-size: 20px;
          }
        }
        .feature-text {
          margin-top: 16px;
          font-size: 16px;
          line-height: 24px;
          color: #2d2d34;
          opacity: 0.8;

          @media (min-width: 768px) {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};
