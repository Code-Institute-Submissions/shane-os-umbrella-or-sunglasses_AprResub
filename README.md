# Umbrella Or Sunglasses?

![Sunset Landscape](https://github.com/shane-os/umbrella-or-sunglasses/blob/master/assets/images/sunset-landscape.jpg)

## Contents
### UX (User Experience)
 * Project Goals
 * User Goals
 * User Stories
 * Site Owner Goals
 * User Requirements
 * User Expectations
### Site Layout & Design:
  * Wireframes
  * Icons
  * Images
  * Colour Scheme
### Technologies
  * Programming Languages
  * Libraries & Tools
### Open Weather Map API:
  * Fetch 
  * Current Weather
### Features
  * Developed
  * Future Implementation
### Testing
### Bugs
### Deployment
### Accreditation & Gratitude
### References

## UX (User Experience):
#### Project Goals:
 * The purpose of this project is to create a website providing users with weather related information on their desired geographical location.
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
 * Site is easy to navigate.

#### User Expectations:
 * Information related to weather conditions is displayed in a visually appealing manner.
 * Data presented is clear and concise thus reducing potential for confusion.
 * Site internal links direct users to the expected destination link.

## Site Layout and Design

Taking into account the expected user requirements for this website, I decided at the beginning that a single page scrollable website would be more appropriate than a multi-page concept. This is to keep the website easier to navigate and more focused on its purpose: To provide users with accurate information on weather conditions in their chosen area in an efficient and appealling medium. 

#### Wireframes:

Initially the designs for the wireframes were created using pen and pencil. From these sketches wireframes were created using the Balsamic Wireframes Application. Three sets of wireframes were created for the following device types:

 * Mobile
 * Tablet
 * Desktop

The completed wireframes are stored [here](https://github.com/shane-os/umbrella-or-sunglasses/tree/master/Wireframes)

#### Icons:

The use of icons for this project is key to helping user's understand and appreciate the weather conditions in their area. The icons displayed will be differ depending on the weather conditions in their area. For example, if the wind speed is above 20km/hr a wind icon appears in the weather guidance section. Also, there are three thermometer icons, only one showing at a time depending on if the temperature is moderate, low or high.

All icons used in this project were from the Font Awesome collection.



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
 * HTML
 * CSS
 * Javascript
 * JQuery
 
#### Libraries & Tools:
 * Git
 * Github
 * Gitpod
 * Font Awesome
 * Bootstrap

## Open Weather Map API:
To display accurate weather information on the webpage when a user enters their chosen city into the search box, the site must make use of an API (Application Programming Interface). Open Weather Map was chosen as the API to be used for the project due to the detailed weather information it provides, reliability and high number of API calls allowed within a given timeframe (Up to 1,000,000 API calls per month at the free tier). This would allow the Umbrella or Sunglasses website to function optimally when accessed by potential users.

## Features:

#### Developed:
 * Navigation Bar
 * Search Bar
 * Weather Display using Open Weather Map API
 * Weather Guidance Icons

#### Future Development:
 * Multiple location display
 * Weather maps
 * Multiple days weather forecast

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
