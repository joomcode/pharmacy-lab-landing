import {Logo} from '../components/Logo';

export const Footer = () => (
  <>
    <footer className='container'>
      <div className='wrapper'>
        <div className='line'>
          <Logo dark className='logo' />
          <div className='contacts'>
            <div className='contact'>
              <span className='label'>Телефон</span>
              <span className='value'>+49 685323 24</span>
            </div>
            <div className='contact'>
              <span className='label'>Почта</span>
              <div className='value'>PharmSolutions@joom.com</div>
            </div>
            <div className='contact'>
              <span className='label'>Юридический адрес</span>
              <span className='value'>Hauptstraße 18a, 38118 Braunschweig</span>
            </div>
          </div>
        </div>
        <div className='last-line'>
          <span className='copyright'>© 2020 SIA Joom (Latvia)</span>
          <a href='#' className='policy-link'>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
    <style jsx>{`
      .container {
        margin-top: 73px;
      }
      .wrapper {
        max-width: 1440px;
        margin: auto;
        padding: 0 60px 240px;
      }
      .line {
        display: flex;
        align-items: flex-start;

        :global(.logo) {
          margin-top: 10px;
        }
      }
      .contacts {
        display: flex;
        margin-left: 140px;
      }
      .contact {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
          margin-right: 50px;
        }
      }
      .label {
        margin-bottom: 8px;
        line-height: 24px;
        font-size: 18px;
        color: #2d2d34;
        opacity: 0.8;
      }
      .value {
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #2d2d34;
      }
      .last-line {
        display: flex;
        margin-top: 80px;
      }
      .copyright,
      .policy-link {
        line-height: 24px;
        font-size: 18px;
        color: #2d2d34;
        opacity: 0.8;
      }
      .policy-link {
        margin-left: 200px;

        &,
        &:hover,
        &:visited {
          color: #2d2d34;
          text-decoration-line: underline;
        }
      }
    `}</style>
  </>
);
