import { useState } from "react";
import Draggable from "react-draggable";
import { Card } from "./card";

import { IMAGE_BASE_URL } from "../../api";


export const DraggableCards = () => {
    const [endCards, setEndCards] = useState(false);
    const [cards, setCards] = useState([
        { id: 1, image: `${IMAGE_BASE_URL}Card0` },
        { id: 2, image: `${IMAGE_BASE_URL}Card1` },
        { id: 3, image: `${IMAGE_BASE_URL}Card2` },
        { id: 4, image: `${IMAGE_BASE_URL}Card3` },
        { id: 5, image: `${IMAGE_BASE_URL}Card4` },
    ]);

    const handleDismiss = (id: number) => {
        setCards(cards.filter((card) => card.id !== id));

        if (id === 5) {
            setEndCards(true);
            console.log("Sound effect played for card with id: ", id);
        } else {
            setEndCards(false)
        }
    };



    return (
        <div>
            {!endCards && <div>
                {cards.map((card, index) => (
                    <Draggable
                        position={{
                            x: 20,
                            y: 120,
                        }}
                        disabled={index !== 0}
                        key={card.id}

                        axis="both"
                        onStop={(_, data) => {
                            if (
                                data.x < -100 || data.x > 100 ||
                                data.y < -200 || data.y > 500
                            ) {
                                handleDismiss(card.id);
                            }
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#CCFDC3FF",
                                fontFamily: "Arial, sans-serif",
                                position: 'absolute',
                                top: `${index * -10}px`,
                                left: `${index * 10}px`,
                                zIndex: 3 - index,
                                width: "350px",
                                height: "500px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: '90px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                                transition: "transform 0.3ms ease-in-out",
                                cursor: "grab",
                                flexDirection: 'column',
                                justifyContent: 'center',
                                border: '3px solid white',
                            }}
                        >
                            <Card
                                image={card.image}
                            />
                        </div>
                    </Draggable>
                ))}
            </div>
            }



            {endCards &&
                <div
                    style={{
                        backgroundColor: "#D8FAD2FF",
                        width: "350px",
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: '90px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                        transition: "transform 0.3ms ease-in-out",
                        cursor: "grab",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        border: '3px solid white',
                        fontFamily: 'Tajawal, sans-serif',
                        direction: 'rtl',
                        textAlign: 'center',
                        padding: '10px',
                        margin: '10px auto',
                        lineHeight: '2',
                        fontSize: '14px',
                    }}
                >
                    🎉 <strong>كل عام وأنتِ بخير يا أغلى وأطيب إنسانة في حياتي</strong> 🎉
                    في هذا اليوم الخاص، أود أن أقول لكِ كم أنا فخور بك . أنتِ مثال حي للنجاح والإصرار، ويعجز اللسان عن وصف مدى تأثيرك الإيجابي على كل من حولك. قلبك الأبيض ونواياك الطيبة تجعلانكِ شخصًا استثنائيًا في كل تفاصيل حياتك.

                    أتمنى لكِ عامًا جديدًا مليئًا بالتوفيق والنجاح المستمر، وأن تحققي فيه جميع أحلامك وطموحاتك. أنا واثق أن الأفضل دائمًا في طريقك.

                    كما أتمنى لكِ الفرحة التي لا تنتهي، محاطةً بأهلكِ وأحبائكِ الذين يبادلونك نفس المحبة والاحترام. فوجودك في حياتهم هو نعمة، ومنحهم سعادة كبيرة لا تقدر بثمن.

                    <strong>كل عام وأنتِ مصدر الإلهام والبهجة في حياتي... والأجمل لم يأتِ بعد.</strong>🌹✨
                </div>


            }

        </div>

    )

}








