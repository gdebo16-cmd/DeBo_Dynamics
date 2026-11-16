import { useRef, useState } from 'react';
import {Lottie} from 'lottie-react';
import type { LottieHandle } from 'lottie-react';
import menuAnimation from '../../animations/menu.json';

interface MenuButtonProps {
  onToggle?: (open: boolean) => void;
  size?: number;
  className?: string;
}

const FIRST_FRAME = menuAnimation.ip; 
const LAST_FRAME = menuAnimation.op; 
const MID_FRAME = Math.round((FIRST_FRAME + LAST_FRAME) / 2);

export default function MenuButton({ onToggle, size = 44, className = '' }: MenuButtonProps) {
  const lottieRef = useRef<LottieHandle | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    const anim = lottieRef.current;
    if (!anim) return;

    const nextOpen = !open;
    setOpen(nextOpen);

    // { queue: false } = play this segment now (the boolean force flag).
    if (nextOpen) {
      anim.playSegments([FIRST_FRAME, MID_FRAME], { queue: false });
    } else {
      anim.playSegments([MID_FRAME, LAST_FRAME], { queue: false });
    }

    onToggle?.(nextOpen);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className={className}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', lineHeight: 0 }}
    >
      <Lottie
        lottieRef={lottieRef}
        src={menuAnimation} // renamed from animationData in this version
        autoplay={false}     // don't play on mount
        loop={false}         // one play per click
        style={{ width: size, height: size }}
      />
    </button>
  );
}