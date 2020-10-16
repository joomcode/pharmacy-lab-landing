type Props = {
  top: number;
  left: number;
};

export const Dot = ({top, left}: Props) => (
  <>
    <span className='dot' style={{top: `${100 * top}%`, left: `${100 * left}%`}} />
    <style jsx>{`
      .dot {
        position: absolute;
        display: block;
        width: 36px;
        height: 36px;
        margin: -18px 0 0 -18px;
        border-radius: 50%;
        background: #ffe898;
        pointer-events: none;
      }
    `}</style>
  </>
);
