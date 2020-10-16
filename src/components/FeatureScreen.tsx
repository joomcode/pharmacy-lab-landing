import {Phone} from './Phone';
import {Dot} from './Dot';

type Props = {
  screenId: string;
  title: string;
  text: string;
  dots?: {top: number; left: number}[];
};

export const FeatureScreen = ({screenId, title, text, dots}: Props) => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <div className='inner'>
          <div className='title-container' />
          <Phone screenId={screenId} />
          <div className='description-wrapper'>
            <div className='description'>
              {dots ? dots.map(({top, left}, i) => <Dot key={i} top={top} left={left} />) : null}
              <h2 className='description-title'>{title}</h2>
              <p className='description-text'>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        flex-shrink: 0;
      }
      .wrapper {
        max-width: 1440px;
        padding: 88px 60px 60px;
        margin: 0 auto;
      }
      .inner {
        position: relative;
        display: flex;
        align-items: center;
      }
      .title-container {
        flex-basis: 100px;
        flex-grow: 1;
        margin-right: 108px;
      }
      .description-wrapper {
        position: relative;
        flex-basis: 100px;
        flex-grow: 1;
        align-self: flex-end;
        margin-left: 108px;
        margin-bottom: 200px;
      }
      .description {
        position: relative;
        width: 288px;
      }
      .description-title {
        position: relative;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
      }
      .description-text {
        position: relative;
        margin-top: 21px;
        line-height: 24px;
        font-size: 18px;
        color: #2d2d34;
        opacity: 0.8;
      }
    `}</style>
  </>
);
