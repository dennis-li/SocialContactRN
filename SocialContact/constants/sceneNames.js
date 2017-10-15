/**
 * Created by wizard on 20/06/2017.
 */

const chessZone = "chessZone";
const gameDetail = "gameDetail";
const main = "main";

function InitSceneName(pageName) {
    switch (pageName){
        case 'main':
            return 'Index'
        case 'gameDetail':
            return 'GameDetail'
        case 'chessZone':
            return 'Chess'
        default :
            return 'Index'
    }
}

export default InitSceneName


