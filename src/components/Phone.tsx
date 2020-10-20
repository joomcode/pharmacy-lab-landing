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
        alt={`screen ${screenId}`}
        className='screen'
        src={`/screens/${screenId}.png`}
        srcSet={`/screens/${screenId}.png 236w, /screens/${screenId}@2x.png 472w, /screens/${screenId}@3x.png 708w`}
        sizes='(min-width: 768px) 236px, 118px'
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
        width: 207px;
        height: 207px;
        margin: -100px 0 0 -100px;
        border-radius: 50%;
        background: #5bb75f;

        @media (min-width: 768px) {
          width: 414px;
          height: 414px;
          margin: -200px 0 0 -200px;
        }
      }
      .screen-background {
        position: absolute;
        top: 7.84%;
        left: 6.5%;
        right: 6.5%;
        bottom: 7.84%;
        background: #fff;
      }
      .screen {
        position: absolute;
        top: 26px;
        left: 10px;
        width: 118px;
        height: 235px;

        @media (min-width: 768px) {
          top: 52px;
          left: 21px;
          width: 236px;
          height: 470px;
        }
      }
      .phone {
        position: relative;
        width: 139px;
        height: 287px;
        background: url('/phone.png') no-repeat;
        background-size: contain;

        @media (min-width: 768px) {
          width: 278px;
          height: 574px;
        }
      }
    `}</style>
  </>
);
