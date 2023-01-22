import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBot, deleteBot}) {


      const displayBots = bots.map((bot) => (
      <BotCard key = {bot.id} bot = {bot} addBot = {addBot} inArmy = {false} deleteBot = {deleteBot}/>
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
