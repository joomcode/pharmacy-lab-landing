import {SectionTitle} from '../components/SectionTitle';
import {Dot} from '../components/Dot';

const features = [
  {
    icon: 'prescription',
    color: '#fdf1da',
    title: 'Интеграция с e-prescription',
    text:
      'Как только обновится законодательство, ваши клиенты смогут заказать рецептурный препарат через наш сервис в один клик',
  },
  {
    icon: 'computer',
    color: '#eaf3f2',
    title: 'Простое подключение',
    text: 'Мы возьмем на себя подключение вашей аптеки: с вашей стороны потребуется минимум усилий и времени',
  },
  {
    icon: 'chat',
    color: '#d9ebf7',
    title: 'Удобный интерфейс для ваших клиентов',
    text:
      'Мы провели интервью с вашими покупателями и знаем, чем они недовольны при поиске и бронировании препаратов через интернет. В J-Pharm этих неудобств нет.',
  },
  {
    icon: 'car',
    color: '#e4ddf1',
    title: 'Сервис доставки',
    text: 'Доставляйте заказы сами или пользуйтесь нашей службой доставки',
  },
];

export const Features = () => {
  return (
    <>
      <div className='container'>
        <Dot top={0.15} left={0.23} />
        <Dot top={0.5} left={0.33} />
        <Dot top={0.55} left={0.58} />
        <div className='wrapper'>
          <SectionTitle>Что мы предлагаем</SectionTitle>
          <div className='grid'>
            {features.map(({icon, color, title, text}) => (
              <div key={title} className='feature'>
                <span className='feature-icon-wrapper' style={{background: color}}>
                  <span className='feature-icon' style={{backgroundImage: `url('/icons/${icon}.svg')`}} />
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
          padding: 135px 60px 100px 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 55px;
          margin: 60px 0;
        }
        .feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .feature-icon-wrapper {
          display: flex;
          width: 80px;
          height: 80px;
          margin-bottom: 34px;
          border-radius: 50%;
        }
        .feature-icon {
          display: block;
          width: 45px;
          height: 45px;
          margin: auto;
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
