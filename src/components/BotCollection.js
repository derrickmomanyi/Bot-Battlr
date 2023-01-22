import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots}) {
     const displayBots = bots.map((bot) => (
      <BotCard key={bot.id} bot = {bot}/>
     ))
  return (
    <div className="ui four column grid">
      <div className="row">
        
        Collection of all bots
        {displayBots}
      </div>
    </div>
  );
}

export default BotCollection;
