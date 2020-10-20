import {ReactNode} from 'react';

type Props = {
  isSmall?: boolean;
  color?: string;
  dotColor?: string;
  children: ReactNode;
};

export const SectionTitle = ({isSmall = false, color, dotColor, children}: Props) => (
  <>
    <h2 className={'title' + (isSmall ? ' small' : '')}>
      <span className='title-dot' style={dotColor ? {background: dotColor} : undefined} />
      <span className='title-text' style={color ? {color} : undefined}>
        {' '}
        {children}
      </span>
    </h2>
    <style jsx>{`
      .title {
        &.small {
          width: 370px;
        }
      }
      .title-dot {
        display: block;
        width: 26px;
        height: 26px;
        margin: 8px 18px 0 0;
        border-radius: 50%;
        background: #5bb75f;
        float: left;

        @media (min-width: 768px) {
          width: 36px;
          height: 36px;
          margin: 20px 24px 0 0;
        }
      }
      .title-text {
        line-height: 40px;
        font-size: 30px;
        font-weight: 500;
        color: #2d2d34;

        @media (min-width: 768px) {
          line-height: 70px;
          font-size: 50px;
        }
      }
    `}</style>
  </>
);
