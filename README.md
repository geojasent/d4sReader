[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/geojasent/d4sReader">
<!--     <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>
  
<h3 align="center">d4sReader</h3>

  <p align="center">
    A RSS reader for Reddit that sends a notification to the user when a new comment is made.
    <br />
    <a href="https://github.com/geojasent/d4sReader"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/geojasent/d4sReader/issues">Report Bug</a>
    ·
    <a href="https://github.com/geojasent/d4sReader/issues">Request Feature</a>
  </p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

There are many Reddit RSS parsers out there that notifies you of a new thread, but I wanted one that notifies you when a new top level comment is made on a thread.
In my case I am using to parse the monthly Buy/Sell/Trade thread in r/flashlights.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript][Javascript.js]][Javascript-url]
* [![MongoDb][MongoDb.com]][MongoDB-url]
* [![Express][Express.js]][Express.js-url]
* [![NodeJS][NodeJS.js]][NodeJS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/geojasent/d4sReader.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter paste the rss URL ending to parse in `getFeed.js` (the URL should end in '.rss')
   ```js
   const feedUrl = 'ENTER YOUR RSS URL';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Continuously updated feed and webpage
- [ ] Push notification
- [ ] Reactjs user interface
    - [ ] Nested Feature

See the [open issues](https://github.com/geojasent/d4sReader/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jason Wong - [@twitter_handle](https://twitter.com/geojasent) - wongjason415@gmail.com

Project Link: [https://github.com/geojasent/d4sReader](https://github.com/geojasent/d4sReader)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/geojasent/d4sReader.svg?style=for-the-badge
[license-url]: https://github.com/geojasent/d4sReader/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[JavaScript.js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://www.javascript.com/
[NodeJS.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[MongoDB.com]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
