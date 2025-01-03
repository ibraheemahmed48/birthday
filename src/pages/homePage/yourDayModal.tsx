'use client'

import { Modal, Button } from 'antd';
import BalloonSVG from '../../Components/BalloonSVG'; // Assuming BalloonSVG is your custom component
import { useNavigate } from 'react-router-dom';
interface YourDayModalProps {
    isOpen: boolean;
}

export const YourDayModal = ({ isOpen }: YourDayModalProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/birthday/second');
    };

    return (
        <Modal
            open={isOpen}
            footer=""
            closable={false}
            centered
            width={400}
        >

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <div style={{ display: 'flex', padding: "10px 50px 10px 50px", }}>
                    <BalloonSVG color={"red"} size={"60"} />
                    <BalloonSVG color={"green"} size={"80"} />
                    <BalloonSVG color={"yellow"} size={"70"} />
                    <BalloonSVG color={"green"} size={"80"} />
                    <BalloonSVG color={"red"} size={"60"} />
                </div>
                <h2
                    style={{
                        fontWeight: 'bold',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: "25px",
                        color: "pink",
                        marginTop: "10px",
                        fontFamily: 'Pacifico, cursive',
                    }}>
                    Today is your
                    <span role="img" aria-label="celebration">day my girl!</span>
                    <span role="img" aria-label="celebration">🎉</span>
                </h2>
                <Button
                    style={{
                        borderColor: "green",
                        color: "green",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        fontSize: "18px",
                        marginTop: "10px",
                        cursor: "pointer",
                        fontFamily: 'Pacifico, cursive',
                    }}
                    onClick={handleClick}
                >
                    You ready? lets Goo!
                </Button>
            </div>
        </Modal >
    );
};


