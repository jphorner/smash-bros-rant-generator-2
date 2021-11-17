# Super Smash Bros. Ultimate Rant Generator

Are you tired of writing out long tirades about your least favorite Super Smash Bros. characters? Good news - this app will save you time by doing it for you!

## Features

The Smash Bros. Ultimate Rant Generator allows you to:

- Select from a full list of characters featured in Super Smash Bros. Ultimate
- Generate a randomized rant incorporating your selected character
- Save your favorite rants for later viewing
- View your saved rants from a convenient Saved Rants page

This app is still in development, so expect more to come in the near future!

## Installation

This app will be deployed in the coming week.

For now, clone down this application and run it in your CL/Terminal using `npm start`.

## Usage Steps

- You will see a form prompting you to select a character upon visiting the landing page.
- Select a character and press 'Make Me Rage' to generate a rant card.
  - You may generate different rant cards for a single character by repeatedly clicking 'Make Me Rage'.
- Once you find a rant you like, click the ribbon icon in the upper-right of the card to save it.
  - **Note:** Saving a card will prompt it to re-render with a new rant, but your rant has been saved.
- To view your saved rants, click on the 'Saved Rants' link in the upper-right of the page.
  - You can save as many rants as you like; saving will simply lengthen the Saved Rants page.
- To generate new cards, simply click 'Home' to return to the form view.

## Project Information

### Goals

I decided to make this app as an in-joke for the competitive Super Smash Bros. community. Having played this game for years, I've seen my fair share of rants in online forums and at tournaments. Being given near-complete creative freedom for this project at Turing, I wanted to create something that would make people laugh. Although this project isn't finished yet, I plan on expanding its scope to make quippy, shareable content for all fans and competitors of this wonderful game. (Plus, this has been a blast to work on!)

### Timeline

I started by creating a simple React app which displayed a form to create randomly generated cards. Once the boilerplate was set up, I got to work writing down a few dozen phrases and clauses to pull from when creating each card. (Conjunction Junction, am I right?)

Next, I incorporated the [Super Smash Bros. Unofficial API by Leonardo Cabeza](https://smashbros-unofficial-api.vercel.app/) to pull in character names. I initially hit a snag when I failed to fetch the data due to a CORS error, so I made a separate file and pasted the API data in as a stopgap to use in the interim. Fortunately, I was able to get in contact with Leonardo to ask about the error and find a solution. He was kind enough to take another look at the API and offered me a solution which worked!

Now the application fetches directly from the API to store the character data in the app's state. Most of this data went unused, but I plan to write out more phrases that take advantage of it soon. Thank you again to Leonardo Cabeza for creating this API, and being willing to help me a full year after it was released!

For more information on future additions to this application, please read the Future Plans section below in this README.

### Challenges

Beyond the API call issue, I underestimated how time-consuming this project would be to put together. From styling to routing to rendering, each step provided a unique challenge for me to overcome.

One unexpected challenge was writing the rant phrases. I needed to create them in such a way that character names could be interpolated in the same syntactic positions, and changing that position required separate arrays with similar phrases that also used that position. Because of this, I was only able to get a few dozen phrases written. Now that the app is set up, however, I can spend more time on the rants themselves and reference character aspects like move sets.

## Technologies Used

- React
- React Router
- CSS
- Cypress Testing

## Future Plans

I plan to add the following in the near future:

- Longer rant cards
- Addition of specific character attributes
- Specific pronouns for each character so that statements feel more natural
- Other rant options (such as lambasting Nintendo for not buffing low-tiers)
- Local storage for saved rants
- A Total Randomization option to skip character selection
- Character icons on each card

## Contributions

- This app was developed by [Joshua Horner](https://github.com/jphorner)

- Unofficial Smash Bros. API by [Leonardo Cabeza](https://github.com/leocabeza/smashbros-unofficial-api)

- Project spec and rubric provided by the [Turing School of Software and Design](turing.edu)
