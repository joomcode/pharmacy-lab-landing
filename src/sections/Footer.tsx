import {Logo} from '../components/Logo';

export const Footer = () => (
  <>
    <footer className='container'>
      <div className='wrapper'>
        <div className='line'>
          <Logo dark className='logo' />
          <div className='contacts'>
            <div className='contact'>
              <span className='label'>Kontaktdaten</span>
              <span className='value'>+49 685323 24</span>
            </div>
            <div className='contact'>
              <span className='label'>E-Mail-Adresse</span>
              <div className='value'>PharmSolutions@joom.com</div>
            </div>
            <div className='contact'>
              <span className='label'>Juristische Adresse</span>
              <span className='value'>Potsdamer Platz 1, 10785 Berlin, Germany</span>
            </div>
          </div>
        </div>
        <div className='last-line'>
          <span className='copyright'>© 2020 SIA Joom (Latvia)</span>
          <a href='#' className='policy-link'>
            Datenschutzerklärung
          </a>
        </div>
      </div>
    </footer>
    <style jsx>{`
      .container {
        margin-top: 50px;

        @media (min-width: 768px) {
          margin-top: 73px;
        }
      }
      .wrapper {
        max-width: 1440px;
        margin: auto;
        padding: 0 var(--padding) 60px;

        @media (min-width: 768px) {
          padding-bottom: 240px;
        }
      }
      .line {
        padding-top: 40px;
        border-top: 1px solid #e6e6e6;

        :global(.logo) {
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          display: flex;
          align-items: flex-start;
        }
      }
      .contacts {
        margin-top: 60px;

        @media (min-width: 768px) {
          display: flex;
          margin-top: 0;
          margin-left: 140px;
        }
      }
      .contact {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        &:not(:last-child) {
          margin-right: 50px;
        }

        @media (min-width: 768px) {
          margin: 0;
        }
      }
      .label {
        margin-bottom: 8px;
        line-height: 24px;
        font-size: 16px;
        color: #2d2d34;
        opacity: 0.8;

        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
      .value {
        line-height: 30px;
        font-size: 18px;
        font-weight: 500;
        color: #2d2d34;

        @media (min-width: 768px) {
          font-size: 20px;
        }
      }
      .last-line {
        margin-top: 40px;

        @media (min-width: 768px) {
          display: flex;
        }
      }
      .copyright,
      .policy-link {
        display: block;
        line-height: 24px;
        font-size: 18px;
        color: #2d2d34;
        opacity: 0.8;
      }
      .policy-link {
        margin-top: 20px;

        @media (min-width: 768px) {
          margin-top: 0;
          margin-left: 200px;
        }

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
