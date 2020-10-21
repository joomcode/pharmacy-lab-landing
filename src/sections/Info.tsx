export const Info = () => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <div className='column'>
          <h2 className='title'>Wir glauben an die Wichtigkeit der Apotheken-Mission.</h2>
        </div>
        <div className='column'>
          <h3 className='sub-title'>Der heutige Alltag stellt neue Herausforderungen an die lokale Geschäftswelt</h3>
          <ul className='list'>
            <li className='item'>Die Corona-Krise</li>
            <li className='item'>Der massenweise Wechsel zum Online-Shopping</li>
            <li className='item'>Verstärkter Wettbewerb mit ausländischen Konzernen</li>
            <li className='item'>Der begrenzte Radius vieler Kunden</li>
          </ul>
        </div>
        <div className='column'>
          <h3 className='sub-title'>
            Joom Pharm Solutions möchtet den lokalen Apotheken trotz alledem zu helfen, ein gut gehendes Geschäft zu
            entwickeln
          </h3>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
      }
      .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        margin: auto;
        padding: 50px var(--padding);

        @media (min-width: 768px) {
          flex-direction: unset;
          padding-top: 90px;
          padding-bottom: 90px;
        }
      }
      .column {
        flex-basis: 100px;
        flex-grow: 1;

        @media (min-width: 768px) {
          margin: 0 20px;
        }
      }
      .title {
        line-height: 39px;
        font-size: 30px;
        font-weight: 500;
        color: #2d2d34;

        @media (min-width: 768px) {
          line-height: 50px;
          font-size: 40px;
        }
      }
      .sub-title {
        margin-top: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: 500;
        color: #2d2d34;

        @media (min-width: 768px) {
          margin: 0;
          font-size: 20px;
        }
      }
      .list {
        padding: 0 0 0 26px;
        margin: 20px 0 0;
        list-style: none;

        @media (min-width: 768px) {
          margin-top: 40px;
        }
      }
      .item {
        position: relative;
        line-height: 24px;
        font-size: 16px;
        color: #2d2d34;
        opacity: 0.8;

        @media (min-width: 768px) {
          font-size: 18px;
        }

        &:not(:last-of-type) {
          margin-bottom: 22px;
        }

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          margin: 6px 0 0 -26px;
          border-radius: 50%;
          background: #5bb75f;
        }
      }
    `}</style>
  </>
);
