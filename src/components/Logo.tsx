type Props = {
  dark?: boolean;
};

export const Logo = ({dark = false}: Props) => (
  <>
    <div className={'logo' + (dark ? ' dark' : '')}>
      <span className='logo-icon' />
      <span className='split' />
      <span className='logo-text'>Pharm Solutions</span>
    </div>
    <style jsx>{`
      .logo {
        display: flex;
        align-items: center;
      }
      .logo-icon {
        display: block;
        width: 109px;
        height: 20px;
        background: url('/logo.svg') no-repeat;

        .dark & {
          background: url('/logo_dark.svg') no-repeat;
        }
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
        color: #fff;

        .dark & {
          color: #2d2d34;
        }
      }
    `}</style>
  </>
);
