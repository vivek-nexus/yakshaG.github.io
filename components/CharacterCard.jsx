import Button from "./Button";
import characterCardData from "../constants/character-cards";
import { useState } from "react";
import Link from "next/link";


function CardContent(props) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`relative shadow-lg animate__animated animate__bounceInUp transition-all ease-in-out duration-300 p-8 rounded-lg border border-gray-200 
            ${!isClicked && !props.heroCard ? `bg-white` : `bg-primary-50`}  
            ${props.withButton && `hover:shadow-xl hover:z-10`}
            ${props.heroCard ? `md:flex gap-10 items-center bg-primary-50` : `flex flex-col justify-center animate__delay-1s`}`}
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
                        <span className={`max-w-[48px] text-secondary-300 material-icons-round ${props.heroCard ? `md:!text-5xl !text-3xl` : `!text-3xl`} pb-4`}>
                            {characterCardData[props.cardNumber - 1].cardIcon}
                        </span>
                    </div>
                    <div>
                        <h3
                            className={`font-semibold pb-2 ${props.heroCard ? `md:text-3xl text-xl` : `text-xl`}`}
                        >
                            {characterCardData[props.cardNumber - 1].cardTitle}
                        </h3>
                        <p
                            className={`${props.heroCard ? `md:text-xl text-gray-500` : `text-gray-400`}`}
                        >
                            {characterCardData[props.cardNumber - 1].cardSubTitle}
                        </p>
                        {props.withButton &&
                            <div className="mt-6">
                                <Button type={`${props.heroCard ? `primary` : `secondary`}`}>{characterCardData[props.cardNumber - 1].cardButtonText}</Button>
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
        </div>
    )
}

function CharacterCard(props) {
    return (
        <>
            {props.cardNumber == 4
                ? <a href="https://www.linkedin.com/in/vivek-nexus/" target="_blank">
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