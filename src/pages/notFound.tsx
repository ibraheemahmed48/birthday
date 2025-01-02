import { useEffect, useRef, useState } from 'react';
import BalloonSVG from '../Components/BalloonSVG';
import { generateRandomColor } from '../helper/generateRandomColor';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../api';

const NotFound = () => {
    const animationRef = useRef<number | null>(null);
    const navigate = useNavigate();

    const [balloons, setBalloons] = useState(
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
    );



    useEffect(() => {
        const updatePositions = () => {
            setBalloons((prevBalloons) =>
                prevBalloons.map((balloon) => {
                    const newTop = balloon.position.top + balloon.velocity.y;
                    const newLeft = balloon.position.left + balloon.velocity.x;
                    if (newTop <= 0 || newTop >= window.innerHeight) {
                        balloon.velocity.y = -balloon.velocity.y;
                    }
                    if (newLeft <= 0 || newLeft >= window.innerWidth) {
                        balloon.velocity.x = -balloon.velocity.x;
                    }
                    return {
                        ...balloon,
                        position: {
                            top: newTop,
                            left: newLeft,
                        },
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
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',

            }}>
            <div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            >
                <img
                    src={`${IMAGE_BASE_URL}404%20Error-amico.svg`}
                    className="w-full max-w-md"
                    alt="Phone"
                />
                <h1 className="mt-4 text-center text-lg font-bold">
                    Sorry honey, this page is not found
                </h1>
                <Button
                    className="mt-4"
                    style={{
                        backgroundColor: '#22C55E',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Back
                </Button>
            </div>

            <div>
                {balloons.map((balloon) => (
                    <div
                        key={balloon.id}

                        style={{
                            position: 'absolute',
                            top: balloon.position.top,
                            left: balloon.position.left,
                            transform: 'translate(-50%, -50%)',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                        }}
                        draggable={false}
                    >
                        <BalloonSVG color={balloon.color} size={balloon.size as unknown as string} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotFound;

