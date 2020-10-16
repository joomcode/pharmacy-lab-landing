import {SectionTitle} from '../components/SectionTitle';
import {Icon} from '../components/Icon';

export const HowItWorks = () => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <SectionTitle>Как это работает для вашего клиента</SectionTitle>
        <div className='grid'>
          <div className='quote' style={{gridArea: 'h1'}}>
            <Icon name='quote' className='quote-icon' color='#5bb75f' />
            Хочу найти самый выгодный <br /> безрецептурный препарат
          </div>
          <Item icon='search' text='Клиент ищет препарат' area='c1' />
          <Item icon='results' text='Видит предложения от разных аптек' area='c2' />
          <Item icon='pharmacy' text='Выбирает подходящий по стоимости и местоположению вариант' area='c3' />
          <Item icon='delivery' text='Мы бронируем препарат или оформляем доставку' area='c4' isLast />
          <FinalItem />
          <div className='quote' style={{gridArea: 'h2'}}>
            <Icon name='quote' className='quote-icon' color='#ff6c1a' />
            Хочу купить рецептурный препарат в <br /> один клик
          </div>
          <Item icon='web' text='Клиент заходит на страницу любимой аптеки' area='d1' red />
          <Item icon='click' text='Отправляет e-prescription в один клик' area='d2' red />
          <Item icon='consult' text='Фармацевт консультирует и подбирает нужное лекарство' area='d3' red />
          <Item icon='take' text='Клиент забирает лекарство' area='d4' isLast red />
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
      }
      .wrapper {
        max-width: 1440px;
        padding: 106px 60px 90px;
        margin: auto;
      }
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
      }
      .quote {
        position: relative;
        margin: 120px 0 60px;
        line-height: 30px;
        font-size: 25px;
        font-weight: 500;
      }
      :global(.quote-icon) {
        position: absolute;
        top: -55px;
        left: 0;
        width: 39px;
        height: 35px;
      }
    `}</style>
  </>
);

type ItemProps = {
  icon: string;
  text: string;
  area: string;
  isLast?: boolean;
  red?: boolean;
};

const Item = ({icon, text, area, isLast = false, red = false}: ItemProps) => (
  <>
    <div className='icon' style={{gridArea: `${area}_1`}}>
      <span className={'circle' + (red ? ' red' : '')} />
      <span className={'arrow' + (isLast ? '' : ' pike') + (red ? ' red' : '')} />
      <Icon name={icon} className='icon-pic' />
    </div>
    <p className='text' style={{gridArea: `${area}_2`}}>
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

        &.red {
          background: #ff6c19;
        }
      }
      .arrow {
        position: absolute;
        display: block;
        top: 32px;
        left: 32px;
        right: 0;
        height: 1px;
        background: #5bb75f;

        &.red {
          background: #ff6c19;
        }

        &.pike {
          right: 40px;
        }

        &.pike::after {
          position: absolute;
          content: '';
          top: -5px;
          right: -10px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-left-color: #5bb75f;
        }

        &.red::after {
          border-left-color: #ff6c19;
        }
      }
      :global(.icon-pic) {
        position: absolute;
        top: -14px;
        left: -30px;
        width: 60px;
        height: 60px;
        //background-repeat: no-repeat;
        //background-position: center;
      }
      .text {
        max-width: 210px;
        margin-top: 44px;
        line-height: 25px;
        font-size: 20px;
        color: #2d2d34;
        opacity: 0.8;
      }
    `}</style>
  </>
);

const FinalItem = () => (
  <>
    <div className='final'>
      <span className='top-arrow' />
      <div className='badge'>
        <span className='circle'>
          <span className='icon' />
        </span>
        <p className='text'>
          Клиент доволен <br /> вашей аптекой
        </p>
      </div>
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
        border-top: 1px solid #5bb75f;
        border-right: 1px solid #5bb75f;

        &::after {
          position: absolute;
          content: '';
          bottom: -10px;
          right: -6px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-top-color: #5bb75f;
        }
      }
      .bottom-arrow {
        position: relative;
        flex-grow: 1;
        margin: 32px 0 31px;
        border-bottom: 1px solid #ff6c19;
        border-right: 1px solid #ff6c19;

        &::after {
          position: absolute;
          content: '';
          top: -10px;
          right: -6px;
          width: 6px;
          height: 6px;
          border: 6px solid transparent;
          border-bottom-color: #ff6c19;
        }
      }
      .badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: -100%;
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
        margin-top: 10px;
        text-align: center;
        line-height: 21px;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        white-space: nowrap;
      }
    `}</style>
  </>
);
