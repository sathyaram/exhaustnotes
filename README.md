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

What I'd Like to Add:
- Car Submit Form that sends to my email
- Javascript animations for car hovering
- Rotating images for each car
- Photo Credit Field
- HP/Torque for each car

### Screenshots
![exhaustnotes-ss1](https://github.com/sathyaram/exhaustnotes/blob/master/frontend/public/images/exhaustnotes-ss1.png) "ExhaustNotes Screenshot 1"
![exhaustnotes-ss2](https://github.com/sathyaram/exhaustnotes/blob/master/frontend/public/images/exhaustnotes-ss2.png) "ExhaustNotes Screenshot 2"

### Technologies
- HTML
- CSS
- React
- Javascript
- Express
- Mongoose
- Node
- Axios

### Schemas
- Car
  - Car Year
  - Car Make
  - Car Model
  - Car Trim
  - Car Image
  - Car Sound
  - Car Credit
  - Car Link

### Credits
No Copyright Infringement Intended
- GIPHY, for the header gif
- Unsplash, for the card images
- Youtube, for card sounds
- TransparentTextures, for background image


### Each Car Has:
  - Car SVG
  - Car Year Selector
  - Car Make
  - Car Model
  - Car Trim
  - Car Slider
    - Image
    - Link Photo Credit

### For v1.0
[X] Put MongoDB on Lightsail Server
[X] Google Analytics/Tag Manager
[X] Create ExhaustNotes email account
[X] Buy and attach domain
- https
- Player Bug: when pause and scrub, starts clip over

### For v2.0
- Infinite Scroll of Cars + Searching the grid
- Slider for each car, so there can be multiple images
- Adding a 'Love' option for Cars to tally which cars users find best
- H1 Lights up as you type
- Randomize grid order every refresh

### For v3.0
- User Submitted CarGrid via contribution
- User Form: Upload using axios/express: get the file in given route and save it somehow
- Type Anywhere Search
- Background of site changed to image of car with color overlay
- More Car Information: Horsepower, Torque, Cylinder count, MSRP, Fuel Economy