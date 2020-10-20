type Props = {
  screenId: string;
  opacity: number;
};

export const Phone = ({screenId, opacity}: Props) => (
  <>
    <div className='wrapper'>
      <div className='circle' />
      <div className='screen-background' />
      <img
        className='screen'
        src={`/screens/${screenId}.png`}
        srcSet={`/screens/${screenId}.png, /screens/${screenId}@2x.png 2x, /screens/${screenId}@3x.png 3x`}
        style={{opacity}}
      />
      <div className='phone' />
    </div>
    <style jsx>{`
      .wrapper {
        display: inline-block;
        position: relative;
        margin: auto;
      }
      .circle {
        position: absolute;
        top: 50%;
        left: 47%;
        width: 414px;
        height: 414px;
        margin: -200px 0 0 -200px;
        border-radius: 50%;
        background: #5bb75f;
      }
      .screen-background {
        position: absolute;
        top: 45px;
        left: 16px;
        right: 16px;
        bottom: 45px;
        background: #fff;
      }
      .screen {
        position: absolute;
        top: 52px;
        left: 21px;
        width: 236px;
        height: 470px;
      }
      .phone {
        position: relative;
        width: 278px;
        height: 574px;
        background: url('/phone.png') no-repeat;
        background-size: 278px 574px;
      }
    `}</style>
  </>
);
