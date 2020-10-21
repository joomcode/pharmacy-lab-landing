import {Logo} from '../components/Logo';

export const Welcome = () => (
  <div className='main'>
    <div className='wrapper'>
      <header>
        <Logo dark whiteText />
      </header>
      <div className='main-content'>
        <h1 className='main-title'>
          Die digitale Lösung <br /> für lokale Apotheken
        </h1>
        <p className='main-sub-title'>
          Wir unterstützen Apotheken dabei, neue Kunden zu gewinnen – und <br /> Kunden dabei, schnell und bequem
          Medikamente zu finden und zu reservieren
        </p>
        <a href='#contact'>
          <button className='main-connect' type='button'>
            Beitreten
          </button>
        </a>
      </div>
    </div>
    <style jsx>{`
      .main {
        position: relative;
        background: url('/cover_narrow.jpg') no-repeat 31% top;
        background-size: cover;

        @media (min-width: 375px) {
          background-position: 64% top;
        }

        @media (min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {
          background-image: url('/cover_narrow@2x.jpg');
        }

        @media (min-width: 768px) {
          background-image: url('/cover.jpg');
          background-position: center top;

          @media (min-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {
            background-image: url('/cover@2x.jpg');
          }
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: '';
          background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
        }

        br {
          display: none;

          @media (min-width: 930px) {
            display: initial;
          }
        }
      }
      .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 1440px;
        padding: 36px var(--padding) 0;
        margin: 0 auto;
        z-index: 1;
      }
      .main-content {
        margin: 44vh 0 40px;

        @media (min-width: 768px) {
          margin: 22% 0 80px;
        }
      }
      .main-title {
        line-height: 39px;
        font-size: 30px;
        font-weight: 500;
        color: #fff;

        @media (min-width: 768px) {
          line-height: 60px;
          font-size: 50px;
        }

        @media (min-width: 930px) {
          line-height: 78px;
          font-size: 60px;
        }
      }
      .main-sub-title {
        margin-top: 16px;
        line-height: 26px;
        font-size: 18px;
        color: #fff;

        @media (min-width: 768px) {
          margin-top: 30px;
          line-height: 30px;
          font-size: 22px;
        }
      }
      .main-connect {
        width: 100%;
        height: 60px;
        padding: 0 28px;
        margin-top: 24px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        border: none;
        background: #fff;
        text-transform: uppercase;

        @media (min-width: 768px) {
          width: unset;
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
);
