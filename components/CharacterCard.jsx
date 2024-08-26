import Button from "./Button";
import characterCardData from "../constants/character-cards";
import { useState } from "react";
import Link from "next/link";

function getBackground(heroCard, cardNumber) {
    if (heroCard) {
        return `radial-gradient(75% 200% at 10% 30%, #fde6e2 20%, rgb(107, 207, 198) 100%)`
    }
    else {
        if (cardNumber <= 3) {
            return `radial-gradient(100% 100% at 10% 10%, #fde6e2 20%, #b2dfdb 100%)`

        }
        else {
            return `#f3eada`
        }
    }
}

function CardContent(props) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`relative h-full shadow animate__animated animate__bounceInUp transition-all ease-in duration-300 p-8 rounded-lg border-gray-200 
            ${props.withButton && `hover:shadow-lg hover:z-10`}
            ${props.heroCard ? `md:flex gap-10 items-center` : `flex flex-col item animate__delay-1s`}`}
            style={{
                background: getBackground(props.heroCard, props.cardNumber)
            }}
            onClick={() => {
                if (!props.withButton)
                    setIsClicked(!isClicked)
            }}
        >
            {!isClicked
                ?
                <>
                    {/* {props.heroCard &&
                        <>
                            <div className="absolute -top-2 left-10 px-1 py-3 bg-primary-200 rounded-full shadow-md animate__animated animate__bounceInDown" ></div>
                            <div className="absolute -top-2 right-10 px-1 py-3 bg-primary-200 rounded-full shadow-md animate__animated animate__bounceInDown" ></div>
                        </>
                    } */}

                    <div>
                        <span className={`max-w-[48px] text-secondary-300 material-icons-round ${props.heroCard ? `!text-5xl` : `!text-3xl`} pb-4`}>
                            {characterCardData[props.cardNumber - 1].cardIcon}
                        </span>
                    </div>
                    <div>
                        <h3
                            className={`font-semibold pb-2 ${props.heroCard ? `text-3xl` : `text-xl`}`}
                        >
                            {characterCardData[props.cardNumber - 1].cardTitle}
                        </h3>
                        <p
                            className={`${props.heroCard ? `text-xl text-gray-500` : `text-gray-500`}`}
                        >
                            {characterCardData[props.cardNumber - 1].cardSubTitle}
                        </p>
                        {props.withButton &&
                            <div className="mt-6">
                                {props.cardNumber <= 3
                                    ? <Button type={`${props.heroCard ? `primary` : `secondary`}`}>{characterCardData[props.cardNumber - 1].cardButtonText}</Button>
                                    : <Button type="tertiary">{characterCardData[props.cardNumber - 1].cardButtonText}</Button>
                                }
                            </div>
                        }
                    </div>
                </>
                :
                <div>
                    <h3 className="text-xl font-bold pb-2">You found the easter egg!</h3>
                    <p className="text-lg text-gray-500">We'll talk about this when you say hi!😉</p>
                </div>
            }
        </div >
    )
}

function CharacterCard(props) {
    return (
        <>
            {characterCardData[props.cardNumber - 1].linkTo?.slice(0, 5) == "https"
                ? <a href={characterCardData[props.cardNumber - 1].linkTo} target="_blank">
                    <CardContent {...props} />
                </a >
                : <Link href={`${props.withButton ? characterCardData[props.cardNumber - 1].linkTo : ``}`}>
                    {props.withButton
                        ? <a><CardContent {...props} /></a>
                        : <CardContent {...props} />
                    }
                </Link>}
        </>
    )
}

export default CharacterCard;