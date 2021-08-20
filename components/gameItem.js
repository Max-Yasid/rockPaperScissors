import Link from 'next/link';

export default function GameItem(props){
    return (
        <Link href={`/results/${props.item}`}>
            <div href={`/results/${props.item}`} className={`${props.className} gameItemContainer`}>
                <div className="colorShadow"></div>
                <img src={props.src} alt="game-item" />

                <style jsx>{`
                    .gameItemContainer{
                        border-radius: 300px;
                        padding: 20px;
                        width: ${props.containerDimension || "110px"};
                        height: ${props.containerDimension || "110px"};
                        border: ${props.borderWidth || "12px"} solid ${props.color};
                        background-color: rgb(218, 218, 218);
                        display: grid;
                        place-items: center;
                        box-shadow: inset 0px 5px rgb(190, 190, 190);
                        cursor: pointer;
                        position: relative;
                    }
                    .colorShadow{
                        width: calc(100% + 15px);
                        height: calc(100% + 15px);
                        box-shadow: 0px 7px 0 ${props.shadowColor};
                        border-radius: 100px;
                        z-index: -1;
                        position: absolute;
                    }
                    img{
                        width: ${props.imgDimension || "40px"};
                        height: ${props.imgDimension || "40px"};
                    }
                    @media only screen and (max-width: 375px){
                        .gameItemContainer{
                            border-radius: 100px;
                            padding: 20px;
                            width: ${props.containerMobileDimension || "80px"};
                            height: ${props.containerMobileDimension || "80px"};
                            border: ${props.mobileBorderWidth || "10px"} solid ${props.color};
                            background-color: rgb(218, 218, 218);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            box-shadow: inset 0px 5px rgb(190, 190, 190);
                        }
                        img{
                            width: ${props.imgMobileDimension || "28px"};
                            height: ${props.imgMobileDimension || "28px"};
                        }
                        .colorShadow{
                            width: calc(100% + 15px);
                            height: calc(100% + 15px);
                            box-shadow: 0px 5.5px 0 ${props.shadowColor};
                            border-radius: 100px;
                            z-index: -1;
                            position: absolute;
                        }
                    }
                `}</style>
            </div>
        </Link>
    );
}