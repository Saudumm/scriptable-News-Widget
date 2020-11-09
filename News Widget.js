// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: file-alt;
/********************************************
 *                                          *
 *      NEWS WIDGET (WORDPRESS AND RSS)     *
 *                                          *
 *        v1.1.3 - made by @saudumm         *
 *       https://twitter.com/saudumm        *
 *                                          *
 ********************************************
 
 Feel free to contact me on Twitter or
 GitHub, if you have any questions or issues.           

 GitHub Repo:
 https://github.com/Saudumm/scriptable-News-Widget
 
 ********************************************
 *                                          *
 *          INSTRUCTIONS / MANUAL           *
 *   For instructions on how to set up the  *
 *    widget please check the GitHub Repo   *
 *                                          *
 *             DOWNLOAD UPDATES             *
 *    To update News Widget  or download    *
 *     the latest version of the script     *
 *    check out  "News Widget Update.js"    *
 *            in my GitHub Repo             *
 *    Just add "News Widget Update.js" to   *
 *   Scriptable and run it to download the  *
 *      latest version of News Widget!      *
 *                                          *
 ********************************************
 
 WIDGET PARAMETERS: you can long press on the
 widget on your homescreen and edit
 parameters

 - Example:
   small|https://www.stadt-bremerhaven.de|Caschys Blog|true|background.jpg|false|true|Avenir-Heavy
   (displays a small layout widget for
   Caschys Blog with post images, a custom
   background image, no blur, a gradient over
   the image and with the font Avenir-Heavy)
 - Parameter order has to be: widget size,
   site url, site name, show post images,
   background image, blur background image,
   background image gradient, font name
 - Parameters have to be separated by |
 - You can omit all subsequent parameters,
   for example background image:
   small|https://www.stadt-bremerhaven.de|Caschys Blog
 - You can just set "small", "medium" or
   "large" as a parameter
 - Parameters that are not set will be set
   by the standard widget config
*/

// Check for script updates and get notified
// as soon as a new version is released
// true = check for script updates
// false = don't check for updates
const CHECK_FOR_SCRIPT_UPDATE = true

/* ============ CONFIG  START ============ */

/*******************************************/
/*                                         */
/*         STANDARD WIDGET CONFIG          */
/*                                         */
/*    Everything in this section can be    */
/*   overwritten with  Widget Parameters   */
/*                                         */
/*******************************************/

// Add Addresses (URLs/Links) of the
// website(s) and/or the RSS Feed(s) you want
// to fetch posts from.
// Format of a new line has to be:
//
// ["Link to site/feed", "Name of site"],
//
// Please note, the more sites you add, the
// longer the widgets needs to load all data.
// It's possible that the widget on your
// homescreen won't load anything or takes a
// very long time if you add too many links.
var PARAM_LINKS =
[
 ["https://venturebeat.com", "VentureBeat"],
 ["http://rss.cnn.com/rss/edition_world.rss", "CNN"],
]

// Name of the website/feed to display in the
// widget (at the top).
// If only one site is configured (in the
// code or parameters), the name of the site
// is used.
var PARAM_WIDGET_TITLE = "NEWS WIDGET";

// Note: custom background image files have
// to be in the Scriptable (iCloud) Files
// folder (same as the script .js file).
// Change to the filename of a custom
// background image (CASE SENSITIVE!) or set
// to "none" if you don't want a custom image
var PARAM_BG_IMAGE_NAME = "none";

// Blur the background image (custom or the
// news image in small widgets).
// "true" = blur the background image
// "false" = no blur
var PARAM_BG_IMAGE_BLUR = "true";

// "true" = gradient over the bg image
// "false" = no gradient
var PARAM_BG_IMAGE_GRADIENT = "true";

// Note: combining
// PARAM_SHOW_POST_IMAGES = true + small
// widget will ignore CONF_BG_GRADIENT_COLOR
// values in small config widgets.
// "true" = display images next to headlines
// "false" = no images next to posts
var PARAM_SHOW_POST_IMAGES = "true";


/*******************************************/
/*                                         */
/*         CONFIGURE LOOK AND FEEL         */
/*                                         */
/*         NOTE ON DYNAMIC COLORS:         */
/*  the first value is used in iOS light   */
/*   mode, second value will be used in    */
/*                dark mode                */
/*                                         */
/*   Values are hexadecimal color values   */
/*            Visit sites like             */
/*       https://htmlcolorcodes.com        */
/*      to find hex values for colors      */
/*                                         */
/*******************************************/

// Configure which time format to use
// true = 12h time format
// false = 24h time format
const CONF_12_HOUR = false

// Set the background color of your widget
var CONF_BG_COLOR =
    Color.dynamic(
      new Color("#fefefe"),
      new Color("#1c1c1e")
    );

// Configure to use a color gradient instead
// of the single background color (above)
// true = use a color gradient
// - (colors configured below)
// false = use a single color
// - (color configured above)
var CONF_BG_GRADIENT = false;

// gradient color from the top of the widget
var CONF_BG_GRADIENT_COLOR_TOP =
    Color.dynamic(
      new Color("#dddddd"),
      new Color("#222222")
    );
// gradient color to the bottom of the widget
var CONF_BG_GRADIENT_COLOR_BTM =
    Color.dynamic(
      new Color("#bbbbbb"),
      new Color("#444444")
    );

// gradient color image overlay from the top
// of the widget
// used if a background image is displayed
// and PARAM_BG_IMAGE_GRADIENT = "true"
const CONF_BG_GRADIENT_OVERLAY_TOP =
      Color.dynamic(
        new Color("#fefefe", 0.3),
        new Color("#1c1c1e", 0.3)
      );
// gradient color image overlay to the bottom
// of the widget
// used if a background image is displayed
// and PARAM_BG_IMAGE_GRADIENT = "true"
const CONF_BG_GRADIENT_OVERLAY_BTM =
      Color.dynamic(
        new Color("#fefefe", 1.0),
        new Color("#1c1c1e", 1.0)
      );


/*******************************************/
/*                                         */
/*          TEXT FONTS  AND SIZES          */
/*                                         */
/*             NOTE ON FONTS:              */
/*  Use System if you want to use the iOS  */
/*  system font (SF Pro) and choose your   */
/*               font weight               */
/*                                         */
/*        Font weight options are:         */
/*    ultralight, thin, light, regular,    */
/*  medium, semibold, bold, heavy, black   */
/*                                         */
/*   Refer to http://iosfonts.com if you   */
/*   want to use other fonts and replace   */
/*    System withyour chosen font name     */
/*  (e.g. Copperplate or Copperplate-Bold) */
/*                                         */
/*******************************************/

// Set the font, size and text color of the
// name at the top of the widget
var CONF_FONT_SITENAME = "System"
const CONF_FONT_WEIGHT_SITENAME = "bold";
const CONF_FONT_SIZE_SITENAME = 16;
const CONF_FONT_COLOR_SITENAME =
      Color.dynamic(
        new Color("#1c1c1e"),
        new Color("#fefefe")
      );

// Set the font, size and text color of the
// date and time line(s) in the widget
var CONF_FONT_DATE = "System"
const CONF_FONT_WEIGHT_DATE = "bold";
const CONF_FONT_SIZE_DATE = 12;
const CONF_FONT_COLOR_DATE =
      Color.dynamic(
        Color.darkGray(),
        Color.gray()
      );

// Set the font, size and text color of the
// news titles in the widget
var CONF_FONT_TITLE = "System"
const CONF_FONT_WEIGHT_TITLE = "bold";
const CONF_FONT_SIZE_TITLE = 12;
const CONF_FONT_COLOR_TITLE =
      Color.dynamic(
        new Color("#1c1c1e"),
        new Color("#fefefe")
      );

/* ============= CONFIG  END ============= */


/*******************************************/
/*                                         */
/*      DO NOT CHANGE ANYTHING BELOW!      */
/*                                         */
/*******************************************/

var SINGLE_SITE_MODE = false

var WIDGET_SIZE = (config.runsInWidget ? config.widgetFamily : "small");

// process widget parameters
if (args.widgetParameter) {
  let param = args.widgetParameter.split("|");
  if (param.length == 1) {
    SINGLE_SITE_MODE = (PARAM_LINKS.length == 1 ? true : false);
    if (SINGLE_SITE_MODE) {PARAM_WIDGET_TITLE = PARAM_LINKS[0][1];}
  }
  if (param.length >= 1) {WIDGET_SIZE = param[0];}
  if (param.length >= 2) {
    if (param[1].substring(0, 4) == "http") {
      PARAM_LINKS = [[param[1], ""]];
      SINGLE_SITE_MODE = true;
    } else {
      PARAM_LINKS = await loadTextFileToArray(param[1])
      if (PARAM_LINKS) {
        SINGLE_SITE_MODE = (PARAM_LINKS.length == 1 ? true : false);
        if (SINGLE_SITE_MODE) {PARAM_WIDGET_TITLE = PARAM_LINKS[0][1];}
      }
    }
  }
  if (param.length >= 3) {
    PARAM_WIDGET_TITLE = param[2];
  }
  if (param.length >= 4) {PARAM_SHOW_POST_IMAGES = param[3];}
  if (param.length >= 5) {PARAM_BG_IMAGE_NAME = param[4];}
  if (param.length >= 6) {PARAM_BG_IMAGE_BLUR = param[5];}
  if (param.length >= 7) {PARAM_BG_IMAGE_GRADIENT = param[6];}
  if (param.length >= 8) {
    CONF_FONT_SITENAME = param[7];
    CONF_FONT_DATE = param[7];
    CONF_FONT_TITLE = param[7];
  }
} else {
  SINGLE_SITE_MODE = (PARAM_LINKS.length == 1 ? true : false);
  if (SINGLE_SITE_MODE) {PARAM_WIDGET_TITLE = PARAM_LINKS[0][1];}
}

// set the number of posts depending on WIDGET_SIZE
var POST_COUNT = (WIDGET_SIZE == "small") ? 1 : (WIDGET_SIZE == "medium") ? 2 : 5;

// check for updates
var UPDATE_AVAILABLE = false;
if (CHECK_FOR_SCRIPT_UPDATE) {
  const CURRENT_VERSION = "v1.1.3"
  const LATEST_VERSION = await loadGitHubVersion();
  if (CURRENT_VERSION.replace(/[^1-9]+/g, "") < LATEST_VERSION.replace(/[^1-9]+/g, "")) {
    UPDATE_AVAILABLE = true;
  }
}

// check directories
checkFileDirs()

// create widget
const widget = await createWidget();

// show widget if run in app
if (!config.runsInWidget) {
  switch (WIDGET_SIZE) {
    case "small":
      await widget.presentSmall();
      break;
    case "medium":
      await widget.presentMedium();
      break;
    case "large":
      await widget.presentLarge();
      break;
  }
}

// set widget and end script
Script.setWidget(widget);
Script.complete();


/* ============ FUNCTIONS ============ */

// create the widget
async function createWidget() {
  const postData = await getData();

  const list = new ListWidget();
  
  const fontSiteName = await loadFont(CONF_FONT_SITENAME, CONF_FONT_WEIGHT_SITENAME, CONF_FONT_SIZE_SITENAME);
  const fontDate = await loadFont(CONF_FONT_DATE, CONF_FONT_WEIGHT_DATE, CONF_FONT_SIZE_DATE);
  const fontTitle = await loadFont(CONF_FONT_TITLE, CONF_FONT_WEIGHT_TITLE, CONF_FONT_SIZE_TITLE);
  
  // display name of the website
  const siteName = list.addText(PARAM_WIDGET_TITLE);
    
  siteName.font = fontSiteName
  siteName.textColor = CONF_FONT_COLOR_SITENAME;
  siteName.lineLimit = 1;
  siteName.minimumScaleFactor = 0.5;
  
  list.addSpacer();
  
  if (postData) {
    if (POST_COUNT == 1 || postData.length == 1) {
      // load widget background image (if PARAM_SHOW_POST_IMAGES = true or PARAM_BG_IMAGE_NAME is set)
      if (PARAM_SHOW_POST_IMAGES == "true" && PARAM_BG_IMAGE_NAME == "none") {
        if (postData.aPostIMGPaths[0] != "none") {
          list.backgroundImage = await loadLocalImage(postData.aPostIMGPaths[0]+(PARAM_BG_IMAGE_BLUR == "true" ? "-bg-blur" : "-bg"));
        }
        // draw gradient over background image for better readability
        CONF_BG_GRADIENT = true;
        CONF_BG_GRADIENT_COLOR_TOP = CONF_BG_GRADIENT_OVERLAY_TOP;
        CONF_BG_GRADIENT_COLOR_BTM = CONF_BG_GRADIENT_OVERLAY_BTM;
        
        // small shadow outline on PARAM_WIDGET_TITLE for better readability
        //siteName.shadowRadius = 1;
        //siteName.shadowColor = Color.dynamic(new Color("#ffffff", 0), new Color("#000000", 0));
      }
      
      const postStack = list.addStack();
      postStack.layoutVertically();
      
      if (!SINGLE_SITE_MODE) {
        const labelSiteName = postStack.addText(postData.aPostSiteNames[0]);
        labelSiteName.font = fontTitle;
        labelSiteName.textColor = CONF_FONT_COLOR_DATE;;
        labelSiteName.lineLimit = 1;
        labelSiteName.minimumScaleFactor = 0.5;
      }
      
      const labelDateTime = postStack.addText(await new Date(postData.aPostDates[0]).toLocaleString([], {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: (CONF_12_HOUR ? true : false)}));
      labelDateTime.font = fontDate;
      labelDateTime.textColor = CONF_FONT_COLOR_DATE;
      labelDateTime.lineLimit = 1;
      labelDateTime.minimumScaleFactor = 0.5;
      
      const labelHeadline = postStack.addText(postData.aPostTitles[0]);
      labelHeadline.font = fontTitle;
      labelHeadline.textColor = CONF_FONT_COLOR_TITLE;
      labelHeadline.lineLimit = 3;
      
      list.url = postData.aPostURLs[0];
    } else {
      if (POST_COUNT < postData.length) {POST_COUNT = postData.length;}
      
      const aStackRow = await new Array(POST_COUNT);
      const aStackCol = await new Array(POST_COUNT);
      const aLblSiteName = await new Array(POST_COUNT);
      const aLblPostDate = await new Array(POST_COUNT);
      const aLblPostTitle = await new Array(POST_COUNT);
      const aLblPostIMG = await new Array(POST_COUNT);
      
      let i;
      for (i = 0; i < POST_COUNT; i++) {
        aStackRow[i] = list.addStack();
        aStackRow[i].layoutHorizontally();
        aStackRow[i].url = postData.aPostURLs[i];
        
        aStackCol[i] = aStackRow[i].addStack();
        aStackCol[i].layoutVertically();

        aLblPostDate[i] = aStackCol[i].addText((SINGLE_SITE_MODE ? "" : postData.aPostSiteNames[i]+" - ")+await new Date(postData.aPostDates[i]).toLocaleString([], {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: (CONF_12_HOUR ? true : false)}));
        aLblPostDate[i].font = fontDate;
        aLblPostDate[i].textColor = CONF_FONT_COLOR_DATE;
        aLblPostDate[i].lineLimit = 1;
        aLblPostDate[i].minimumScaleFactor = 0.5;
        
        aLblPostTitle[i] = aStackCol[i].addText(postData.aPostTitles[i]);
        aLblPostTitle[i].font = fontTitle;
        aLblPostTitle[i].textColor = CONF_FONT_COLOR_TITLE;
        aLblPostTitle[i].lineLimit = 2;
        
        if (PARAM_SHOW_POST_IMAGES == "true" && postData.aPostIMGPaths[i] != "none") {
          aStackRow[i].addSpacer();
          aLblPostIMG[i] = aStackRow[i].addImage(await loadLocalImage(postData.aPostIMGPaths[i]));
          aLblPostIMG[i].imageSize = new Size(45,45);
          aLblPostIMG[i].cornerRadius = 8;
          aLblPostIMG[i].rightAlignImage();
        }
        
        if (i < POST_COUNT-1) {list.addSpacer();}
      }
    }
  } else {
    siteName.textColor = Color.white();
    
    const sad_face = list.addText(":(")
    sad_face.font = Font.regularSystemFont(config.widgetFamily === "large" ? 190 : 60);
    sad_face.textColor = Color.white();
    sad_face.lineLimit = 1;
    sad_face.minimumScaleFactor = 0.1;
    
    list.addSpacer();
    
    const err_msg = list.addText("Couldn't load data");
    err_msg.font = Font.regularSystemFont(12);
    err_msg.textColor = Color.white();
    
    CONF_BG_COLOR = new Color("#1f67b1");
    CONF_BG_GRADIENT = false;
    PARAM_BG_IMAGE_NAME = "none";
  }
  
  if (UPDATE_AVAILABLE) {
    const updateMsg = list.addText("Script Update available on GitHub");
    updateMsg.font = Font.lightSystemFont(9);
    updateMsg.textColor = Color.white();
    updateMsg.lineLimit = 1;
    updateMsg.minimumScaleFactor = 0.1;
    updateMsg.url = "https://github.com/Saudumm/scriptable-News-Widget"
  }
  
  // widget background (image, single color or gradient)
  if (PARAM_BG_IMAGE_NAME != "none") {
    const customBGImage = await loadBGImage(PARAM_BG_IMAGE_NAME, PARAM_BG_IMAGE_BLUR);
    if (customBGImage != "not found") {
      list.backgroundImage = customBGImage;
      
      if (PARAM_BG_IMAGE_GRADIENT == "true") {
        // draw gradient over background image for better readability
        const gradient = new LinearGradient();
        gradient.locations = [0, 1];
        gradient.colors = [CONF_BG_GRADIENT_OVERLAY_TOP, CONF_BG_GRADIENT_OVERLAY_BTM];
        list.backgroundGradient = gradient;
      }
      
      // small shadow outline on PARAM_WIDGET_TITLE for better readability
      //siteName.shadowRadius = 1;
      //siteName.shadowColor = Color.dynamic(new Color("#ffffff", 0), new Color("#000000", 0));
    } else {
      list.backgroundColor = CONF_BG_COLOR;
    }
  } else if (CONF_BG_GRADIENT == true) {
    const gradient = new LinearGradient();
    gradient.locations = [0, 1];
    gradient.colors = [CONF_BG_GRADIENT_COLOR_TOP, CONF_BG_GRADIENT_COLOR_BTM];
    list.backgroundGradient = gradient;
  } else {
    list.backgroundColor = CONF_BG_COLOR;
  }
  
  return list;
}

// get data from all websites and extract necessary data
async function getData() {
  try {
    const aData = await new Array();
    for (iLink = 0; iLink < PARAM_LINKS.length; iLink++) {
      if (PARAM_LINKS[iLink][0].substring(0, 7) != "http://" && PARAM_LINKS[iLink][0].substring(0, 8) != "https://") {
        PARAM_LINKS[iLink][0] = "https://"+PARAM_LINKS[iLink][0]
      }
      if (PARAM_LINKS[iLink][0].slice(-1) == "/") {PARAM_LINKS[iLink][0] = PARAM_LINKS[iLink][0].slice(0, -1);}
      if (await isJSON(PARAM_LINKS[iLink][0]+"/wp-json/wp/v2/posts?per_page=1")) {
        // WordPress JSON
        try {
          const loadedJSON = await new Request(PARAM_LINKS[iLink][0]+"/wp-json/wp/v2/posts?per_page=5").loadJSON();
                      
          let loadPosts = (loadedJSON.length >= 5) ? 5 : loadedJSON.length
                    
          let iPost;
          for (iPost = 0; iPost < loadPosts; iPost++) {
            let postDate = loadedJSON[iPost].date;
            let postDateSort = await new Date(postDate).toLocaleString(["fr-CA"], {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"});
            
            let postTitle = loadedJSON[iPost].title.rendered;
            postTitle = formatPostTitle(postTitle);
            
            let postURL = loadedJSON[iPost].guid.rendered;
            
            let postIMGURL = await getMediaURL(PARAM_LINKS[iLink][0], loadedJSON[iPost].featured_media, loadedJSON[iPost].id);
                        
            aData.push([postDateSort, postDate+"|||"+postTitle+"|||"+postURL+"|||"+postIMGURL+"|||"+PARAM_LINKS[iLink][1]]);
          }
        } catch(err) {
         log(err);
        }
      } else {
        // RSS Feeds
        try {
          const loadRSSFeed = await new Request(PARAM_LINKS[iLink][0]).loadString();

          const aRSSItems = await new Array();
          let itemValue = null;
          let currentItem = null;
          let searchForImage = true;
          let xmlParser = new XMLParser(loadRSSFeed);
          xmlParser.didStartElement = (name, elementContent) => {
            itemValue = "";
            if (name == "entry" || name == "item") {
              currentItem = {};
              searchForImage = true;
            }
            
            // possibel image values in element name
            if ((name.substring(0, 6) == "media:" || name == "enclosure") && searchForImage) {
              if (elementContent.url != null && currentItem != null) {
                let imgLink = elementContent.url.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp)"?/i);
                if (imgLink && imgLink.length == 3) {
                  imgLink = imgLink[1]+imgLink[2];
                  currentItem["image"] = imgLink;
                  searchForImage = false;
                }
              }
            }
          }
          xmlParser.didEndElement = name => {
            const hasItem = currentItem != null;
            
            // possible url location
            if (hasItem && name == "id") {
              currentItem["id"] = itemValue;
            }
            
            // possible url location
            if (hasItem && name == "link") {
              currentItem["link"] = itemValue;
            }
            
            // title value
            if (hasItem && name == "title") {
              currentItem["title"] = itemValue;
            }
            
            // published date
            if (hasItem && (name == "published" || name == "pubDate")) {
              currentItem["published"] = itemValue;
            }
            
            // possible image link location
            if (hasItem && name == "image" && searchForImage) {
              let imgLink = itemValue.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp)"?/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              }
            }
            
            // possible image link location
            if (hasItem && name.includes("content")) {
              let imgLink = itemValue.match(/src="(https?\:\/\/.*?\.)(jpe?g|png|bmp).*?"/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              }
            }
            
            // possible image link location
            if (hasItem && name == "description") {
              let imgLink = itemValue.match(/src="(https?\:\/\/.*?\.)(jpe?g|png|bmp).*?"/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              }
            }
            
            // end of item/entry block
            if (name == "entry" || name == "item") {
              aRSSItems.push(currentItem);
              currentItem = null;
            }
          }
          xmlParser.foundCharacters = str => {
            itemValue += str;
          }
          xmlParser.didEndDocument = () => {}
          await xmlParser.parse();
                    
          let loadPosts = (aRSSItems.length >= 5) ? 5 : aRSSItems.length
          
          for (iRSS = 0; iRSS < loadPosts; iRSS++) {
            let rssDate = "none";
            let rssDateSort = "none";
            let rssTitle = "none";
            let rssURL = "none";
            let rssIMGURL = "none";

            if (aRSSItems[iRSS].published != null) {
              rssDate = aRSSItems[iRSS].published;
              rssDateSort = await new Date(rssDate).toLocaleString(["fr-CA"], {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"});
            }
            
            if (aRSSItems[iRSS].title) {rssTitle = aRSSItems[iRSS].title;}
                        
            if (aRSSItems[iRSS].id) {
              rssURL = aRSSItems[iRSS].id;
            } else if (aRSSItems[iRSS].link) {
              rssURL = aRSSItems[iRSS].link;
            }
                        
            if (aRSSItems[iRSS].image) {
              // double check if link is image link
              let rssIMGRegEx = await aRSSItems[iRSS].image.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp)"?/i);
              if (rssIMGRegEx && rssIMGRegEx.length == 3) {
                rssIMGURL = rssIMGRegEx[1]+rssIMGRegEx[2];
              }
            }
                          
            aData.push([rssDateSort, rssDate+"|||"+rssTitle+"|||"+rssURL+"|||"+rssIMGURL+"|||"+PARAM_LINKS[iLink][1]]);
          }

        } catch(err) {
          log(err);
        }
      }
    }
    
    if (aData.length >= 1) {
      // sort all post according to date
      aData.sort(function sortFunction(a, b) {
        if (a[0] === b[0]) {
          return 0;
        } else {
          return (a[0] < b[0]) ? -1 : 1;
        }
      })
      // reverse sorting - new to old date
      aData.reverse()
            
      const POSTS_TO_LOAD = (aData.length >= 5) ? 5 : aData.length;
      
      const aDates = await new Array(POSTS_TO_LOAD);
      const aTitles = await new Array(POSTS_TO_LOAD);
      const aURLs = await new Array(POSTS_TO_LOAD);
      const aIMGURLs = await new Array(POSTS_TO_LOAD);
      const aIMGPaths = await new Array(POSTS_TO_LOAD);
      const aSiteNames = await new Array(POSTS_TO_LOAD);
      const aFileNames = await new Array(POSTS_TO_LOAD);
      
      for (iNewPost = 0; iNewPost < POSTS_TO_LOAD; iNewPost++) {
        const aStrSplit = aData[iNewPost][1].split("|||")
                
        if (aStrSplit[0] != "none") {
          aDates[iNewPost] = await new Date(aStrSplit[0]);
        } else {
          aDates[iNewPost] = await Date.now();
        }
        
        aTitles[iNewPost] = aStrSplit[1];
        aTitles[iNewPost] = formatPostTitle(aTitles[iNewPost]);
        
        aURLs[iNewPost] = aStrSplit[2];

        aSiteNames[iNewPost] = aStrSplit[4];
        
        if (PARAM_SHOW_POST_IMAGES == "true") {
          aIMGURLs[iNewPost] = aStrSplit[3];
          if (aIMGURLs[iNewPost] != "none") {
            let fileID = await hashCode(aIMGURLs[iNewPost])
            fileID = Math.abs(fileID)

            aFileNames[iNewPost] = await getFileName(aSiteNames[iNewPost], fileID);
            
            const addBGImage = (iNewPost == 0 ? true : false);
            aIMGURLs[iNewPost] = await encodeURI(aIMGURLs[iNewPost]);
            aIMGURLs[iNewPost] = await aIMGURLs[iNewPost].replaceAll("%25", "%"); // hack for some image URLs with %

            aIMGPaths[iNewPost] = await downloadPostImage(aFileNames[iNewPost], aIMGURLs[iNewPost], addBGImage);
          } else {
            aIMGPaths[iNewPost] = "none";
          }
        }
      }
      
      if (PARAM_SHOW_POST_IMAGES == "true") {
        aFileNames.push(aFileNames[0]+"-bg");
        aFileNames.push(aFileNames[0]+"-bg-blur");
        await cleanUpImages(aFileNames);
      }
      
      return {
        aPostDates: aDates,
        aPostTitles: aTitles,
        aPostURLs: aURLs,
        aPostIMGPaths: aIMGPaths,
        aPostSiteNames: aSiteNames
      };
    } else {
      return null;
    }
  } catch(err) {
    logError(err);
    return null;
  }
}

// load a text file with links and convert to a PARAM_LINKS array
async function loadTextFileToArray(textFile) {
  try {
  const fm = FileManager.iCloud();
  const docDir = fm.documentsDirectory();
  const filePath = fm.joinPath(docDir, textFile);

  if (fm.fileExists(filePath) && fm.isFileStoredIniCloud(filePath)) {
    await fm.downloadFileFromiCloud(filePath);
    var strTextFile = await fm.readString(filePath);
    strTextFile = strTextFile.split(/\r?\n/)
    if (strTextFile.length >= 1) {
      const aLinks = new Array();
      for (iText = 0; iText < strTextFile.length; iText++) {
        let aStrData = strTextFile[iText].split("|");
        if (aStrData.length == 1) {
          if (aStrData[0].substring(0, 4) == "http") {aLinks.push([aStrData[0], "News"]);}
        } else if (aStrData.length > 1) {
          if (aStrData[0].substring(0, 4) == "http") {aLinks.push([aStrData[0], aStrData[1]]);}
        }
      }
      return aLinks;
    } else {
      return null;
    }
  } else {
    return null;
  }
  } catch(err) {
    log(err);
    return null;
  }
}

// check if the url leads to a json file
async function isJSON(url) {
  try {
    let testJSON = await new Request(url).loadJSON();
    if (testJSON.reason == "Not Found") {return false;}
  } catch(err) {
    return false;
  }
  return true;
}

// get the featuredMedia image URL
async function getMediaURL(siteURL, featuredMedia, postID) {
  let featuredMediaJSONURL = siteURL+"/wp-json/wp/v2/media/"+featuredMedia;
  let loadedMediaJSON = await new Request(featuredMediaJSONURL).loadJSON();
  let mediaURL = loadedMediaJSON.source_url;
  
  if (mediaURL == undefined || mediaURL == "undefined") {
    // search for other images
    featuredMediaJSONURL = siteURL+"/wp-json/wp/v2/posts/"+postID;
    loadedMediaJSON = await new Request(featuredMediaJSONURL).loadJSON();
    mediaURL = loadedMediaJSON.jetpack_featured_media_url;
    if (mediaURL == undefined || mediaURL == "undefined") {
      return "none";
    } else {
      mediaURL = mediaURL.match(/(http?s.*\.)(jpe?g|png|bmp)/i)
      mediaURL = mediaURL[1]+""+mediaURL[2];
      return await encodeURI(mediaURL);
    }
  } else {
    mediaURL = mediaURL.match(/(http?s.*\.)(jpe?g|png|bmp)/i)
    mediaURL = mediaURL[1]+""+mediaURL[2];
    return await encodeURI(mediaURL);
  }
  return "none";
}

// set the filename of the post image (site name + image id)
function getFileName(siteName, id) {
  let widgetTitle = PARAM_WIDGET_TITLE.replace(/[^a-zA-Z1-9]+/g, "").toLowerCase();
  siteName = siteName.replace(/[^a-zA-Z1-9]+/g, "").toLowerCase();
  return widgetTitle+"-"+siteName+"-"+id;
}

// download the post image (if it doesn't already exist)
async function downloadPostImage(fileName, url, addBGImage) {
  const fm = await FileManager.local();
  const cacheDir = await fm.cacheDirectory();
  
  const imgPath = await fm.joinPath(cacheDir+"/saudumm-news-widget-data/image-cache", fileName);
  const tempDir = await fm.temporaryDirectory()
  const tempPath = await fm.joinPath(tempDir, fileName);

  // check if file already exists
  if (!addBGImage && fm.fileExists(imgPath)) {
    return imgPath;
  } else if (!addBGImage && !fm.fileExists(imgPath)) {
    // download, resize, crop and store image
    let req = await new Request(url);
    let loadedImage = await req.load();
    // write image and read again (it's smaller that way???)
    await fm.write(tempPath, loadedImage);
    loadedImage = await fm.readImage(tempPath);
    loadedImage = await resizeImage(loadedImage, 150);
    loadedImage = await cropImageToSquare(loadedImage);
    await fm.writeImage(imgPath, loadedImage);
    await fm.remove(tempPath);
    return imgPath;
  }
  
  if (addBGImage) {
    const imgPathBG = imgPath+"-bg"
    const imgPathBGBlur = imgPath+"-bg-blur"
    
    if (fm.fileExists(imgPath) && fm.fileExists(imgPathBG) && fm.fileExists(imgPathBGBlur)) {
      return imgPath;
    } else {
      // download image
      let req = await new Request(url);
      let loadedImage = await req.load();
      // write image and read again (it's smaller that way???)
      await fm.write(tempPath, loadedImage);
      loadedImage = await fm.readImage(tempPath);

      if (await Math.min(loadedImage.size.height, loadedImage.size.width) > 500) {
        loadedImage = await resizeImage(loadedImage, 500);
      }

      // resize, crop and store image
      if(!fm.fileExists(imgPath)) {
        let loadedSmallImage = await resizeImage(loadedImage, 150);
        loadedSmallImage = await cropImageToSquare(loadedSmallImage);
        await fm.writeImage(imgPath, loadedSmallImage);
      }
      
      // store original image
      if (!fm.fileExists(imgPathBG)) {
        await fm.writeImage(imgPathBG, loadedImage);
      }
      
      // store blurred resized original image
      if (!fm.fileExists(imgPathBGBlur)) {
        let loadedImageBlur = await blurImage(loadedImage)
        await fm.writeImage(imgPathBGBlur, loadedImageBlur);
      }
      
      await fm.remove(tempPath);
      
      return imgPath;
    }
  }
  return "none";
}

// load post image from file path
async function loadLocalImage(imgPath) {
  const fm = FileManager.local();
  
  if (fm.fileExists(imgPath)) {
    const imgFile = await fm.readImage(imgPath);
    return imgFile;
  }
}

// search for and load a local (or iCloud) background image
async function loadBGImage(imageName, optBlur) {
  const fm = FileManager.local();
  let fmiCloud;
  try {
    fmiCloud = FileManager.iCloud();
  } catch(err) {
    // no iCloud, no BG Image
    return "not found";
  }
  
  const cacheDir = fm.cacheDirectory();
  const iCloudDocDir = fmiCloud.documentsDirectory();
  const bgIMGiCloudDocPath = fmiCloud.joinPath(iCloudDocDir, imageName);
  const bgIMGiCloudWPPath = fmiCloud.joinPath(iCloudDocDir+"/wallpaper", imageName);
  const bgIMGWPCachePath = fm.joinPath(cacheDir+"/saudumm-news-widget-data/wallpaper-cache", imageName);
  
  if (optBlur == "true" && fm.fileExists(bgIMGWPCachePath+"-blur")) {
    return await fm.readImage(bgIMGWPCachePath+"-blur");
  } else {
    if (optBlur == "true") {
      if (fmiCloud.fileExists(bgIMGiCloudDocPath)) {
        if (fmiCloud.isFileStoredIniCloud(bgIMGiCloudDocPath)) {await fmiCloud.downloadFileFromiCloud(bgIMGiCloudDocPath);}
        let imgToBlur = await fmiCloud.readImage(bgIMGiCloudDocPath);
        imgToBlur = await resizeImage(imgToBlur, 300)
        imgToBlur = await blurImage(imgToBlur);
        await fm.writeImage(bgIMGWPCachePath+"-blur", imgToBlur);
        return imgToBlur;
      } else if (fmiCloud.fileExists(bgIMGiCloudWPPath)) {
        if (fmiCloud.isFileStoredIniCloud(bgIMGiCloudWPPath)) {await fmiCloud.downloadFileFromiCloud(bgIMGiCloudWPPath);}
        let imgToBlur = await fmiCloud.readImage(bgIMGiCloudWPPath);
        imgToBlur = await resizeImage(imgToBlur, 300)
        imgToBlur = await blurImage(imgToBlur);
        await fm.writeImage(bgIMGWPCachePath+"-blur", imgToBlur);
        return imgToBlur;
      } else {
        return "not found";
      }
    } else {
      if (fmiCloud.fileExists(bgIMGiCloudDocPath)) {
        return await fmiCloud.readImage(bgIMGiCloudDocPath);
      } else if (fmiCloud.fileExists(bgIMGiCloudWPPath)) {
        return await fmiCloud.readImage(bgIMGiCloudWPPath);
      } else {
        return "not found";
      }
    }
  }
}

// check if all folders are available and create them if needed
function checkFileDirs() {
  // Create new FileManager and set data dir
  const fm = FileManager.local();
  const cacheDir = fm.cacheDirectory();
  const imgCacheDir = cacheDir+"/saudumm-news-widget-data/image-cache";
  const imgCacheDirWP = cacheDir+"/saudumm-news-widget-data/wallpaper-cache";
  
  if (!fm.fileExists(imgCacheDir)) {fm.createDirectory(imgCacheDir, true);}
  if (!fm.fileExists(imgCacheDirWP)) {fm.createDirectory(imgCacheDirWP, true);}
  
  return;
}

// cleanup post image files (if older than 7 days)
function cleanUpImages(aFileNames) {
  const fm = FileManager.local();
  const cacheDir = fm.cacheDirectory();
  const imgCacheDir = cacheDir+"/saudumm-news-widget-data/image-cache";
  
  const aFiles = fm.listContents(imgCacheDir);
  
  const site_id = PARAM_WIDGET_TITLE.replace(/[^a-zA-Z1-9]+/g, "").toLowerCase();
  
  let aFilesSite = new Array();
  
  for (i = 0; i < aFiles.length; i++) {
    if (aFiles[i].substring(0, site_id.length) === site_id) {aFilesSite.push(aFiles[i]);}
  }
  
  for (i = 0; i < aFilesSite.length; i++) {
    if (!aFileNames.includes(aFilesSite[i])) {
      let path = fm.joinPath(imgCacheDir, aFilesSite[i]);
      let fileDate = fm.creationDate(path);
      let dateNow = Date.now();
      let dateDiffDays = Math.round((dateNow-fileDate)/1000/60/60/24);
      if (Math.abs(dateDiffDays) > 7) {
        fm.remove(path);
      }
    }
  }
  return;
}

// create a hash from a string
function hashCode (str){
  var hash = 0;
  if (str.length == 0) return hash;
  for (cHash = 0; cHash < str.length; cHash++) {
    char = str.charCodeAt(cHash);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

// format the post title and replace all html entities with characters
function formatPostTitle(strHeadline) {
  strHeadline = strHeadline.trim();
  strHeadline = strHeadline.replaceAll("&quot;", '"');
  strHeadline = strHeadline.replaceAll("&amp;", "&");
  strHeadline = strHeadline.replaceAll("&lt;", "<");
  strHeadline = strHeadline.replaceAll("&gt;", ">");
  strHeadline = strHeadline.replaceAll("&apos;", "'");
  strHeadline = strHeadline.replaceAll("&#034;", '"');
  strHeadline = strHeadline.replaceAll("&#038;", "&");
  strHeadline = strHeadline.replaceAll("&#039;", "'");
  strHeadline = strHeadline.replaceAll("&#060;", "<");
  strHeadline = strHeadline.replaceAll("&#062;", ">");
  strHeadline = strHeadline.replaceAll("&#338;", "Œ");
  strHeadline = strHeadline.replaceAll("&#339;", "œ");
  strHeadline = strHeadline.replaceAll("&#352;", "Š");
  strHeadline = strHeadline.replaceAll("&#353;", "š");
  strHeadline = strHeadline.replaceAll("&#376;", "Ÿ");
  strHeadline = strHeadline.replaceAll("&#710;", "ˆ");
  strHeadline = strHeadline.replaceAll("&#732;", "˜");
  strHeadline = strHeadline.replaceAll("&#8211;", "–");
  strHeadline = strHeadline.replaceAll("&#8212;", "—");
  strHeadline = strHeadline.replaceAll("&#8216;", "‘");
  strHeadline = strHeadline.replaceAll("&#8217;", "’");
  strHeadline = strHeadline.replaceAll("&#8218;", "‚");
  strHeadline = strHeadline.replaceAll("&#8220;", "“");
  strHeadline = strHeadline.replaceAll("&#8221;", "”");
  strHeadline = strHeadline.replaceAll("&#8222;", "„");
  strHeadline = strHeadline.replaceAll("&#8224;", "†");
  strHeadline = strHeadline.replaceAll("&#8225;", "‡");
  strHeadline = strHeadline.replaceAll("&#8230;", "…");
  strHeadline = strHeadline.replaceAll("&#8240;", "‰");
  strHeadline = strHeadline.replaceAll("&#8249;", "‹");
  strHeadline = strHeadline.replaceAll("&#8250;", "›");
  strHeadline = strHeadline.replaceAll("&#8364;", "€");
  strHeadline = strHeadline.replaceAll("<![CDATA[", "");
  strHeadline = strHeadline.replaceAll("]]>", "");
  return strHeadline;
}

// get the chosen font for widget texts
function loadFont(fontName, fontThickness, fontSize) {
  let font = Font.boldSystemFont(fontSize);
  if (fontName == "System") {
    switch (fontThickness) {
      case "ultralight":
        font = Font.ultraLightSystemFont(fontSize);
        break;
      case "thin":
        font = Font.thinSystemFont(fontSize);
        break;
      case "light":
        font = Font.lightSystemFont(fontSize);
        break;
      case "regular":
        font = Font.regularSystemFont(fontSize);
        break;
      case "medium":
        font = Font.mediumSystemFont(fontSize);
        break;
      case "semibold":
        font = Font.semiboldSystemFont(fontSize);
        break;
      case "bold":
        font = Font.boldSystemFont(fontSize);
        break;
      case "heavy":
        font = Font.heavySystemFont(fontSize);
        break;
      case "black":
        font = Font.blackSystemFont(fontSize);
        break;
    }
  } else {
    font = new Font(fontName, fontSize);
  }
  return font;
}

// load the latest script version number from GitHub
async function loadGitHubVersion() {
  try {
    const latestVersion = await new Request("https://raw.githubusercontent.com/Saudumm/scriptable-News-Widget/main/version.txt").loadString();
    return latestVersion;
  } catch(err) {
    return CURRENT_VERSION;
  }
}

// blurs an image
async function blurImage(img) {
  /*
   * A big THANK YOU to Mario Klingemann for the Blur Code and Max Zeryck for the WebView Code
   * code taken and modified from: https://github.com/mzeryck/Widget-Blur
   * Follow @mzeryck on Twitter: https://twitter.com/mzeryck
   */
  
  // defines the blur strength in relation to the image resolution
  const blurStrength = Math.floor((img.size.height*img.size.width)/18000);
  if (blurStrength == 0) {blurStrength = 1;}
  
  const js = `
    /*
     StackBlur - a fast almost Gaussian Blur For Canvas
     Version:   0.5
     Author:    Mario Klingemann
     Contact:   mario@quasimondo.com
     Website:   http://quasimondo.com/StackBlurForCanvas/StackBlurDemo.html
     Twitter:   @quasimondo
     In case you find this class useful - especially in commercial projects -
     I am not totally unhappy for a small donation to my PayPal account
     mario@quasimondo.de
     Or support me on flattr:
     https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript
     Copyright (c) 2010 Mario Klingemann
     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:
     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
    */
    var mul_table = [512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
                     454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
                     482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
                     437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
                     497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
                     320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
                     446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
                     329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
                     505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
                     399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
                     324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
                     268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
                     451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
                     385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
                     332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
                     289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
    
    var shg_table = [ 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
                     17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
                     19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
                     20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
                     21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                     21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
                     22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                     22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
                     23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                     23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                     23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                     23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                     24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                     24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                     24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                     24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];
    
    function stackBlurCanvasRGB(id, top_x, top_y, width, height, radius) {
      if (isNaN(radius) || radius < 1) {return;}
      radius |= 0;
      
      var canvas  = document.getElementById(id);
      var context = canvas.getContext("2d");
      var imageData;
      
      try {
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch(e) {
        alert("Cannot access image");
        throw new Error("unable to access image data: " + e);
      }
      
      var pixels = imageData.data;
      
      var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
      r_out_sum, g_out_sum, b_out_sum,
      r_in_sum, g_in_sum, b_in_sum,
      pr, pg, pb, rbs;
      
      var div = radius + radius + 1;
      var w4 = width << 2;
      var widthMinus1  = width - 1;
      var heightMinus1 = height - 1;
      var radiusPlus1  = radius + 1;
      var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
      
      var stackStart = new BlurStack();
      var stack = stackStart;
      for (i = 1; i < div; i++) {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
      }
      stack.next = stackStart;
      var stackIn = null;
      var stackOut = null;
      
      yw = yi = 0;
      
      var mul_sum = mul_table[radius];
      var shg_sum = shg_table[radius];
      
      for (y = 0; y < height; y++) {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
        
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        
        stack = stackStart;
        
        for (i = 0; i < radiusPlus1; i++) {
          stack.r = pr;
          stack.g = pg;
          stack.b = pb;
          stack = stack.next;
        }
        
        for (i = 1; i < radiusPlus1; i++) {
          p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
          r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
          g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
          b_sum += (stack.b = (pb = pixels[p+2])) * rbs;
          
          r_in_sum += pr;
          g_in_sum += pg;
          b_in_sum += pb;
          
          stack = stack.next;
        }
        
        
        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++) {
          pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
          pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
          pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
          
          r_sum -= r_out_sum;
          g_sum -= g_out_sum;
          b_sum -= b_out_sum;
          
          r_out_sum -= stackIn.r;
          g_out_sum -= stackIn.g;
          b_out_sum -= stackIn.b;
          
          p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;
          
          r_in_sum += (stackIn.r = pixels[p]);
          g_in_sum += (stackIn.g = pixels[p+1]);
          b_in_sum += (stackIn.b = pixels[p+2]);
          
          r_sum += r_in_sum;
          g_sum += g_in_sum;
          b_sum += b_in_sum;
          
          stackIn = stackIn.next;
          
          r_out_sum += (pr = stackOut.r);
          g_out_sum += (pg = stackOut.g);
          b_out_sum += (pb = stackOut.b);
          
          r_in_sum -= pr;
          g_in_sum -= pg;
          b_in_sum -= pb;
          
          stackOut = stackOut.next;
          yi += 4;
        }
        yw += width;
      }
      
      for (x = 0; x < width; x++) {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
        
        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        
        stack = stackStart;
        
        for (i = 0; i < radiusPlus1; i++) {
          stack.r = pr;
          stack.g = pg;
          stack.b = pb;
          stack = stack.next;
        }
        
        yp = width;
        
        for (i = 1; i <= radius; i++) {
          yi = (yp + x) << 2;
          
          r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
          g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
          b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;
          
          r_in_sum += pr;
          g_in_sum += pg;
          b_in_sum += pb;
          
          stack = stack.next;
          
          if (i < heightMinus1) {yp += width;}
        }
        
        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++) {
          p = yi << 2;
          pixels[p]   = (r_sum * mul_sum) >> shg_sum;
          pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
          pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
          
          r_sum -= r_out_sum;
          g_sum -= g_out_sum;
          b_sum -= b_out_sum;
          
          r_out_sum -= stackIn.r;
          g_out_sum -= stackIn.g;
          b_out_sum -= stackIn.b;
          
          p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;
          
          r_sum += (r_in_sum += (stackIn.r = pixels[p]));
          g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
          b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));
          
          stackIn = stackIn.next;
          
          r_out_sum += (pr = stackOut.r);
          g_out_sum += (pg = stackOut.g);
          b_out_sum += (pb = stackOut.b);
          
          r_in_sum -= pr;
          g_in_sum -= pg;
          b_in_sum -= pb;
          
          stackOut = stackOut.next;
          
          yi += width;
        }
      }
      
      context.putImageData(imageData, top_x, top_y);
    }
    
    function BlurStack() {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.a = 0;
      this.next = null;
    }
    
    // Set up the canvas
    const img = document.getElementById("blurImg");
    const canvas = document.getElementById("mainCanvas");
    const w = img.width;
    const h = img.height;
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0, w, h);
    
    // Get the image data from the context
    var imageData = context.getImageData(0,0,w,h);
    // Draw over the old image
    context.putImageData(imageData,0,0);
    // Blur the image
    stackBlurCanvasRGB("mainCanvas", 0, 0, w, h, ${blurStrength});
    // Return a base64 representation
    canvas.toDataURL();
  `;
  
  // Convert the images and create the HTML
  let blurImgData = await Data.fromPNG(img).toBase64String();
  let html = `<img id="blurImg" src="data:image/png;base64,${blurImgData}" /><canvas id="mainCanvas" />`;
  
  // Make the web view and get its return value
  let view = new WebView();
  await view.loadHTML(html);
  let returnValue = await view.evaluateJavaScript(js);
  
  // Remove the data type from the string and convert to data
  let imageDataString = await returnValue.slice(22);
  let imageData = await Data.fromBase64String(imageDataString);
  
  // Convert to image before returning
  let imageFromData = await Image.fromData(imageData);
  return imageFromData;
}

// resize the background image
async function resizeImage(img, maxShortSide) {
  let imgHeight = await img.size.height;
  let imgWidth = await img.size.width;
  let imgShortSide = await Math.min(imgHeight, imgWidth);
  let resizeFactor = await Math.round(imgShortSide/maxShortSide);
  
  const js = `
    // Set up the canvas
    const img = document.getElementById("resImg");
    const canvas = document.getElementById("mainCanvas");
    const w = img.width;
    const h = img.height;
    const maxW = Math.round(w / ${resizeFactor});
    const maxH = Math.round(h / ${resizeFactor});
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    canvas.width = maxW;
    canvas.height = maxH;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0, maxW, maxH);
    
    // Get the image data from the context
    var imageData = context.getImageData(0,0,w,h);
    // Draw over the old image
    context.putImageData(imageData,0,0);
    // Return a base64 representation
    canvas.toDataURL();
  `;
  
  // Convert the images and create the HTML
  let resImgData = await Data.fromPNG(img).toBase64String();
  let html = `<img id="resImg" src="data:image/png;base64,${resImgData}" /><canvas id="mainCanvas" />`;
  
  // Make the web view and get its return value
  let view = new WebView();
  await view.loadHTML(html);
  let returnValue = await view.evaluateJavaScript(js);
  
  // Remove the data type from the string and convert to data
  let imageDataString = await returnValue.slice(22);
  let imageData = await Data.fromBase64String(imageDataString);
  
  // Convert to image before returning
  let imageFromData = await Image.fromData(imageData);
  
  return imageFromData;
}

// crop an image to a square
async function cropImageToSquare(img) {
  const imgHeight = await img.size.height;
  const imgWidth = await img.size.width;
  
  let imgShortSide = await Math.min(imgHeight, imgWidth);
  let imgLongSide = await Math.max(imgHeight, imgWidth);
  
  if (imgShortSide != imgLongSide) {
    let imgCropTotal = await (imgLongSide - imgShortSide);
    let imgCropSide = await Math.floor(imgCropTotal / 2);

    let rect;
    switch (imgShortSide) {
      case imgHeight:
        rect = new Rect(imgCropSide, 0, imgShortSide, imgShortSide);
        break;
      case imgWidth:
        rect = new Rect(0, imgCropSide, imgShortSide, imgShortSide);
        break;
    }
    
    let draw = new DrawContext();
    draw.size = new Size(rect.width, rect.height);
    
    draw.drawImageAtPoint(img, new Point(-rect.x, -rect.y));
    img = draw.getImage();
  }
  return img;
}

/* ========== END OF SCRIPT ========== */
