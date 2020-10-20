import {SectionTitle} from '../components/SectionTitle';
import {FormEvent, useState} from 'react';

export const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [additional, setAdditional] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    alert('submitting temporary not working');
  }

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='left'>
            <SectionTitle>Kontaktformular</SectionTitle>
            <p className='text'>Möchten Sie mit J-Pharmacy zusammenarbeiten? Geben Sie Ihre Kontaktdaten an</p>
          </div>
          <form className='form' id='contact' onSubmit={onSubmit}>
            <input className='input' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea
              className='input textarea'
              placeholder='Ihre Nachricht'
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
            />
            <button className='send-button'>Senden</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          margin: auto;
          padding: 50px 0 0;

          @media (min-width: 768px) {
            display: flex;
            padding: 76px var(--padding) 0;
          }
        }
        .text {
          margin: 60px 0 20px;
          line-height: 30px;
          font-size: 18px;
          font-weight: 500;
          color: #2d2d34;

          @media (min-width: 768px) {
            margin-bottom: 0;
            font-size: 20px;
          }
        }
        .left {
          padding: 0 var(--padding);

          @media (min-width: 768px) {
            flex-basis: 120px;
            flex-grow: 1;
            padding: 0;
            margin-right: 40px;
            border-bottom: 1px solid #ccc;
          }
        }
        .form {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 100px;
          max-width: 640px;
          min-width: 320px;
          padding: 24px 20px;
          border-radius: 6px;
          background: #fff;
          box-shadow: 0 30px 84px rgba(0, 0, 0, 0.05);

          @media (min-width: 768px) {
            padding: 80px 73px 70px;
            margin-top: -120px;
          }
        }
        .input {
          width: 100%;
          margin-bottom: 20px;
          padding: 20px;
          background: #f3f3f3;
          border: 1px solid #cccccc;
          border-radius: 4px;

          &.textarea {
            min-height: 160px;
            resize: vertical;
          }

          @media (min-width: 768px) {
            padding: 20px 30px;
          }
        }
        .send-button {
          height: 60px;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          text-transform: uppercase;
          color: #fff;
          background: #5bb75f;
        }
      `}</style>
    </>
  );
};
