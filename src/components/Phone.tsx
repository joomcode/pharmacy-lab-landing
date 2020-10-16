type Props = {
  screenId: string;
};

export const Phone = ({screenId}: Props) => (
  <>
    <div className='wrapper'>
      <div className='circle' />
      <div className='screen-background' />
      <div
        className='screen'
        style={{
          backgroundImage: `url('/screens/${screenId}.png')`,
        }}
      />
      <div className='phone' />
    </div>
    <style jsx>{`
      .wrapper {
        display: inline-block;
        position: relative;
        margin: 76px 0;
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
        top: 50px;
        left: 20px;
        right: 20px;
        bottom: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .phone {
        position: relative;
        width: 258px;
        height: 554px;
        background: url('/phone.png') no-repeat;
        background-size: 258px 554px;
      }
    `}</style>
  </>
);
