import {Logo} from '../components/Logo';

export const Welcome = () => (
  <div className='main'>
    <div className='wrapper'>
      <header>
        <Logo />
      </header>
      <div className='main-content'>
        <h1 className='main-title'>
          Der Digital-Progress im Einsatz <br /> für lokale Apotheken
        </h1>
        <p className='main-sub-title'>
          Wir helfen den Apotheken neue Kunden zu gewinnen, und den Kunden - <br /> schnell und bequem Medikamente zu
          finden und zu buchen
        </p>
        <button className='main-connect' type='button'>
          Beitreten
        </button>
      </div>
    </div>
    <style jsx>{`
      .main {
        background: url('/main.jpg') no-repeat;
        background-size: cover;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 1440px;
        padding: 36px 60px 0 60px;
        margin: 0 auto;
      }
      .main-content {
        margin: 184px 0 150px;

        @media (max-width: 768px) {
          br {
            display: none;
          }
        }
      }
      .main-title {
        line-height: 78px;
        font-size: 60px;
        font-weight: 500;
        color: #fff;
      }
      .main-sub-title {
        margin-top: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #fff;
      }
      .main-connect {
        height: 60px;
        padding: 0 28px;
        margin-top: 50px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        border: none;
        background: #fff;
        text-transform: uppercase;
      }
    `}</style>
  </div>
);
