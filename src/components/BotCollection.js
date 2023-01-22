import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBot}) {


      const displayBots = bots.map((bot) => (
      <BotCard key={bot.id} bot = {bot} addBot = {addBot} army = {true}/>
     ))


  return (
    <div className="ui four column grid">
      <div className="row" >
        
        Collection of all bots
        {displayBots}
      </div>
    </div>
  );
}

export default BotCollection;
