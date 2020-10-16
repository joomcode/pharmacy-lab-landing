type Props = {
  question: string;
  response: string;
  isActive: boolean;
};

export const Dialog = ({question, response, isActive = false}: Props) => (
  <>
    <div className='wrapper'>
      <div className={'message question' + (isActive ? ' active' : ' inactive')}>
        <span className='message-avatar' />
        <div className='message-bubble'>
          <p className='message-text'>{question}</p>
        </div>
      </div>
      <div className={'message response' + (isActive ? ' active' : ' inactive')}>
        <div className='message-bubble response'>
          <p className='message-text response'>{response}</p>
        </div>
        <span className='message-avatar response' />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 120px;

        &.active {
          animation: raise 1s;
        }
      }

      .message {
        display: flex;
        margin: 10px 0;

        &.response {
          align-self: flex-end;
        }

        &.question.active {
          animation: from-left 1s;
        }

        &.response.active {
          animation: from-right 1s;
        }
      }

      @keyframes from-left {
        from {
          transform: translate(-120px, 0);
          opacity: 0;
        }
        to {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
      @keyframes from-right {
        from {
          transform: translate(120px, 0);
          opacity: 0;
        }
        to {
          transform: translate(0, 0);
          opacity: 1;
        }
      }

      .message-avatar {
        display: flex;
        flex-grow: 0;
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: #fff;

        &::after {
          display: block;
          content: '';
          width: 25px;
          height: 23px;
          margin: auto;
          background: url('/icons/question.svg') no-repeat;
        }

        &.response::after {
          width: 26px;
          height: 38px;
          background: url('/icons/response.svg') no-repeat;
        }
      }
      .message-bubble {
        position: relative;
        width: 566px;
        padding: 35px 50px 40px;
        margin: 0 60px;
        border-radius: 6px;
        background: #fff;
        box-shadow: 0 44px 70px rgba(0, 0, 0, 0.15);

        &::after {
          position: absolute;
          display: block;
          top: 30%;
          left: -20px;
          content: '';
          width: 30px;
          height: 30px;
          margin-top: -15px;
          border-bottom: 15px solid #fff;
          border-radius: 0 0 0 15px;
        }

        &.response::after {
          left: unset;
          right: -20px;
          border-bottom: 15px solid #fff;
          border-radius: 0 0 15px 0;
        }
      }
      .message-text {
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #2d2d34;

        &.response {
          font-size: 18px;
          font-weight: unset;
          line-height: 24px;
          opacity: 0.8;
        }
      }
    `}</style>
  </>
);
