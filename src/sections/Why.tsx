import {SectionTitle} from '../components/SectionTitle';
import {Dot} from '../components/Dot';

const texts = [
  {
    text: 'Мы знаем, как привлечь новых пользователей и помочь им стать вашими постоянными клиентами',
  },
  {
    text: 'Мы берем всю работу по подключению к нашему сервису на себя',
  },
  {
    text: 'Мы быстро реагируем на обратную связь от вас',
  },
  {
    text: 'Мы предоставляем новые возможности локальному аптечному бизнесу',
  },
];

export const Why = () => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <Dot top={0.74} left={0.22} />
        <SectionTitle color='#fff'>
          Почему Joom Pharm <br /> Solutions?
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
        padding: 90px 60px 130px;
      }
      .grid {
        display: grid;
        margin-top: 100px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 40px;
      }
      .item {
        padding-bottom: 50px;
        border-bottom: 3px solid #5bb75f;
      }
      .item-number {
        line-height: 70px;
        font-size: 50px;
        font-weight: 500;
        color: #5bb75f;
      }
      .item-text {
        line-height: 24px;
        font-size: 20px;
        color: #f9f9f9;
        opacity: 0.8;
      }
    `}</style>
  </>
);
