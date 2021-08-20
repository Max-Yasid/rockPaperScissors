export default function getGameItemProperties(gameItem){
    switch(gameItem){
        case "scissors":
            return {
                item: "scissors",
                color: "var(--scissors-from)",
                shadowColor: "var(--scissors-to)",
                src: "/images/icon-scissors.svg",
            }
        case "papper":
            return {
                item: "papper",
                color: "var(--papper-from)",
                shadowColor: "var(--papper-to)",
                src: "/images/icon-paper.svg",
            }
        case "rock":
            return {
                item: "rock",
                color: "var(--rock-from)",
                shadowColor: "var(--rock-to)",
                src: "/images/icon-rock.svg",
            }
        case "spock":
            return {
                item: "spock",
                color: "var(--cyan-from)",
                shadowColor: "var(--cyan-to)",
                src: "/images/icon-spock.svg",
            }
        case "lizard":
            return {
                item: "lizard",
                color: "var(--lizard-from)",
                shadowColor: "var(--lizard-to)",
                src: "/images/icon-lizard.svg",
            }
    }
}