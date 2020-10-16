import {SectionTitle} from '../components/SectionTitle';
import {Dialog} from '../components/Dialog';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useState} from 'react';

const dialogs = [
  {
    question: 'Хочу поддержать локальный бизнес, а не международных гигантов',
    response:
      'Многие люди хотят поддержать бизнес в своем городе, а мы стремимся стать сервисом, который поможет им в этом.',
  },
  {
    question: 'Хочу поддержать локальный бизнес, Impsum',
    response:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit nullam tempor diam sem inceptos neque, enim vitae iaculis mauris fames.',
  },
  {
    question: 'Lorem не международных гигантов',
    response:
      'Viverra eu sem eget nibh cursus tortor nostra placerat, etiam pellentesque curabitur eros hendrerit condimentum class, dapibus tempor fusce gravida in dictum non.',
  },
  {
    question: 'Хочу поддержать, а не международных гигантов',
    response:
      'Facilisi orci luctus habitant venenatis accumsan enim conubia fringilla neque metus, netus cursus erat nullam leo scelerisque a turpis ultricies ante, sagittis litora curabitur elementum euismod lectus volutpat nisl semper.',
  },
];

export const Talk = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <SectionTitle dotColor='#fff' color='#fff'>
            Мы слышим о чем <br /> говорят наши клиенты
          </SectionTitle>
          <div className='chat-gallery'>
            <div className='dialogs'>
              {dialogs.map(({question, response}, i) => (
                <div
                  key={i}
                  className={'dialog-wrapper' + (i === currentIndex ? ' active' : ' inactive')}
                  style={{
                    transform: `translate(${i * -100}%, 0)`,
                  }}
                >
                  <Dialog question={question} isActive={i === currentIndex} response={response} />
                </div>
              ))}
            </div>
            <div className='controls'>
              <button
                type='button'
                className='controls-button'
                title='Previous'
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                <span className='controls-icon left' />
              </button>
              <button
                type='button'
                className='controls-button'
                title='Next'
                disabled={currentIndex === dialogs.length - 1}
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                <span className='controls-icon right' />
              </button>
            </div>
            <div className='slider-wrapper'>
              <HorizontalSlider count={dialogs.length} activeIndex={currentIndex} onClick={setCurrentIndex} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: #5bb75f;
        }
        .wrapper {
          position: relative;
          max-width: 1440px;
          padding: 86px 60px 80px;
          margin: auto;
        }
        .chat-gallery {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0;
          margin: 80px 0 0;
        }
        .controls {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-between;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        .controls-button {
          padding: 0;
          border: none;
          background: none;
          opacity: 0.5;

          &:hover {
            opacity: 1;
          }
        }
        .controls-icon {
          display: block;
          width: 48px;
          height: 48px;

          &.left {
            background: url('/icons/chevron-left.svg');
          }
          &.right {
            background: url('/icons/chevron-right.svg');
          }
        }
        .dialogs {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 40px 0 120px;
          margin-bottom: -20px;
          overflow: hidden;
        }
        .dialog-wrapper {
          width: 100%;
          flex-shrink: 0;

          &.active {
            z-index: 1;
          }

          &.inactive {
            pointer-events: none;
            user-select: none;

            animation: hidding 0.4s forwards;
          }
        }
        .slider-wrapper {
          position: relative;
          z-index: 1;
        }

        @keyframes hidding {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
