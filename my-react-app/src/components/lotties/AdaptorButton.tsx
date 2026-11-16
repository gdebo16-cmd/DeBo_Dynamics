import { useRef, useState } from 'react';
import {Lottie} from 'lottie-react';
import type { LottieHandle } from 'lottie-react';
import ButtonAnimation from '../../animations/adapt.json';


interface AdaptButtonProps {
    onToggle?: (open: boolean) => void;
    size?: number;
    className?: string;
}

const FIRST_FRAME = ButtonAnimation.ip; 
const LAST_FRAME = ButtonAnimation.op; 
// const MID_FRAME = Math.round((FIRST_FRAME + LAST_FRAME) / 2); 

export default function AdaptButton({ onToggle, className= ''}: AdaptButtonProps) {
    const lottieRef = useRef<LottieHandle | null>(null);
    const [click, setClick] = useState<boolean>(false);

    
    const handleClick = (): void => {
        const anim = lottieRef.current;
        if (!anim) return;

        const nextClick = !click;
        setClick(nextClick);
        anim.playSegments([FIRST_FRAME, LAST_FRAME], { queue: false });
        onToggle?.(nextClick);
    };

    return (
    <button
        type='button'
        onClick={handleClick}
        className={className}
    >
      <Lottie
        lottieRef={lottieRef}
        src={ButtonAnimation} 
        autoplay={false}   
        loop={false}
        speed={2} 
      />
    </button>

    )
}