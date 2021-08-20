export default function GetGameResults(p1Item, p2Item){
    if(p1Item === "scissors" || p2Item === "scissors"){
        if(p1Item === "papper" || p2Item === "papper"){
            if(p1Item === "papper")
                return  { 
                    p1: "LOSE", 
                    p2: "WIN" 
                };
            return { 
                p1: "WIN", 
                p2: "LOSE" 
            };
        }
        if(p1Item === "rock" || p2Item === "rock"){
            if(p1Item === "rock")
                return { 
                    p1: "WIN",
                    p2: "LOSE"
                };
            return {
                p1: "LOSE",
                p2: "WIN",
            }
        }
        if(p1Item === "lizard" || p2Item === "lizard"){
            if(p1Item === "lizard")
                return {
                    p1: "LOSE",
                    p2: "WIN",
                }
            return {
                p1: "WIN",
                p2: "LOSE",
            }
        }
        if(p1Item === "spock" || p2Item === "spock"){
            if(p1Item === "spock")
                return {
                    p1: "WIN",
                    p2: "LOSE",
                }
            return {
                p1: "LOSE",
                p2: "WIN",
            }
        }
        if(p1Item === "scissors" && p2Item === "scissors")
            return {
                p1: "DRAW",
                p2: "DRAW",
            }
    }
    if(p1Item === "papper" || p2Item === "papper"){
        if(p1Item === "rock" || p2Item === "rock"){
            if(p1Item === "rock")
                return {
                    p1: "LOSE",
                    p2: "WIN",
                }
            return {
                p1: "WIN",
                p2: "LOSE",
            }
        }
        if(p1Item === "lizard" || p2Item === "lizard"){
            if(p1Item === "lizard")
                return {
                    p1: "WIN",
                    p2: "LOSE",
                }
            return {
                p1: "LOSE",
                p2: "WIN",
            }
        }
        if(p1Item === "spock" || p2Item === "spock"){
            if(p1Item === "spock")
                return {
                    p1: "LOSE",
                    p2: "WIN",
                }
            return {
                p1: "WIN",
                p2: "LOSE",
            }
        }
        if(p1Item === "papper" && p2Item === "papper")
            return {
                p1: "DRAW",
                p2: "DRAW",
            }
    }
    if(p1Item === "rock" || p2Item === "rock"){
        if(p1Item === "lizard" || p2Item === "lizard"){
            if(p1Item === "lizard")
                return {
                    p1: "LOSE",
                    p2: "WIN",
                }
            return {
                p1: "WIN",
                p2: "LOSE",
            }
        }
        if(p1Item === "spock" || p2Item === "spock"){
            if(p1Item === "spock")
                return {
                    p1: "WIN",
                    p2: "LOSE",
                }
            return {
                p1: "LOSE",
                p2: "WIN",
            }
        }
        if(p1Item === "rock" && p2Item === "rock")
            return {
                p1: "DRAW",
                p2: "DRAW",
            }
    }
    if(p1Item === "lizard" || p2Item === "lizard"){
        if(p1Item === "spock" || p2Item === "spock"){
            if(p1Item === "spock")
                return {
                    p1: "LOSE",
                    p2: "WIN",
                }
            return {
                p1: "WIN",
                p2: "LOSE",
            }
        }
        if(p1Item === "lizard" && p2Item === "lizard")
            return {
                p1: "DRAW",
                p2: "DRAW",
            }
    }
    if(p1Item === "spock" && p2Item === "spock"){
        return {
            p1: "DRAW",
            p2: "DRAW",
        }
    }
}