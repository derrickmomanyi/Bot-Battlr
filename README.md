#  Code Challenge: Bot Battlr

## Table of Contents
This README consists of the Project Requirements, Setup, Author, Licences and a few explanations


## Project Requirements

For this project, I’ll be building out a React application where you
can custom build your own Bot Army!

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

## Setup

JSON server used to render the Bots;


Go to "https://json-bot-server.onrender.com/bots" . This is a deployed server



## Explanation

The step by step thought process has been commented in the respective components

The Component Hierarchy is;
App
   ├──BotsPage
      ├── BotCollection  ├── BotCard
      └── YourBotArmy    ├── BotCard
      
 1. Displayed the data to the BotCard component by passing props through:
 BotsPage => BotCollection => BotCard
Mapped the data to the component using .map() method completing the first deliverable


2. Added a bot to the YourBot Army component by creating a click function that spreads the selected bot by id and renders it to the DOM completing the second deliverable

3. Added an if statement to ensure that once the bot is clicked from the YourBitArmy component it is released back to the BotCard component completing the third deliverable

4. Added a delete metod to make sure once the delete button is clicked it deletes the bot from the DOM and server completing the last deliverable
         
## LINK
Here lies the link to the live site https://deluxe-travesseiro-786c2a.netlify.app/


## Author
Derrick Momanyi

Github: @derrickmomanyi

## License
Copyright © 2022 Derrick Momanyi This project is MORINGA SCHOOL licensed.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License
