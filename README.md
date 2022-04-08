<!-- title / description (start) -->
# Nexwear

The project is built as a custom Shopify template, built on top of the [Shopify CLI](https://shopify.dev/themes/tools/cli) using [Shopify Theme lab](https://themelab.uicrooks.com/). It utilizes Webpack for optimized bundling of assets. You can find a breakdown of the libraries being used in the `package.json` file.

[Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) is partially being used. 

Javascript modules are handled with [Picoapp](https://github.com/estrattonbailey/picoapp). This library automatically instantiates JavaScript modules on specific DOM elements in a website if they exist on the page. Useful for Shopify and Wordpress sites. [Jquery](https://jquery.com/) is included by default and be accessed from any module.

## Requirements

You will need to following installed on your machine: 

* [Node](https://nodejs.org/en/) - I'm running v14.17.5
* [Shopify CLI](https://shopify.dev/themes/tools/cli#installation) - I have version 2.14.0 installed
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## Installation and Usage

Follow these steps to create a local version of the site. 

Make sure you're in your preferred work directory and from the terminal run: 
```bash
$ git clone https://github.com/techyscouts/nexwear.git
```

When the files are pulled from the repo, cd into the new project folder:
```bash
$ cd nexwear
```

Install the required packages: 
```bash
$ npm i
```


Log into shopify via the terminal: 
```bash
$ shopify login --store daily-fresh-club.myshopify.com
```

The terminal should open up a browser allowing you to login to the site. Make sure you have the correct credentials when doing this. 

You can confirm you are logged in to the correct store with: 
```bash
$ shopify store
```

After confirming you are logged in correctly, double check no additions have been added to the site through the Shopify theme editor by the client: 
```bash
$ npm run shopify:pull
```

You will be presented by a list of installed themes on the site. Select the live  theme so you know you're working with the most recent copy. This will download all the current files to your local copy. You can check if anything changed from the repo with a `git diff`.

Then create a development theme by running: 
```bash
$ npm start
```
It will take a few minutes for it to sync up the assets directory but you will then be presented 2 links, one is the development theme customizer and the other is the development theme.

## Deployment

After completing any dev work in the development theme, you can push the changes to a Shopify theme with: 
```bash
$ npm run deploy
```

Notes:
* This will override the theme you deploy to. So **MAKE SURE** to create a duplicate of the theme if you are unsure of anything. 
* Any changes you made in the development theme's customizer panel will need to be re-created in the new Shopify theme. 

