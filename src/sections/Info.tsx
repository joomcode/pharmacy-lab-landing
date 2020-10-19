export const Info = () => (
  <>
    <div className='container'>
      <div className='wrapper'>
        <div className='column'>
          <h2 className='title'>Wir glauben an die Relevanz der Apotheken-Mission</h2>
        </div>
        <div className='column'>
          <h3 className='sub-title'>Die aktuelle Realität stellt neue Herausforderungen an die lokale Geschäftswelt</h3>
          <ul className='list'>
            <li className='item'>Corona-Krise</li>
            <li className='item'>Der massenweise Wechsel zum Online-Shopping</li>
            <li className='item'>Verstärkter Wettbewerb mit ausländischen Konzernen</li>
            <li className='item'>Begrenzte Kundengeographie</li>
          </ul>
        </div>
        <div className='column'>
          <h3 className='sub-title'>
            Wir sind da, um den lokalen Apotheken trotz allem zu helfen, gutgehendes Geschäft zu entwickeln.
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
        max-width: 1440px;
        margin: auto;
        padding: 90px 60px;
      }
      .column {
        flex-basis: 100px;
        flex-grow: 1;
        margin: 0 20px;
      }
      .title {
        line-height: 50px;
        font-size: 40px;
        font-weight: 500;
        color: #2d2d34;
      }
      .sub-title {
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #2d2d34;
      }
      .list {
        padding: 0 0 0 26px;
        margin: 40px 0 0;
        list-style: none;
      }
      .item {
        position: relative;
        line-height: 24px;
        font-size: 18px;
        color: #2d2d34;
        opacity: 0.8;

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
