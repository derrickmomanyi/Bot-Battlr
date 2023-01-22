import React, { useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
      
   const [bots, setBots] = useState([])
   const [botArmy, setBotArmy] = useState([])

   useEffect(() => {
      fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots))
   }, [])
 
   if(!bots){
    return <h2>Just a while, be patient a little</h2>
   }

   function addBot(bot, army) {
    //army === true if bot is already in botArmy
    if (!botArmy.includes(bot)) {
        setBotArmy([...botArmy, bot])
    }
     else if (botArmy.includes(bot) && army) {
        setBotArmy(botArmy.filter(({id}) => id !== bot.id));
    }
}

  return (
    <div>
      <YourBotArmy botArmy = {botArmy} addBot = {addBot}/>
      <BotCollection bots = {bots} addBot = {addBot}/>
    </div>
  )
}

export default BotsPage;
