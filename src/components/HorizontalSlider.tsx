import {useCallback} from 'react';

type Props = {
  count: number;
  activeIndex?: number;
  dark?: boolean;
  onClick: (index: number) => void;
};

export const HorizontalSlider = ({count, activeIndex = 0, dark = false, onClick}: Props) => {
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
      <div className={'wrapper' + (dark ? ' dark' : '')}>
        {Array.from({length: count}).map((_, i) => (
          <button
            key={i}
            className='button'
            type='button'
            data-index={i}
            title={`Slide ${i + 1}`}
            disabled={activeIndex === i}
            onClick={onButtonClick}
          >
            <span className={'circle' + (activeIndex === i ? ' active' : '')} />
          </button>
        ))}
      </div>
      <style jsx>{`
        .wrapper {
          position: relative;
          display: flex;
        }
        .button {
          display: flex;
          width: 30px;
          height: 30px;
          padding: 0;
          border: none;
          background: none;
          margin: -8px 2px;
        }
        .circle {
          width: 14px;
          height: 14px;
          margin: auto;
          border: 2px solid rgba(0, 0, 0, 0.3);
          border-radius: 50%;

          &.active {
            border: none;
            background: #fff;

            .dark & {
              background: #5bb55f;
            }
          }
        }
      `}</style>
    </>
  );
};
