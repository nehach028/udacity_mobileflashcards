# Mobile FlashCard Project

This is the final assessment project for Udacity's React Native course.
The "Mobile FlashCard" is a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Requirments

The application was created in expo snack(https://snack.expo.io/)
To run this app, you must first have an iPhone or andriod with the Expo App (https://expo.io/) installed 

## TL;DR

To get it installed and launched:

* Download or Clone the Repository
* install all dependencies with `yarn install`
* start the server with `yarn start`
* After starting the server press a to open Andriod Device or emulator, or i to open the iOS emulator or q to display a QR code to view the app on your iPhone/Andriod phone through the Expo App
* or hit the flashcard link (https://snack.expo.io/@nehach028/udacity_mobileflashcards) to run on browser through expo 


## App Functionality & Its Flows

Following are the various flows of app:

### Deck List View

When the App loads user would have a list of created decks which includes the name of each deck and the number of cards.

### Deck View

On selecting a Deck from DeckList view, user will navigate to the individual deck view which includes :
The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck

### New Question View

When the app loads user would have option to create new Deck.The NewQuestion view includes a form with fields for a question and answer, and a submit button.

Submitting the form adds the question to the deck.

###  Quiz View 

On clicking a start Quize button from the selected deck , User will have question along with a link to show the answer.
Pressing the 'Show Answer' link displays the answer.'Correct' or 'Incorrect' buttons allowed users to marks their guess.
When the last question is answered, a score is displayed along with buttons to either start the quiz over or go back to the Individual Deck view.

### Navigation

User receive a notification at a particular time if the user hasn't completed at least one quiz for that day.

