import {useCallback} from 'react';

type Props = {
  count: number;
  activeIndex?: number;
  onClick: (index: number) => void;
};

export const Slider = ({count, activeIndex = 0, onClick}: Props) => {
  const onButtonClick = useCallback(
    (e) => {
      onClick(Number(e.currentTarget.dataset.index));
    },
    [onClick],
  );

  if (!count) {
    return null;
  }

  return (
    <>
      <div className='wrapper'>
        {Array.from({length: count}).map((_, i) => (
          <button key={i} className='button' type='button' data-index={i} onClick={onButtonClick}>
            <span className={'circle' + (activeIndex === i ? ' active' : '')} />
          </button>
        ))}
      </div>
      <style jsx>{`
        .wrapper {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 0;
          bottom: 0;
          z-index: 1;
        }
        .button {
          display: flex;
          width: 30px;
          height: 30px;
          padding: 0;
          border: none;
          background: none;
          margin: 2px -8px;
        }
        .circle {
          width: 14px;
          height: 14px;
          margin: auto;
          border: 2px solid #b2b2b2;
          border-radius: 50%;

          &.active {
            border: none;
            background: #5bb75f;
          }
        }
      `}</style>
    </>
  );
};
