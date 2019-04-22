# ExhaustNotes
An API for car exhaust sounds.

## Overview
Love the sound of cars? ExhaustNotes is a collection of car sounds where you can search through a variety of different luxury and sports cars and hear their specific, distinct exhaust sound when the engine is revved.

### Features
- Browse through a variety of car exhaust noises
- Hear a cars specific exhaust, down to the trim level
- Search for your favorite car's sound
- Access any of the sounds, names or images via the open API
- Responsive/Mobile Friendly

### Technologies
- HTML/SCSS
- React
- Javascript
- Express
- MongoDB/Mongoose
- Node
- Axios

### Schema 
{
  carYear: Number,
  carMake: String,
  carModel: String,
  carTrim: String,
  carLink: String,
  carImage: String,
  carImageCredit: String,
  carImageCreditLink: String,
  carSound: String,
  carSoundCredit: String,
  carSoundCreditLink: String
}

### Credits
No Copyright Infringement Intended
- GIPHY, for the header gif
- Unsplash, for the card images
- Youtube, for card sounds
- TransparentTextures, for background image

---

### Bugs
- Player: when pause and scrub, starts clip over
- Safari Car Hover Z-indexing
- Menu section slide in transition glitchy

### For v2.0
- [X] Shoot to top button
- [X] Infinite Scroll of Cars + Searching the grid
- Slider for each car, so there can be multiple images
- Adding a 'Love' option for Cars to tally which cars users find best
- H1 Lights up as you type
- Randomize grid order every refresh
- Put meta/openGraph information

### For v3.0
- User Submitted CarGrid via contribution
- User Form: Upload using axios/express: get the file in given route and save it somehow
- Type Anywhere Search
- Background of site changed to image of car with color overlay
- More Car Information: Horsepower, Torque, Cylinder count, MSRP, Fuel Economy
- Car Logos via classes