# Umbrella Or Sunglasses?

![Sunset Landscape](https://github.com/shane-os/umbrella-or-sunglasses/blob/master/assets/images/sunset-landscape.jpg)

## Contents
[UX (User Experience)](#ux-user-experience)
 * [Project Goals](#project-goals)
 * [User Goals](#user-goals)
 * [User Stories](#user-stories)
 * [Site Owner Goals](#site-owner-goals)
 * [User Requirements](#user-requirements)
 * [User Expectations](#user-expectations)

[Site Layout and Design](#site-layout-and-design)
  * [Wireframes](#wireframes)
  * [Icons](#icons)
  * [Images](#images)
  * [Colour Scheme](#colour-scheme)

[Technologies](#technologies)
  * [Programming Languages](#programming-languages)
  * [Libraries and Tools](#libraries-and-tools)

[Open Weather Map API](#open-weather-map-api)
  * [Fetch](#fetch) 

[Features](#features)
  * [Developed](#developed)
  * [Future Implementation](#future-implementation)

[Testing](#testing)

[Resolution of Bugs](#resolution-of-bugs)

[Deployment](#deployment)

[Accreditation and Gratitude](#accreditation-and-gratitude)

[References](#references)

## UX (User Experience):
#### Project Goals:
 * The purpose of this project is to create a website providing users with weather related information on their chosen city.
 * Various infographics and other content mediums will be available on the site to engage users and represent data in a meaningful manner that is applicable to their daily lives.

#### User Goals:
 * Retrieve weather related information for their area.
 * Understand the current weather conditions and prepare appropriately for them.
 * See the weather conditions for another chosen area.

#### User Stories:
 * As a user, I would like to find information about the weather conditions forecasted for my area.
 * As a user, I would like to find information about the weather conditions for the area that I am travelling to.
 * As a user, I would like to know if I need to take precautions based on the weather conditions forecasted. (e.g. umbrella, gloves, sunglasses)
 
#### Site Owner Goals:
 * As a site owner, I want to provide users with information on weather conditions in their chosen area.
 * As a site owner, I wish to present weather related information in an interesting and engaging way.
 * As a site owner, I would like to create an easy to navigate site to allow them to quickly and accurately obtain the information.

#### User Requirements:
 * Area search function operates correctly and promptly.
 * Up to date and accurate weather condition information is provided.
 * The weather condition information presented is easy to understand.
 * Site is easy to navigate.

#### User Expectations:
 * Information related to weather conditions is displayed in a visually appealing manner.
 * Data presented is clear and concise thus reducing potential for confusion.
 * Site internal links direct users to the expected destination link.
 * Celcius, Fahrenheit and Kelvin temperature conversions are reliable. 

![Am I Responsive Image](https://github.com/shane-os/umbrella-or-sunglasses/blob/master/assets/images/umbrella-or-sunglasses-amiresponsive.PNG)
## Site Layout and Design

Taking into account the expected user requirements for this website, I decided at the beginning that a single-page scrollable website would be more appropriate than a multi-page concept. This is to keep the website easier to navigate and more focused on its purpose: To provide users with accurate information on weather conditions in their chosen city in an efficient and appealling medium. 

#### Wireframes:

Initially the designs for the wireframes were created using pen and pencil. From these sketches wireframes were created using the Balsamic Wireframes Application. Three sets of wireframes were created for the following device types:

 * Mobile
 * Tablet
 * Desktop

The completed wireframes are stored [here](https://github.com/shane-os/umbrella-or-sunglasses/tree/master/Wireframes)

#### Icons:

The use of icons for this project is key to helping user's understand and appreciate the weather conditions in their area. The icons displayed will be differ depending on the weather conditions in their area. For example, if the wind speed is above 20km/hr a wind icon appears in the weather guidance section. Also, there are three thermometer icons, only one showing at a time depending on if the temperature is moderate, low or high.

All icons used in this project were from the Font Awesome collection.

#### Images

A variety of weather related images have been utilised in the making of the site. Images for weather conditions such as snow, rain and lightning were obtained amongst others. If statements were used to determine which image is use depending on the weather description ID  obtained from Open Weather API.

All images used are referenced at the end of this document.

#### Colour Scheme:

![Colour Palette](https://github.com/shane-os/umbrella-or-sunglasses/blob/master/assets/images/umbrella_or_sunglasses_colours.png)

For the aesthetics of the website, I decided to utilise colours associated with weather conditions.
 * #133C55 - Indigo Dye will be used for the header( incl. navigation bar) and footer, representing storms.
 * #91E5F6 - Sky Blue Crayola, conveying clear skies is planned for card titles.
 * #F1F6F8 - Alice Blue will be represent clouds and will be used for some container backgrounds.
 * #fcfbe4 - Snow White to imitate snow and winter will be utilised for the main background and some text.
 * #2C2B2C - Pitch Black will be used for the majority of text shown on the website.

## Technologies:
#### Programming Languages:
 * [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
 * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 * [JQuery](https://jquery.com/)
 
#### Libraries and Tools:
 * [Git](https://git-scm.com/)
 * [Github](https://github.com/)
 * [Gitpod](https://www.gitpod.io/)
 * [Font Awesome](https://fontawesome.com/)
 * [Bootstrap](https://getbootstrap.com/)
 * [Google Fonts](https://fonts.google.com/)
 * [SweetAlert2](https://sweetalert2.github.io/#usage)

## Open Weather Map API:
To display accurate weather information on the webpage when a user enters their chosen city into the search box, the site must make use of an API (Application Programming Interface). Open Weather Map was chosen as the API to be used for the project due to the detailed weather Fetchinformation it provides, reliability and high number of API calls allowed within a given timeframe (Up to 1,000,000 API calls per month at the free tier). This would allow the Umbrella or Sunglasses website to function optimally when accessed by potential users. The website can be accessed [here](https://openweathermap.org/)

#### Fetch:
The fetch utility within javascript was used to get the location entered into the search bar by the user, request the JSON data from the Open Weather API. If an error occurred through incorrect location name being entered into the search bar, the fetch function would catch the error. The JSON data is converted into a more readable format through this function.

## Features:

#### Developed:
 * Navigation Bar
 * Search Bar
 * Weather Display using Open Weather Map API
 * Weather Guidance Icons
 * Icon & Weather Description Modals
 * Change Temperature Metric Display


#### Future Implementation:
 * Multiple location display
 * Weather maps
 * Multiple days weather forecast

## Testing:

#### Internal Navigation:
Each navigation option was testing to make sure that the user was taken to the correct place on the website.

#### Search Bar Inputs:
A variety of named locations were entered into the search bar to make sure that the data retrieved was correct. This task was completed by comparing data received for a city with the data disaplyed when the city's current weather conditions are searched for on the Open Weather Map website. Random letters, numbers, etc. were entered into the searchbar to make sure that the incorrect location name function was activated. This notification would inform the user that they have misspelt their chosen location.

* The HTML code was passed through the W3C Validator. The errors that arose were in relation to the image and h3 elements. As the src attribtue are comppleted using IDs and Javascript no change would be required. A similar situation arises with the h3 element as its entry is decided by the javascript code.

* The CSS code was passed through the Jigsaw validator and the single typo found was corrected.

* The Javascript code was run through the JSHint validator and the main errors found were in relation to semi-colons. Once these errors were fixed the code was re-run and these errors were no longer present. 

## Resolution of Bugs:

The main issues encountered when creating this website were with regards to the use of the fetch utility in javascript and the conditional displaying of images, text and icons.

Initially I found the fetch function in javascript to be quite difficult to use. At the beginning when I was able to retrieve the JSON data I had trouble obtaining the exact weather data that I required. The data was show as "undefined" when shown in a browser. I overcame this confusion through the use of online materials such as the [javascript.info website](https://javascript.info/fetch) and the [w3 schools](https://www.w3schools.com/js/js_api_fetch.asp) orrganisation programming resources. 

When I used if statements inside functions and returned values to other functions and elements, I encountered some difficulty as often the incorrect icon or image would appear. The icons and images that appear are based on the weather data retrieved from the Open Weather Map API. I noticed that the mistake was occurring due to the lack of an extra equals sign in one part and the incorrect statements used for if statments in some function. Once these issues were resolved, the images and icons showed as expected.

## Deployment:
The Umbrella or Sunglasses website is stored as a repository on the Github site. The website was created using the Gitpod Integrated Development Environment. Utilising the Github Pages feature, the Umbrella or Sunglasses website was deployed. The process for deploying the site on Github pages was as follows:

1. Login to Github website with the necessary username and password.
2. Select settings option at the top of the navigation menu on the shane-os/umbrella-or-sunglasses Github repository page.
3. Go to the Github pages section.
4. Select the Master branch and confirm.

Result: The page is now live at: https://shane-os.github.io/umbrella-or-sunglasses/.

Alternatively, the Umbrella or Sunglasses project can be run locally:

1. Go to the Github repository for the Umbrella or Sunglasses.
2. Click on the Clone button with the Download icon and select the "HTTPS" option.
3. Copy the link shown.
4. Open your Integrated Development Environment (IDE) and open the Git Terminal if not already opened.
5. Using the change working directory command ($ cd filepath) enter the location where the cloned directory will be stored.
6. Finally, use the "$ git clone" command and paste the repository link from earlier.

## Accreditation and Gratitude:
* Firstly, I would like to thank my mentor Simen Daehlin for his support and honest feedback throughout this project.
* I wish to thank the [w3 schools](https://www.w3schools.com) for the wealth of programming knowledge uploaded and maintained by their team. This programming encyclopedia has helped me to improve my website by using features that it is unlikely that I would have found otherwise.
* Finally, I would like to express my gratitude for the community of students, tutors, mentors and others in the Slack channels for maintaining such a welcoming and supportive environment.

## References:
* HTML/CSS/Javascript Code:
1. Cards: Some code was taken from the [bootstrap website](https://getbootstrap.com/docs/4.0/components/card/) to allow text to overlay images.
2. Jumbotron: Similar to the above, some of the code used was inspired from the [bootstrap website](https://getbootstrap.com/docs/4.0/components/jumbotron/)
3. As mentioned previously, code from the [javascript.info website](https://javascript.info/fetch) and the [w3 schools](https://www.w3schools.com/js/js_api_fetch.asp) orrganisation. 

* Weather Data:
1. The Current Weather API is operated by [Open Weather Map](https://openweathermap.org/current)

* Images:
The images used in the project came from the following sources (Links are provided below):
1. [Sunset-Landscape](https://unsplash.com/photos/62t_kKa2YlA)
2. [City](https://unsplash.com/photos/9CPAjGVB378)
3. [Snow](https://pixabay.com/photos/snowfall-winter-snow-snowflakes-201496/)
4. [Rain](https://pixabay.com/photos/rain-stoppers-water-window-pane-1461288/)
5. [Lightning](https://pixabay.com/photos/lightning-thunder-lightning-storm-1056419/)
6. [Earth-Map-Night](https://pixabay.com/photos/earth-world-map-continents-land-11595/)
7. [Earth Night](https://pixabay.com/photos/earth-lights-environment-globe-1149733/)
8. [Clouds Night](https://unsplash.com/s/photos/cloudy-night)
