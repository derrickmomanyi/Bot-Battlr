import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy}) {
    const displayArmyBots = botArmy.map((bot) => (
      <BotCard key = {bot.id} bot = {bot}/>
    ))

    console.log(botArmy);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
         
          Your Bot Army
           {displayArmyBots}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
