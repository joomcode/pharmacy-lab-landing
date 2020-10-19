import {Icon} from '../components/Icon';

const features = [
  {
    icon: 'prescription',
    color: '#fdf1da',
    title: 'Integration von E-Rezepten',
    text:
      'Sobald die Gesetzgebung erneuert wird, können Ihre Kunden über unseren Service Rx-Arzneimittel mit einem Mausklick bestellen',
  },
  {
    icon: 'computer',
    color: '#eaf3f2',
    title: 'Einfache Integration von Apotheken',
    text: 'Wir übernehmen die Integration Ihrer Apotheke: Sie benötigen nur minimal Aufwand und Zeit',
  },
  {
    icon: 'chat',
    color: '#d9ebf7',
    title: 'Bedienerfreundliche Schnittstelle für Ihre Kunden',
    text:
      'Nach einer Umfrage unter Apothekenkunden wissen wir genau, womit diese beim Online-Kauf von Medikamenten unzufrieden sind. J-Pharm hat diese Mängel nicht',
  },
  {
    icon: 'car',
    color: '#e4ddf1',
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
            {features.map(({icon, color, title, text}) => (
              <div key={title} className='feature'>
                <span className='feature-icon-wrapper' style={{background: color}}>
                  <Icon name={icon} width={45} height={45} />
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
          padding: 112px 60px 100px 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 55px;
        }
        .feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .feature-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          margin-bottom: 34px;
          border-radius: 50%;
        }
        .feature-title {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: #2d2d34;
        }
        .feature-text {
          margin-top: 16px;
          font-size: 18px;
          line-height: 24px;
          color: #2d2d34;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};
