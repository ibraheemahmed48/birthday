import { useState, useEffect, useRef } from 'react';
import BalloonSVG from '../../Components/BalloonSVG';
import ReactPlayer from 'react-player';
import { generateRandomColor } from '../../helper/generateRandomColor';
import useAppStore from '../../store/appStore';
import { YourDayModal } from './yourDayModal';
import '../../App.css'
import { IMAGE_BASE_URL } from '../../api';
import { Spin } from 'antd';
interface FloatingBalloonsProps {
    count: number;
}
const FloatingBalloons = ({ count }: FloatingBalloonsProps) => {
    const [scale, setScale] = useState(1);
    const [playSound, setPlaySound] = useState(false);
    const animationRef = useRef<number | null>(null);
    const { setIsOpenSound } = useAppStore()
    const [isYourDayModal, setIsYourDayModal] = useState(false)


    const [isImageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
        console.log('Background image loaded!');
    };
    const playSoundEffect = () => {
        setPlaySound(true);
        setTimeout(() => {
            setPlaySound(false);
        }, 1000);
    };
    const [balloons, setBalloons] = useState(
        Array.from({ length: count }).map((_, index) => ({
            id: index,
            color: generateRandomColor(),
            size: Math.random() * 50 + 50,
            position: {
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth,
            },
            velocity: {
                x: Math.random() * 2 - 1,
                y: Math.random() * 2 - 1,
            },
        }))
    );
    const handleClick = async (id: number) => {
        setBalloons((prevBalloons) =>
            prevBalloons.filter((balloon) => balloon.id !== id)
        );
        playSoundEffect()
    };


    useEffect(() => {
        const updatePositions = () => {
            setBalloons((prevBalloons) =>
                prevBalloons.map((balloon) => {
                    const newTop = balloon.position.top + balloon.velocity.y;
                    const newLeft = balloon.position.left + balloon.velocity.x;

                    const newVelocity = { ...balloon.velocity };
                    if (newTop <= 0 || newTop >= window.innerHeight) {
                        newVelocity.y = -newVelocity.y; // Update without mutation
                    }
                    if (newLeft <= 0 || newLeft >= window.innerWidth) {
                        newVelocity.x = -newVelocity.x; // Update without mutation
                    }

                    return {
                        ...balloon,
                        position: {
                            top: newTop,
                            left: newLeft,
                        },
                        velocity: newVelocity, // Use the updated velocity
                    };
                })
            );
            animationRef.current = requestAnimationFrame(updatePositions);
        };

        animationRef.current = requestAnimationFrame(updatePositions);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setScale(1);
        }, 200);
        setScale(1.3);
        return () => clearTimeout(timeout);

    }, [balloons.length]);


    useEffect(() => {
        if (balloons.length !== count) {
            setIsOpenSound(true)
        } else {
            setIsOpenSound(false)
        }
        if (balloons.length === 0) {
            setIsYourDayModal(true)
            setBalloons(
                Array.from({ length: 50 }).map((_, index) => ({
                    id: index,
                    color: generateRandomColor(),
                    size: Math.random() * 50 + 50,
                    position: {
                        top: Math.random() * window.innerHeight,
                        left: Math.random() * window.innerWidth,
                    },
                    velocity: {
                        x: Math.random() * 2 - 1,
                        y: Math.random() * 2 - 1,
                    },
                }))
            )
        }
    }, [balloons.length]);

    useEffect(() => {
        if (!isImageLoaded) {
            console.log("Image  not loaded");
        }

    }, [isImageLoaded])

    return (
        <>
            <YourDayModal
                isOpen={isYourDayModal}
            />
            <ReactPlayer
                url={`${IMAGE_BASE_URL}balloon-pop-48030.mp3`}
                playing={playSound}
                loop={false}
                muted={false}
                volume={1}
                height={0}
            />


            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${IMAGE_BASE_URL}FirstImagBg.jpg)`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Hidden img tag to preload the background */}
                <img
                    src={`${IMAGE_BASE_URL}FirstImagBg.jpg`}
                    alt="Background"
                    style={{ display: 'none' }}
                    onLoad={handleImageLoad}
                />
                {!isImageLoaded && <Spin size="large" style={{
                    position: 'absolute',
                    zIndex: 10000
                }} />}

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '40px',
                            color: '#22C55E',
                            paddingBottom: '30px',
                            fontFamily: 'Pacifico, cursive',
                        }}
                    >
                        Happy birthday🦉!
                    </h1>
                    <h1
                        style={{
                            fontSize: '40px',
                            color: '#FF68D9FF',
                            paddingBottom: '30px',
                            fontFamily: 'Pacifico, cursive',
                        }}
                    >
                        2003/1/12
                    </h1>
                    <div
                        style={{
                            fontSize: '80px',
                            color: '#22C55E',
                            userSelect: 'none',
                            paddingLeft: '40px',
                            paddingRight: '40px',
                            transform: `scale(${scale})`,
                            transition: 'transform 0.05s, box-shadow 0.05s',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '80%',
                            fontFamily: 'Pacifico, cursive',
                        }}>
                        <h1
                            style={{
                                fontSize: '80px',
                                color: '#22C55E',
                            }}
                        >
                            {count - balloons.length > 0 ? count - balloons.length : 0}
                        </h1>
                    </div>
                    <h1
                        style={{
                            fontSize: '16px',
                            color: '#FF68D9FF',
                            paddingBottom: '30px',
                            fontFamily: 'Pacifico, cursive',
                        }}
                    >
                        Try popping the balloons! 🎈
                    </h1>
                </div>
                {balloons.map((balloon) => (
                    <div
                        key={balloon.id}
                        style={{
                            position: 'absolute',
                            top: balloon.position.top,
                            left: balloon.position.left,
                            transform: 'translate(-50%, -50%)',
                            cursor: 'pointer',
                            pointerEvents: playSound ? 'none' : 'auto'
                        }}
                        draggable={false}
                        onClick={() => handleClick(balloon.id)}
                    >
                        <BalloonSVG color={balloon.color} size={balloon.size as unknown as string} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default FloatingBalloons;
