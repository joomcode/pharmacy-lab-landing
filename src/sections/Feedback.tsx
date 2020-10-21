import {SectionTitle} from '../components/SectionTitle';
import {FormEvent, useState} from 'react';

export const Feedback = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [additional, setAdditional] = useState('');

  const disable = isSending || isSent;

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (disable) {
      return;
    }

    if (!name.trim() && !email.trim() && !additional.trim()) {
      return;
    }

    setIsSending(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        additional,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed ${res.status} ${res.statusText}`);
        }

        return res.json();
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid response');
        }

        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        console.error('API error:', error);
        alert('Something went wrong, please try again later');
        setIsSending(false);
      });
  }

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='left'>
            <SectionTitle>Kontaktformular</SectionTitle>
            <p className='text'>
              Möchten Sie mit Joom Pharm Solutions zusammenarbeiten? Geben Sie Ihre Kontaktdaten an
            </p>
          </div>
          <form className='form' id='contact' onSubmit={onSubmit}>
            <input
              className='input'
              placeholder='Name'
              value={name}
              disabled={disable}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='input'
              placeholder='Email'
              value={email}
              disabled={disable}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className='input textarea'
              placeholder='Ihre Nachricht'
              value={additional}
              disabled={disable}
              onChange={(e) => setAdditional(e.target.value)}
            />
            <button className='send-button' disabled={disable}>
              Senden
            </button>
            {isSent ? <div className='thanks'>Danke für die Rückmeldung!</div> : null}
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
          position: relative;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 100px;
          max-width: 640px;
          min-width: 320px;
          padding: 24px 20px;
          margin: 0 auto;
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
        .thanks {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          line-height: 34px;
          font-size: 20px;
          font-weight: 500;
          color: #2d2d34;
          background: #fff;
        }
      `}</style>
    </>
  );
};
