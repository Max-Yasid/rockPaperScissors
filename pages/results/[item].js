import Head from 'next/head';
import React from 'react';
import styles from '../../styles/item.module.css';
import GameItem from '../../components/gameItem';
import getGameItemProperties from '../../utils/gameItemProperties';
import Link from 'next/link';
import GetGameResults from '../../utils/getGameResults';

const gameItems = ["scissors", "papper", "rock", "lizard", "spock"];

export default class Resultsprops extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showHouseElections: false,
            gameItemProperties: getGameItemProperties(props.item),
            intervalForChangeItem: null,
            gameItemsIndex: 0,
            gameResults: null,
        };
        this.selectedItemProperties = getGameItemProperties(props.item);
    }

    //CHANGING GAME ITEMS ANIMATION
    showHouseElectionsChanging = () => {
        this.setState({ showHouseElections: true });
        
        this.setState({ intervalForChangeItem: setInterval(() => {
                let randomNumber = Math.round(Math.random() * 4);
                while(randomNumber === this.state.gameItemsIndex){
                    randomNumber = Math.round(Math.random() * 4);
                }
                let gameItem = gameItems[randomNumber];
                this.setState({ 
                    gameItemProperties: getGameItemProperties(gameItem),
                    gameItemsIndex: randomNumber,
                });
            }, 200),
        });
        setTimeout(this.showResults, 3000);
    }
    showResults = () => {
        clearInterval(this.state.intervalForChangeItem);
        let gameResults = GetGameResults(this.selectedItemProperties.item, this.state.gameItemProperties.item);
        this.updateScore(gameResults);
        this.setState({
            gameResults
        });
    }
    updateScore = (gameResults) => {
        if(gameResults.p1 === "WIN"){
            this.props.setScore(this.props.score + 1);
        }else if(gameResults.p1 === "LOSE"){
            if(this.props.score > 0){
                this.props.setScore(this.props.score - 1);
            }
        }
        localStorage.setItem('score', this.props.score);
    }
    componentDidMount = () => {
        setTimeout(this.showHouseElectionsChanging, 1000);
    };
    
    selectedItem =  <div className={`${styles.selectedItemtitle}  ${styles.p1Election} w-100 d-flex justify-content-center`}>
        YOU PICKED
    </div>;
                        
    selectedItemHouse =  <div className={`${styles.selectedItemtitle} ${styles.houseElection} m-0 w-100 d-flex justify-content-center`}>
        HOUSE PICKED
    </div>;
    render = () => {
        let gameResultsWidth;
        let p1Status;
        let p2Status;
        if(this.state.gameResults){
            gameResultsWidth = styles.widthFitContent;
            p1Status = this.state.gameResults.p1;
            p2Status = this.state.gameResults.p2;
        }else{
            gameResultsWidth = styles.width0;
        }
        let gameResult = this.state.gameResults?.p1 === "DRAW" ? "DRAW" : "YOU " + (this.state.gameResults?.p1 || "");
        let gameResultView = 
            <div className={`${styles.gameResult} ${gameResultsWidth} d-flex flex-column`}>
                <div className={styles.gameResultText}> { gameResult }</div>
                <Link href="/">
                    <button className={styles.playAgain}> PLAY AGAIN</button>
                </Link>
            </div>;
        return (
            <div className={` w-100`}>
                <Head>
                    <title>Rock, papers, scissors</title>
                    <meta name="description" content="Rock, papper, scissors, lizard, spock game. Frontend Mentor challenge." />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet" />
                </Head>
                <main>
                    <div className={styles.body}>
                        <div className={styles.gameResultsContainer}>
                            <div className={`d-flex flex-column justify-content-center align-items-center`}>
                                { this.props.deviceWidth >= 375 && this.selectedItem}
                                <div className={`${styles.selectedItem} ${styles.p1Election} w-100`}>
                                    <div className={`${styles.gameItemContainer}`}>
                                        {
                                            (p1Status === "WIN") && 
                                            <div className={`${styles.itemContainerShadow}`}></div>
                                        }
                                        <GameItem
                                            item={this.selectedItemProperties.item}
                                            color={this.selectedItemProperties.color}
                                            shadowColor={"none"} 
                                            className={styles.gameItem} 
                                            containerDimension="240px" 
                                            imgDimension="85px" 
                                            src={this.selectedItemProperties.src}
                                            borderWidth="27px"
                                            containerMobileDimension="110px"
                                            mobileBorderWidth="13px"
                                            imgMobileDimension="40px"
                                        />
                                    </div>
                                </div>
                                { this.props.deviceWidth <= 375 && this.selectedItem}
                            </div>

                            {this.props.deviceWidth > 375 && gameResultView}
                            
                            <div className={`d-flex flex-column justify-content-center align-items-center`}>
                                { this.props.deviceWidth >= 375 && this.selectedItemHouse}
                                <div className={`${styles.selectedItem} ${styles.houseElection} w-100`}>
                                    <div className={`${styles.gameItemContainer}`}>
                                        {
                                            (p2Status === "WIN") && 
                                            <div className={`${styles.itemContainerShadow}`}></div>
                                        }
                                        {
                                            this.state.showHouseElections ? <GameItem 
                                                    item={this.state.gameItemProperties.item} 
                                                    color={this.state.gameItemProperties.color} 
                                                    shadowColor={"none"} 
                                                    className={styles.gameItem} 
                                                    containerDimension="240px" 
                                                    imgDimension="85px" 
                                                    src={this.state.gameItemProperties.src}
                                                    borderWidth="27px"
                                                    containerMobileDimension="110px"
                                                    mobileBorderWidth="13px"
                                                    imgMobileDimension="40px"
                                                />
                                            : <div className={`${styles.houseItemPlaceholder}`}>
                                            </div>
                                        }
                                    </div>
                                </div>
                                { this.props.deviceWidth <= 375 && this.selectedItemHouse}
                            </div>
                        </div>
                        {this.props.deviceWidth <= 375 && gameResultView}
                    </div>
                </main>
            </div>
        );
    };
}

export function getStaticPaths(){
    let paths = [
        {
            params: {
                item: "rock",
            }
        },
        {
            params: {
                item: "papper",
            }
        },
        {
            params: {
                item: "scissors",
            }
        },
        {
            params: {
                item: "lizard",
            }
        },
        {
            params: {
                item: "spock",
            }
        },
    ]
    return {
        paths,
        fallback: false,
    }
}
export function getStaticProps({ params }){
    return {
        props: {
            item: params.item  
        }
    }
}
