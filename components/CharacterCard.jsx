import Button from "./Button";
import cardData from "../constants/character-cards";
import { useState } from "react";


function CharacterCard(props) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`relative ${!isClicked ? `bg-white` : `bg-primary-50`} shadow-lg animate__animated animate__bounceInUp ${props.withButton && `hover:shadow-2xl`} transition-all ease-in-out duration-300 p-8 rounded-lg border border-gray-200 ${props.heroCard ? `md:flex gap-10 items-center bg-primary-50` : `flex flex-col justify-center animate__delay-1s`}`}
            onClick={() => {
                if (!props.withButton)
                    setIsClicked(!isClicked)
            }}
        >
            {!isClicked
                ? <>
                    {props.heroCard &&
                        <>
                            <div className="absolute -top-2 left-10 px-1 py-3 bg-primary-200 rounded-full animate__animated animate__bounceInDown" ></div>
                            <div className="absolute -top-2 right-10 px-1 py-3 bg-primary-200 rounded-full animate__animated animate__bounceInDown" ></div>
                        </>
                    }

                    <h3 className={`text-primary-700 ${props.heroCard ? `md:text-5xl text-3xl` : `text-3xl`} pb-4`}>
                        {cardData[props.cardNumber - 1].cardIcon}
                    </h3>

                    <div>
                        <h3 className={`font-semibold pb-2 ${props.heroCard ? `md:text-3xl text-xl` : `text-xl`}`}>{cardData[props.cardNumber - 1].cardTitle}</h3>
                        <h3 className={`${props.heroCard ? `md:text-xl text-gray-500` : `text-gray-400`}`}>{cardData[props.cardNumber - 1].cardSubTitle}</h3>
                        {props.withButton &&
                            <div className="mt-6">
                                <Button type={`${props.heroCard ? `primary` : `secondary`}`}>{cardData[props.cardNumber - 1].cardButtonText}</Button>
                            </div>
                        }
                    </div>
                </>
                : <>
                    <h3 className="text-xl font-bold pb-2">Easter egg!</h3>
                    <p className="text-lg text-gray-500">Some skills are more than just a card on a website, aren't they? 😉</p>
                </>
            }
        </div>
    )
}

export default CharacterCard;