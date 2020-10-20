import {Icon} from './Icon';

type Props = {
  className?: string;
  dark?: boolean;
  whiteText?: boolean;
};

export const Logo = ({className, dark = false, whiteText = false}: Props) => (
  <>
    <div className={'logo' + (dark ? ' dark' : '') + ` ${className}`}>
      <Icon name='logo' width={109} height={20} color={dark ? '#000' : '#fff'} />
      <span className='split' />
      <span className={'logo-text' + (whiteText || !dark ? ' white' : '')}>Pharm Solutions</span>
    </div>
    <style jsx>{`
      .logo {
        display: flex;
        align-items: center;
      }
      .split {
        display: block;
        width: 1px;
        height: 20px;
        margin: 0 17px;
        background: rgba(255, 255, 255, 0.3);

        .dark & {
          background: rgba(45, 45, 52, 0.3);
        }
      }
      .logo-text {
        align-self: flex-start;
        line-height: 16px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        color: #2d2d34;

        &.white {
          color: #fff;
        }
      }
    `}</style>
  </>
);
