
import { DraggableCards } from './DraggableCards';
import useAppStore from '../../store/appStore';
import { useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../api';
const SecondPage = () => {
    const { setIsOpenSound, setIsOpenSecondSound } = useAppStore();


    useEffect(() => {
        setIsOpenSound(false);
        setIsOpenSecondSound(true);
    }, []);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${IMAGE_BASE_URL}download.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                textAlign: 'center',
                paddingTop: '0px',
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex',
            }}
        >
            <div
                style={{
                    fontFamily: 'Pacifico, cursive',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '15px',
                    maxWidth: '600px',
                    margin: '20px auto',
                    fontSize: '20px',
                }}
            >
                It's <strong>Shahbaa</strong> day!
            </div>
            <DraggableCards />

            <div
                style={{
                    fontFamily: 'Pacifico, cursive',
                    textAlign: 'center',
                    padding: '20px',
                    maxWidth: '600px',
                    margin: '2px auto',
                    fontSize: '16px',
                }}
            >
                Happy Birthday to the most incredible blessing that ever happened to me. Your presence in my life is the greatest gift I could ever ask for            </div>
        </div>
    );
};

export default SecondPage;
