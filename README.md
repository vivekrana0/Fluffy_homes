# Project 4: Rental Bravo
![Banner](https://i.imgur.com/W5LoUou.png)
<br>

## Introduction

Rental Bravo is the latest Rental Market Webiste to hit the web. The purpose of the website is to allow people to loacte and rent thier next home. The website is designed to make it easy and painless for our customers to find the home of thier dreams for rent. The webiste also allows a great platform for landlords and realtors to host thier listing to find thier perfect tennant for thier perfect home.

Welcome to Rental Bravo, the website was created using React, Javascript and styled with Bootstrap. 
Please take a look at Rental Braco and enjoy the features available!
<br>

## Tech Stack

- <b>Mongoose</b>
- <b>Express</b>
- <b>React</b>
- <b>Node</b>
- <b>Bootstrap</b>
- <b>Amazon Web Services (AWS S3)</b>

## Getting Started

Lets get started!
Access the app through the link below:
### [Live Link](https://rental-bravo.herokuapp.com/)

## Features

### Rental Bravo
<img src='https://i.imgur.com/4FSR9j0.png'>

### Details Page
<img src='https://i.imgur.com/Pfx0DEE.png'>

### MapBox Geocoding API:

The Mapbox Geocoding API allows users to do forward geocoding operations. Forward Geocoding takes text in the form of an address or place and converts it to geographic coordinates (latitude/longitude). This Api allows us to auto-load the address when searching for listing in specific locations. 

<img src='https://i.imgur.com/ViIAAaW.png'>

### Listing and Favourite:
Rental Bravo allows its users to upload and delete their own posts, while also allowing users to favourite or unfavourite listings on the wedbiste.
<table>
  <tr>
    <td>My Post Page</td>
    <td>My Listing</td>
    <td>My Favourite Listings</td>
  </tr>
 </table>


## Code Examples


- The code snippet below is used to serach for specific listings based on the location input by the user. 

```javascript
async function search(req, res) {
  console.log(req.body.searchQuery);
  const query = req.body.searchQuery.toLowerCase().replace(/\s/g, "");
  let properties = [];
  let users = await User.find({});
  users.forEach((user) => {
    user.listProperty.forEach((property) => {
      const city = property.address
        .split(",")[1]
        .toLowerCase()
        .replace(/\s/g, "");
      if (city === query) {
        properties.push(property);
      }
    });
  });
  res.status(200).json(properties);
}
```

## Future enhancements

1. Add a messaging box to or email service to reach out to the property owner directly.
2. including filters to sort by specific parameters.

## Project Tools

### [Trello Board](https://trello.com/b/ToyzjjIN/rental-bravo)
### [ERD](https://lucid.app/lucidchart/bc5e2012-3ac7-43dc-b379-d251b8f4d81a/edit?invitationId=inv_79189c3b-26d9-4648-ab77-4fdf7faad281&referringApp=slack&page=0_0#)

## Team Members

[Vivek Patel](https://github.com/vivek1999patel)

[Vivek Rana](https://github.com/vivekrana0)

[Wasim Okadia](https://github.com/Wasimoak)
