// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: file-alt;
/********************************************
 *                                          *
 *      NEWS WIDGET (WORDPRESS AND RSS)     *
 *                                          *
 *        v1.2.2 - made by @saudumm         *
 *       https://twitter.com/saudumm        *
 *                                          *
 ********************************************
 
 Feel free to contact me on Twitter or
 GitHub, if you have any questions or issues.

 GitHub Repo:
 https://github.com/Saudumm/scriptable-News-Widget
 
 ********************************************
 *                                          *
 *     INSTRUCTIONS / MANUAL / CHANGELOG    *
 *   For instructions on how to set up the  *
 *     widget and the latest changes to     *
 *        the script please check the       *
 *               GitHub Repo                *
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

 Please run Settings Wizard, configure
 everything to your liking and then set the
 name of the Settings File as a
 Widget Parameter.
*/

/* ============ CONFIG  START ============ */

/*******************************************/
/*                                         */
/*               CONFIG FILE               */
/*                                         */
/*  You can store your preferred settings  */
/*   in a config file in the Scriptables   */
/*    directory in your Files App. This    */
/*   config file can then be loaded and    */
/*      used to overwrite the various      */
/*   settings below, so you don't have to  */
/*  constantly change them when the widget */
/*    code is updated. You can even use    */
/*     different config files as widget    */
/*      parameter to create different      */
/*              widget styles!             */
/*                                         */
/*   Check the GitHub Repo for more info   */
/*           and an example file           */
/*                                         */
/*******************************************/

// set to "none" if you don't want to use a
// settings file or if you want to use a
// settings file via widget parameter
var SETTINGS_FILE = "none";

/*******************************************/
/*                                         */
/*         CHECK FOR SCRIPT UDPATE         */
/*                                         */
/*******************************************/

// Check for script updates and get notified
// as soon as a new version is released
// true = check for script updates
// false = don't check for updates
var CHECK_FOR_SCRIPT_UPDATE = true;

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
 ["https://venturebeat.com", "VENTUREBEAT"],
 ["http://rss.cnn.com/rss/edition.rss", "CNN"],
 ["https://news.google.com/rss", "GOOGLE NEWS"],
 ["https://stadt-bremerhaven.de", "CASCHYS BLOG"],
 ["https://insidexbox.de", "INSIDEXBOX"],
];

// Name of the website/feed to display in the
// widget (at the top).
// If only one site is configured (in the
// code or parameters), the name of the site
// is used.
var PARAM_WIDGET_TITLE = "News Widget";

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
// PARAM_SHOW_NEWS_IMAGES = true + small
// widget will ignore CONF_BG_GRADIENT_COLOR
// values in small config widgets.
// "true" = display images next to headlines
// "false" = no images next to posts
var PARAM_SHOW_NEWS_IMAGES = "true";

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

// Configure if you want a maximum of four or
// five News displayed in the LARGE Widget.
// Please only set 4 or 5. Other values will
// default to 4. If you have exactly
// four websites configured in PARAM_LINKS,
// this Setting will always default to 4.
var CONF_LARGE_WIDGET_MAX_NEWS = 4;

// Configure how posts should be displayed
// in the widget.
// Set to "websites" if you want to
// prioritize seeing news from all your
// configured websites. This will more
// closely resemble the iOS News Widget.
// Set to "date" if you want to
// prioritize just sorting by date. This will
// more closely resemble a timeline or feed
// of all configured websites combined.
var CONF_DISPLAY_NEWS = "websites";

// Configure your preferred region to format
// how date and time values will be displayed
// "default" = uses your system region
// Use locales shortcodes like "en-US",
// "en-GB", "ko", "fr-CA" or "de-DE"
// For a list of possible iOS locales, see:
// https://gist.github.com/jacobbubu/1836273
var CONF_DATE_TIME_LOCALE = "default";

// Configure which time format to use
// true = 12h time format
// false = 24h time format
var CONF_12_HOUR = false;

// Set the background color of your widget
var CONF_BG_COLOR =
    Color.dynamic(
      new Color("#fefefe"),
      new Color("#2c2c2e")
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
      new Color("#fefefe"),
      new Color("#000000")
    );
// gradient color to the bottom of the widget
var CONF_BG_GRADIENT_COLOR_BTM =
    Color.dynamic(
      new Color("#cccccc"),
      new Color("#2c2c2e")
    );

// gradient color image overlay from the top
// of the widget
// used if a background image is displayed
// and PARAM_BG_IMAGE_GRADIENT = "true"
var CONF_BG_GRADIENT_OVERLAY_TOP =
      Color.dynamic(
        new Color("#fefefe", 0.3),
        new Color("#2c2c2e", 0.3)
      );
// gradient color image overlay to the bottom
// of the widget
// used if a background image is displayed
// and PARAM_BG_IMAGE_GRADIENT = "true"
var CONF_BG_GRADIENT_OVERLAY_BTM =
      Color.dynamic(
        new Color("#fefefe", 1.0),
        new Color("#2c2c2e", 1.0)
      );

/*******************************************/
/*                                         */
/*          TEXT FONTS  AND SIZES          */
/*                                         */
/*             NOTE ON FONTS:              */
/*   Use "System" if you want to use the   */
/*     system font (SF Pro), "Rounded"     */
/*       for a rounded system font,        */
/*  "Monospaced" for a monosopaced system  */
/*    font and choose your font weight.    */
/*                                         */
/*        Font weight options are:         */
/*    ultralight, thin, light, regular,    */
/*  medium, semibold, bold, heavy, black   */
/*                                         */
/*                                         */
/*   Refer to http://iosfonts.com if you   */
/*   want to use other fonts and replace   */
/*    System withyour chosen font name     */
/*  (e.g. Copperplate or Copperplate-Bold) */
/*                                         */
/*******************************************/

// Set the font, size and text color of the
// widget title at the top of the widget
var CONF_FONT_WIDGET_TITLE = "System";
var CONF_FONT_WEIGHT_WIDGET_TITLE = "heavy";
var CONF_FONT_SIZE_WIDGET_TITLE = 16;
var CONF_FONT_COLOR_WIDGET_TITLE =
      Color.dynamic(
        new Color("#000000"),
        new Color("#fefefe")
      );

// Set the font, size and text color of the
// date and time line(s) in the widget
var CONF_FONT_DATE = "System";
var CONF_FONT_WEIGHT_DATE = "heavy";
var CONF_FONT_SIZE_DATE = 12;
var CONF_FONT_COLOR_DATE =
      Color.dynamic(
        new Color("#8a8a8d"),
        new Color("#9f9fa4")
      );

// Set the font, size and text color of the
// news headlines in the widget
var CONF_FONT_HEADLINE = "System";
var CONF_FONT_WEIGHT_HEADLINE = "semibold";
var CONF_FONT_SIZE_HEADLINE = 13;
var CONF_FONT_COLOR_HEADLINE =
      Color.dynamic(
        new Color("#000000"),
        new Color("#fefefe")
      );

/* ============= CONFIG  END ============= */

/*******************************************/
/*                                         */
/*      DO NOT CHANGE ANYTHING BELOW!      */
/*       (or do so at your own risk)       */
/*                                         */
/*******************************************/

const ONLINE = await isOnline();

// check for updates
var UPDATE_AVAILABLE = false;
if (ONLINE && CHECK_FOR_SCRIPT_UPDATE === true) {UPDATE_AVAILABLE = await checkForUpdate("v1.2.2");}

// define default size of widget
var WIDGET_SIZE = (config.runsInWidget ? config.widgetFamily : "large");

// process widget parameters
await checkWidgetParameter();

// load settings if a file is configured
if (SETTINGS_FILE != "none") {await loadSettingsFromFile(SETTINGS_FILE);}

// set the number of posts depending on WIDGET_SIZE
var WIDGET_NEWS_COUNT = (WIDGET_SIZE == "small") ? 1 : (WIDGET_SIZE == "medium") ? 2 : 5;
if (CONF_LARGE_WIDGET_MAX_NEWS < 4 || CONF_LARGE_WIDGET_MAX_NEWS > 5) {CONF_LARGE_WIDGET_MAX_NEWS = 4;}

// check directories
await checkFileDirs();

await cleanUpCache();

if (config.runsInApp) {
  let welcomeAlert = await new Alert();
  welcomeAlert.title = "News Widget";
  welcomeAlert.message = "Welcome and THANK YOU for using News Widget!\nDo you want to run the Settings Wizard or Preview the Widget?";
  welcomeAlert.addAction("Run Settings Wizard");
  welcomeAlert.addAction("Preview Widget");
  welcomeAlert.addCancelAction("Cancel");
  
  switch (await welcomeAlert.presentSheet()) {
      case 0: await settingsWizard(); return;
      case 1: break;
      case -1: return;
  }
}

// create widget
const widget = await createWidget();

// show widget if run in app
if (!config.runsInWidget) {
  switch (WIDGET_SIZE) {
    case "small": await widget.presentSmall(); break;
    case "medium": await widget.presentMedium(); break;
    case "large": await widget.presentLarge(); break;
  }
}

// set widget and end script
Script.setWidget(widget);
Script.complete();


/* ============== FUNCTIONS ============== */

// create the widget
async function createWidget() {
  const fontWidgetTitle = await loadFont(CONF_FONT_WIDGET_TITLE, CONF_FONT_WEIGHT_WIDGET_TITLE, CONF_FONT_SIZE_WIDGET_TITLE);
  const fontDate = await loadFont(CONF_FONT_DATE, CONF_FONT_WEIGHT_DATE, CONF_FONT_SIZE_DATE);
  const fontHeadline = await loadFont(CONF_FONT_HEADLINE, CONF_FONT_WEIGHT_HEADLINE, CONF_FONT_SIZE_HEADLINE);
  
  const singleSiteMode = (PARAM_LINKS.length == 1 ? true : false);
  
  const list = new ListWidget();
  
  const widgetNewsData = await getData();
  
  // Display the title of the widget
  const titleStack = list.addStack();
  titleStack.layoutHorizontally();

  const widgetTitle = titleStack.addText(PARAM_WIDGET_TITLE);
  widgetTitle.font = fontWidgetTitle;
  widgetTitle.textColor = CONF_FONT_COLOR_WIDGET_TITLE;
  widgetTitle.lineLimit = 1;
  widgetTitle.minimumScaleFactor = 0.5;
  
  if (!ONLINE) {
    titleStack.addSpacer();
    const sym = SFSymbol.named("icloud.slash");
    sym.applyFont(fontWidgetTitle);
    const symbolOffline = titleStack.addImage(sym.image);
    symbolOffline.rightAlignImage();
    symbolOffline.tintColor = CONF_FONT_COLOR_WIDGET_TITLE;
    symbolOffline.imageSize = new Size(19, 19)
  }
    
  if (widgetNewsData) {
    if (WIDGET_SIZE == "large" && CONF_LARGE_WIDGET_MAX_NEWS == 4) {WIDGET_NEWS_COUNT = 4;}
    if (WIDGET_NEWS_COUNT >= widgetNewsData.aNewsHeadlines.length) {WIDGET_NEWS_COUNT = widgetNewsData.aNewsHeadlines.length;}
    if (WIDGET_SIZE == "medium" && WIDGET_NEWS_COUNT == 2) {list.addSpacer(3);} else if (WIDGET_SIZE == "large" && WIDGET_NEWS_COUNT == 5) {list.addSpacer(10);} else {list.addSpacer();}

    if (WIDGET_NEWS_COUNT == 1 || widgetNewsData.aNewsHeadlines.length == 1) {
      // use default padding
      list.useDefaultPadding();
      // load widget background image (if PARAM_SHOW_NEWS_IMAGES = true or PARAM_BG_IMAGE_NAME is set)
      if (PARAM_SHOW_NEWS_IMAGES == "true" && PARAM_BG_IMAGE_NAME == "none") {
        if (widgetNewsData.aNewsIMGPaths[0] != "none") {
          list.backgroundImage = await loadLocalImage(widgetNewsData.aNewsIMGPaths[0]+(PARAM_BG_IMAGE_BLUR == "true" ? "-bg-blur" : "-bg"));
          // draw gradient over background image for better legibility
          CONF_BG_GRADIENT = true;
          CONF_BG_GRADIENT_COLOR_TOP = CONF_BG_GRADIENT_OVERLAY_TOP;
          CONF_BG_GRADIENT_COLOR_BTM = CONF_BG_GRADIENT_OVERLAY_BTM;
        }
      }
      
      const postStack = list.addStack();
      postStack.layoutVertically();
      
      if (config.widgetFamily === "medium" || config.widgetFamily === "large") {
          const labelDateTime = postStack.addText((singleSiteMode ? "" : widgetNewsData.aNewsSiteNames[0]+" - ")+widgetNewsData.aNewsDateTimes[0]);
          labelDateTime.font = fontDate;
          labelDateTime.textColor = CONF_FONT_COLOR_DATE;
          labelDateTime.lineLimit = 1;
          labelDateTime.minimumScaleFactor = 0.5;
      } else {
        if (!singleSiteMode) {
          const labelWidgetTitle = postStack.addText(widgetNewsData.aNewsSiteNames[0]);
          labelWidgetTitle.font = fontDate;
          labelWidgetTitle.textColor = CONF_FONT_COLOR_DATE;;
          labelWidgetTitle.lineLimit = 1;
          labelWidgetTitle.minimumScaleFactor = 0.5;
        }
        
        const labelDateTime = postStack.addText(widgetNewsData.aNewsDateTimes[0]);
        labelDateTime.font = fontDate;
        labelDateTime.textColor = CONF_FONT_COLOR_DATE;
        labelDateTime.lineLimit = 1;
        labelDateTime.minimumScaleFactor = 0.5;
      }

      const labelHeadline = postStack.addText(widgetNewsData.aNewsHeadlines[0]);
      labelHeadline.font = fontHeadline;
      labelHeadline.textColor = CONF_FONT_COLOR_HEADLINE;
      labelHeadline.lineLimit = 3;
      
      list.url = widgetNewsData.aNewsURLs[0];
    } else {
      list.setPadding(16, 16, 16, 16);
      
      const aStackRow = await new Array(WIDGET_NEWS_COUNT);
      const aStackCol = await new Array(WIDGET_NEWS_COUNT);
      const aLblNewsDateTime = await new Array(WIDGET_NEWS_COUNT);
      const aLblNewsHeadline = await new Array(WIDGET_NEWS_COUNT);
      const aLblNewsImage = await new Array(WIDGET_NEWS_COUNT);
      
      let i;
      for (i = 0; i < WIDGET_NEWS_COUNT; i++) {
        aStackRow[i] = list.addStack();
        aStackRow[i].layoutHorizontally();
        aStackRow[i].url = widgetNewsData.aNewsURLs[i];

        aStackCol[i] = aStackRow[i].addStack();
        aStackCol[i].layoutVertically();
        
        aLblNewsDateTime[i] = aStackCol[i].addText((singleSiteMode ? "" : widgetNewsData.aNewsSiteNames[i]+" - ")+widgetNewsData.aNewsDateTimes[i]);
        aLblNewsDateTime[i].font = fontDate;
        aLblNewsDateTime[i].textColor = CONF_FONT_COLOR_DATE;
        aLblNewsDateTime[i].lineLimit = 1;
        aLblNewsDateTime[i].minimumScaleFactor = 0.5;
        
        aLblNewsHeadline[i] = aStackCol[i].addText(widgetNewsData.aNewsHeadlines[i]);
        aLblNewsHeadline[i].font = fontHeadline;
        aLblNewsHeadline[i].textColor = CONF_FONT_COLOR_HEADLINE;
        aLblNewsHeadline[i].lineLimit = 2;

        if (PARAM_SHOW_NEWS_IMAGES == "true") {
          aStackRow[i].addSpacer();
          aLblNewsImage[i] = aStackRow[i].addImage(await loadLocalImage(widgetNewsData.aNewsIMGPaths[i]));
          if (WIDGET_SIZE == "large" && WIDGET_NEWS_COUNT == 4) {
            aLblNewsImage[i].imageSize = new Size(63,63);
            aLblNewsHeadline[i].lineLimit = 3;
          } else {
            aLblNewsImage[i].imageSize = new Size(45.66,45.66);
          }
          aLblNewsImage[i].cornerRadius = 8;
          if (widgetNewsData.aNewsIMGPaths[i] === "none") {aLblNewsImage[i].tintColor = CONF_FONT_COLOR_HEADLINE; aLblNewsImage[i].imageOpacity = 0.5;}
          aLblNewsImage[i].rightAlignImage();
        }
        if (i < WIDGET_NEWS_COUNT-1) {list.addSpacer();}
      }
    }
  } else {
    widgetTitle.textColor = Color.white();
    list.addSpacer();
    const sadFace = list.addText(":(");
    sadFace.font = Font.regularSystemFont((WIDGET_SIZE === "large") ? 190 : 60);
    sadFace.textColor = Color.white();
    sadFace.lineLimit = 1;
    sadFace.minimumScaleFactor = 0.1;
    
    list.addSpacer();
    
    const errMsg = list.addText("Couldn't load data");
    errMsg.font = Font.regularSystemFont(12);
    errMsg.textColor = Color.white();
    
    CONF_BG_COLOR = new Color("#1f67b1");
    CONF_BG_GRADIENT = false;
    PARAM_BG_IMAGE_NAME = "none";
  }
  
  if (UPDATE_AVAILABLE) {
    list.addSpacer(4);
    list.setPadding(16, 16, 0, 16);
    const updateMsg = list.addText("Script Update available on GitHub");
    updateMsg.font = Font.lightSystemFont(9);
    updateMsg.textColor = Color.white();
    updateMsg.lineLimit = 1;
    updateMsg.minimumScaleFactor = 0.2;
    updateMsg.centerAlignText()
    updateMsg.url = "https://github.com/Saudumm/scriptable-News-Widget"
  }
  
  // widget background (image, single color or gradient)
  if (PARAM_BG_IMAGE_NAME != "none") {
    const customBGImage = await loadBGImage(PARAM_BG_IMAGE_NAME, PARAM_BG_IMAGE_BLUR);
    if (customBGImage != "not found") {
      list.backgroundImage = customBGImage;
      if (PARAM_BG_IMAGE_GRADIENT == "true") {
        // draw gradient over background image for better legibility
        const gradient = new LinearGradient();
        gradient.locations = [0, 1];
        gradient.colors = [CONF_BG_GRADIENT_OVERLAY_TOP, CONF_BG_GRADIENT_OVERLAY_BTM];
        list.backgroundGradient = gradient;
      }
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
    const localFM = FileManager.local();
    
    const aData = await new Array();
    
    for (iLink = 0; iLink < PARAM_LINKS.length; iLink++) {
      // add https:// to the link if it's missing
      if (PARAM_LINKS[iLink][0].substring(0, 7) != "http://" && PARAM_LINKS[iLink][0].substring(0, 8) != "https://") {
        PARAM_LINKS[iLink][0] = "https://"+PARAM_LINKS[iLink][0]
      }
      // remove last / from link
      if (PARAM_LINKS[iLink][0].slice(-1) == "/") {PARAM_LINKS[iLink][0] = PARAM_LINKS[iLink][0].slice(0, -1);}

      const whatToLoad = await _whatShouldILoad(PARAM_LINKS[iLink][0], PARAM_LINKS[iLink][1])

      if (whatToLoad.loadFormat == "WP-JSON") {
        // WordPress JSON
        try {
          let loadedJSON
          if (ONLINE) {
            loadedJSON = await new Request(PARAM_LINKS[iLink][0]+"/wp-json/wp/v2/posts?per_page=5").loadJSON();
            // Save data to file
            await localFM.writeString(whatToLoad.loadFilePath, JSON.stringify(loadedJSON));
          } else {
            loadedJSON = await JSON.parse(localFM.readString(whatToLoad.loadFilePath));
          }
          
          // Define how many news should be processed
          let calcLoadPosts = 5;
          let maxPostsForWidgetSize = (WIDGET_SIZE == "small") ? 1 : (WIDGET_SIZE == "medium") ? 2 : 5
          if (WIDGET_SIZE == "large" && CONF_LARGE_WIDGET_MAX_NEWS == 4) {maxPostsForWidgetSize = 4;}
          if (CONF_DISPLAY_NEWS == "websites") {
            calcLoadPosts = await Math.round(maxPostsForWidgetSize / PARAM_LINKS.length / 1);
            calcLoadPosts = (calcLoadPosts <= 1) ? 1 : calcLoadPosts;
          } else if (CONF_DISPLAY_NEWS == "date") {
            calcLoadPosts = maxPostsForWidgetSize
          }
          

          const loadPosts = (loadedJSON.length >= calcLoadPosts) ? calcLoadPosts : loadedJSON.length
          let iPost;
          for (iPost = 0; iPost < loadPosts; iPost++) {
            let postDate = loadedJSON[iPost].date_gmt;
            if (postDate === undefined) {postDate = loadedJSON[iPost].date;} else {(postDate.slice(-1) == "Z") ? postDate : postDate += "Z";}
            const postDateSort = await new Date(postDate).toLocaleString(["fr-CA"], {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"});
            const postTitle = await _formatPostTitle(loadedJSON[iPost].title.rendered);
            const postURL = loadedJSON[iPost].guid.rendered;
            const postIMGURL = await _getMediaURL(PARAM_LINKS[iLink][0], loadedJSON[iPost].featured_media, loadedJSON[iPost].id, PARAM_LINKS[iLink][1]);
                        
            await aData.push([postDateSort, postDate+"|||"+postTitle+"|||"+postURL+"|||"+postIMGURL+"|||"+PARAM_LINKS[iLink][1]]);
          }
        } catch(err) {
         log("try processing WP-JSON: "+err);
        }
      } else if (whatToLoad.loadFormat == "RSS") {
        // RSS Feeds
        try {
          let loadRSSFeed = null;
          if (ONLINE) {
            loadRSSFeed = await new Request(PARAM_LINKS[iLink][0]).loadString();
            // Save data to file
            await localFM.writeString(whatToLoad.loadFilePath, loadRSSFeed);
          } else {
            loadRSSFeed = await localFM.readString(whatToLoad.loadFilePath);
          }

          const aRSSItems = await new Array();
          let itemValue = null;
          let currentItem = null;
          let searchForImage = true;
          let xmlParser = new XMLParser(loadRSSFeed);
          // start of element
          xmlParser.didStartElement = (name, elementContent) => {
            itemValue = "";
            if (name == "entry" || name == "item") {
              currentItem = {};
              searchForImage = true;
            }
            
            // possible image values in element name
            if ((name.substring(0, 6) == "media:" || name == "enclosure") && searchForImage) {
              if (elementContent.url !== null && elementContent.url !== undefined && currentItem !== null && currentItem !== undefined) {
                let imgLink = elementContent.url.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp|webp)"?/i);
                if (imgLink && imgLink.length == 3) {
                  imgLink = imgLink[1]+imgLink[2];
                  currentItem["image"] = imgLink;
                  searchForImage = false;
                }
              }
            }
          }
          // end of element
          xmlParser.didEndElement = name => {
            const hasItem = currentItem != null;
            
            // possible url location
            if (hasItem && name == "id") {currentItem["id"] = itemValue;}
            
            // possible url location
            if (hasItem && name == "link") {currentItem["link"] = itemValue;}
            
            // title value
            if (hasItem && name == "title") {currentItem["title"] = itemValue;}
            
            // published date
            if (hasItem && (name == "published" || name == "pubDate" || name == "updated")) {currentItem["published"] = itemValue;}
            
            // possible image link location
            if (hasItem && name == "image" && searchForImage) {
              let imgLink = itemValue.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp|webp)"?/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              }
            }
            
            // possible image link location
            if (hasItem && name == "thumb" && searchForImage) {
              let imgLink = itemValue.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp|webp)"?/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              }
            }
            
            // possible image link location
            if (hasItem && name.includes("content")) {
              let imgLink = itemValue.match(/src="(https?\:\/\/.*?\.)(jpe?g|png|bmp|webp).*?"/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              } else {
                imgLink = itemValue.match(/src="(.*?\.)(jpe?g|png|bmp|webp).*?"/i);
                if (imgLink && imgLink.length == 3) {
                  let urlFromParam = PARAM_LINKS[iLink][0].match(/(https?\:\/\/.*?)\//i);
                  if (urlFromParam && urlFromParam.length == 2) {
                    imgLink = urlFromParam[1]+imgLink[1]+imgLink[2];
                    imgLink = imgLink.match(/(https?\:\/\/.*?\.)(jpe?g|png|bmp|webp).*?/i);
                    if (imgLink && imgLink.length == 3) {
                      imgLink = imgLink[1]+imgLink[2];
                      currentItem["image"] = imgLink;
                      searchForImage = false;
                    }
                  }
                }
              }
            }
            
            // possible image link location
            if (hasItem && name == "description") {
              let imgLink = itemValue.match(/src="(https?\:\/\/.*?\.)(jpe?g|png|bmp|webp).*?"/i);
              if (imgLink && imgLink.length == 3) {
                imgLink = imgLink[1]+imgLink[2];
                currentItem["image"] = imgLink;
                searchForImage = false;
              } else {
                imgLink = itemValue.match(/src="(.*?\.)(jpe?g|png|bmp|webp).*?"/i);
                if (imgLink && imgLink.length == 3) {
                  let urlFromParam = PARAM_LINKS[iLink][0].match(/(https?\:\/\/.*?)\//i);
                  if (urlFromParam && urlFromParam.length == 2) {
                    imgLink = urlFromParam[1]+imgLink[1]+imgLink[2];
                    imgLink = imgLink.match(/(https?\:\/\/.*?\.)(jpe?g|png|bmp|webp).*?/i);
                    if (imgLink && imgLink.length == 3) {
                      imgLink = imgLink[1]+imgLink[2];
                      currentItem["image"] = imgLink;
                      searchForImage = false;
                    }
                  }
                }
              }
            }
            
            // end of item/entry block
            if (name == "entry" || name == "item") {
              aRSSItems.push(currentItem);
              currentItem = null;
            }
          }
          // found characters between element start and end
          xmlParser.foundCharacters = str => {itemValue += str;}
          // end of document
          xmlParser.didEndDocument = () => {}
          // parse xml string
          await xmlParser.parse();
          
          //const loadPosts = (aRSSItems.length >= 5) ? 5 : aRSSItems.length
          
          const aRSSData = await new Array();
          
          for (iRSS = 0; iRSS < aRSSItems.length; iRSS++) {
            let rssDate = "none";
            let rssDateSort = "none";
            let rssTitle = "none";
            let rssURL = "none";
            let rssIMGURL = "none";

            if (aRSSItems[iRSS].published !== null) {
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
              const rssIMGRegEx = await aRSSItems[iRSS].image.match(/"?(http(?!.*http)s?\:\/\/.*?\.)(jpe?g|png|bmp|webp)"?/i);
              if (rssIMGRegEx && rssIMGRegEx.length == 3) {
                rssIMGURL = rssIMGRegEx[1]+rssIMGRegEx[2];
              }
            }
            
            if (rssDateSort !== "Invalid Date") {
              await aRSSData.push([rssDateSort, rssDate+"|||"+rssTitle+"|||"+rssURL+"|||"+rssIMGURL+"|||"+PARAM_LINKS[iLink][1]]);
            }
          }
          
          if (aRSSData && aRSSData.length >= 1) {
            
            // sort all post according to date
            aRSSData.sort(function sortFunction(a, b) {
              if (a[0] === b[0]) {
                return 0;
              } else {
                return (a[0] < b[0]) ? -1 : 1;
              }
            })
            // reverse sorting - new to old date
            aRSSData.reverse()
            
            // Define how many news should be processed
            let calcLoadPosts = 5;
            let maxPostsForWidgetSize = (WIDGET_SIZE == "small") ? 1 : (WIDGET_SIZE == "medium") ? 2 : 5
            if (WIDGET_SIZE == "large" && CONF_LARGE_WIDGET_MAX_NEWS == 4) {maxPostsForWidgetSize = 4;}
            if (CONF_DISPLAY_NEWS == "websites") {
              calcLoadPosts = await Math.round(maxPostsForWidgetSize / PARAM_LINKS.length / 1);
              calcLoadPosts = (calcLoadPosts <= 1) ? 1 : calcLoadPosts;
            } else if (CONF_DISPLAY_NEWS == "date") {
              calcLoadPosts = maxPostsForWidgetSize
            }

            const loadPosts = (aRSSData.length >= calcLoadPosts) ? calcLoadPosts : aRSSData.length
            
            let iRSSNews;
            for (iRSSNews = 0; iRSSNews < loadPosts; iRSSNews++) {
              await aData.push([aRSSData[iRSSNews][0], aRSSData[iRSSNews][1]]);
            }
          }
        } catch(err) {
          log("try processing RSS feed: "+err);
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
      
      const aDateTimes = await new Array(POSTS_TO_LOAD);
      const aHeadlines = await new Array(POSTS_TO_LOAD);
      const aURLs = await new Array(POSTS_TO_LOAD);
      const aIMGURLs = await new Array(POSTS_TO_LOAD);
      const aIMGPaths = await new Array(POSTS_TO_LOAD);
      const aSiteNames = await new Array(POSTS_TO_LOAD);
      const aFileNames = await new Array(POSTS_TO_LOAD);
      
      for (iNewPost = 0; iNewPost < POSTS_TO_LOAD; iNewPost++) {
        const aStrSplit = aData[iNewPost][1].split("|||")
        
        if (aStrSplit[0] != "none" && aStrSplit[0] != "undefined" && aStrSplit[0] != undefined) {
          aDateTimes[iNewPost] = await new Date(aStrSplit[0]);
        } else {
          aDateTimes[iNewPost] = await Date.now();
        }
        aDateTimes[iNewPost] = await _formatDateTimeString(aDateTimes[iNewPost]);
        
        aHeadlines[iNewPost] = aStrSplit[1];
        aHeadlines[iNewPost] = await _formatPostTitle(aHeadlines[iNewPost]);
        
        aURLs[iNewPost] = aStrSplit[2];

        aSiteNames[iNewPost] = aStrSplit[4];
        
        if (PARAM_SHOW_NEWS_IMAGES == "true") {
          aIMGURLs[iNewPost] = aStrSplit[3];
          if (aIMGURLs[iNewPost] != "none") {
            const fileID = await _hashCode(aIMGURLs[iNewPost])

            aFileNames[iNewPost] = await getFileName(aSiteNames[iNewPost], fileID);
            
            const addBGImage = (iNewPost == 0 ? true : false);
            aIMGURLs[iNewPost] = await encodeURI(aIMGURLs[iNewPost]);
            aIMGURLs[iNewPost] = await aIMGURLs[iNewPost].replaceAll("%25", "%"); // hack for some image URLs with %

            aIMGPaths[iNewPost] = await _downloadPostImage(aFileNames[iNewPost], aIMGURLs[iNewPost], addBGImage);
          } else {
            aIMGPaths[iNewPost] = "none";
          }
        }
      }
      
      return {
        aNewsDateTimes: aDateTimes,
        aNewsHeadlines: aHeadlines,
        aNewsURLs: aURLs,
        aNewsIMGPaths: aIMGPaths,
        aNewsSiteNames: aSiteNames
      };
    } else {
      return null;
    }
  } catch(err) {
    logError("try getData: "+err);
    return null;
  }
  
  // define what sould be loaded depending on link and online status
  async function _whatShouldILoad(link, strSiteName) {
    let loadFormat = "none";
    let loadFilePath = "none";
    
    const localFM = FileManager.local();
    const docDir = localFM.documentsDirectory();
    const backupFilename = await getFileName(strSiteName, "0");
    const pathBackupJSON = localFM.joinPath(docDir+"/saudumm-news-widget-data", backupFilename+".json");
    const pathBackupXML = localFM.joinPath(docDir+"/saudumm-news-widget-data", backupFilename+".xml");
    
    if (ONLINE) {
      if (await isJSON(link+"/wp-json/wp/v2/posts?per_page=1")) {
        loadFormat = "WP-JSON";
        loadFilePath = pathBackupJSON;
      } else {
        loadFormat = "RSS";
        loadFilePath = pathBackupXML;
      }
    } else {
      if (localFM.fileExists(pathBackupJSON)) {
        loadFormat = "WP-JSON";
        loadFilePath = pathBackupJSON;
      } else if (localFM.fileExists(pathBackupXML)) {
        loadFormat = "RSS";
        loadFilePath = pathBackupXML;
      }
    }
    
    return {
      loadFormat: loadFormat,
      loadFilePath: loadFilePath
    };
    
    // check if the url leads to a json file
    async function isJSON(strURL) {
      try {
        const testJSON = await new Request(strURL).loadJSON();
        if (testJSON.reason == "Not Found") {return false;}
      } catch(err) {
        return false;
      }
      return true;
    }
  }
  
  // format the date and time string to a locale date/time
  function _formatDateTimeString(strDateTime) {
    return new Date(strDateTime).toLocaleString((CONF_DATE_TIME_LOCALE == "default" ? [] : [CONF_DATE_TIME_LOCALE]), {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: (CONF_12_HOUR ? true : false)})
  }
  
  // format the post title and replace all html entities with characters
  function _formatPostTitle(strHeadline) {
    strHeadline = strHeadline.trim().replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">")
    .replaceAll("&apos;", "'").replaceAll("&#034;", '"').replaceAll("&#038;", "&")
    .replaceAll("&#039;", "'").replaceAll("&#060;", "<").replaceAll("&#062;", ">")
    .replaceAll("&#338;", "Œ").replaceAll("&#339;", "œ").replaceAll("&#352;", "Š")
    .replaceAll("&#353;", "š").replaceAll("&#376;", "Ÿ").replaceAll("&#710;", "ˆ")
    .replaceAll("&#732;", "˜").replaceAll("&#8211;", "–").replaceAll("&#8212;", "—")
    .replaceAll("&#8216;", "‘").replaceAll("&#8217;", "’").replaceAll("&#8218;", "‚")
    .replaceAll("&#8220;", "“").replaceAll("&#8221;", "”").replaceAll("&#8222;", "„")
    .replaceAll("&#8224;", "†").replaceAll("&#8225;", "‡").replaceAll("&#8230;", "…")
    .replaceAll("&#8240;", "‰").replaceAll("&#8249;", "‹").replaceAll("&#8250;", "›")
    .replaceAll("&#8364;", "€").replaceAll("<![CDATA[", "").replaceAll("]]>", "");
    return strHeadline;
  }
  
  // get the featuredMedia image URL
  async function _getMediaURL(strURL, strFeatMediaID, strPostID, strSiteName) {
    const localFM = FileManager.local();
    const docDir = localFM.documentsDirectory();
    const backupFilename = await getFileName(strSiteName, strPostID);
    const pathBackupMedia = localFM.joinPath(docDir+"/saudumm-news-widget-data", backupFilename+"-media.json");
    const pathBackupPosts = localFM.joinPath(docDir+"/saudumm-news-widget-data", backupFilename+"-posts.json");
    
    let featuredMediaJSONURL = strURL+"/wp-json/wp/v2/media/"+strFeatMediaID;
    let loadedMediaJSON
    if (ONLINE) {
      loadedMediaJSON = await new Request(featuredMediaJSONURL).loadJSON();
      // Save data to file
      await localFM.writeString(pathBackupMedia, JSON.stringify(loadedMediaJSON));
    } else {
      loadedMediaJSON = await JSON.parse(localFM.readString(pathBackupMedia));
    }
    let mediaURL = loadedMediaJSON.source_url;
    if (mediaURL === undefined || mediaURL == "undefined") {
      // search for other images
      featuredMediaJSONURL = strURL+"/wp-json/wp/v2/posts/"+strPostID;
      if (ONLINE) {
        loadedMediaJSON = await new Request(featuredMediaJSONURL).loadJSON();
        // Save data to file
        await localFM.writeString(pathBackupPosts, JSON.stringify(loadedMediaJSON));
      } else {
        loadedMediaJSON = await JSON.parse(localFM.readString(pathBackupPosts));
      }
      mediaURL = loadedMediaJSON.jetpack_featured_media_url;
      if (mediaURL === undefined || mediaURL == "undefined") {
        return "none";
      } else {
        mediaURL = mediaURL.match(/(http?s.*\.)(jpe?g|png|bmp|webp)/i)
        mediaURL = mediaURL[1]+""+mediaURL[2];
        return await encodeURI(mediaURL);
      }
    } else {
      mediaURL = await mediaURL.match(/(http?s.*\.)(jpe?g|png|bmp|webp)/i)
      mediaURL = mediaURL[1]+""+mediaURL[2];
      return await encodeURI(mediaURL);
    }
    return "none";
  }

  // create a hash from a string
  function _hashCode(str) {
    var hash = 0;
    if (str.length == 0) return hash;
    for (cHash = 0; cHash < str.length; cHash++) {
      char = str.charCodeAt(cHash);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
    }
    hash = Math.abs(hash);
    return hash;
  }

  // download the post image (if it doesn't already exist)
  async function _downloadPostImage(strFileName, strURL, boolAddBGImage) {
    const localFM = FileManager.local();
    var imgPath = localFM.documentsDirectory();
    imgPath = localFM.joinPath(imgPath+"/saudumm-news-widget-data/image-cache", strFileName);
    var tempPath = localFM.temporaryDirectory()
    tempPath = localFM.joinPath(tempPath, strFileName);

    // check if file already exists
    if (!boolAddBGImage && localFM.fileExists(imgPath)) {
      return imgPath;
    } else if (!boolAddBGImage && !localFM.fileExists(imgPath)) {
      if (ONLINE) {
      // download image
      let loadedImage = await new Request(strURL).load();
      // write image and read again (it's smaller that way???)
      await localFM.write(tempPath, loadedImage);
      loadedImage = await localFM.readImage(tempPath);
      
      // resize, crop and store image
      loadedImage = await resizeImage(loadedImage, 200);
      loadedImage = await cropImageToSquare(loadedImage);
      await localFM.writeImage(imgPath, loadedImage);
      
      await localFM.remove(tempPath);
      return imgPath;
      } else {
        return "none";
      }
    }
    
    if (boolAddBGImage) {
      const imgPathBG = imgPath+"-bg"
      const imgPathBGBlur = imgPath+"-bg-blur"
      
      if (localFM.fileExists(imgPath) && localFM.fileExists(imgPathBG) && localFM.fileExists(imgPathBGBlur)) {
        return imgPath;
      } else {
        if (ONLINE) {
        // download image
        let loadedImage = await new Request(strURL).load();
        // write image and read again (it's smaller that way???)
        await localFM.write(tempPath, loadedImage);
        loadedImage = await localFM.readImage(tempPath);

        if (await Math.min(loadedImage.size.height, loadedImage.size.width) > 500) {
          loadedImage = await resizeImage(loadedImage, 500);
        }

        // resize, crop and store image
        if(!localFM.fileExists(imgPath)) {
          let loadedSmallImage = await resizeImage(loadedImage, 200);
          loadedSmallImage = await cropImageToSquare(loadedSmallImage);
          await localFM.writeImage(imgPath, loadedSmallImage);
        }
        
        // store original image
        if (!localFM.fileExists(imgPathBG)) {
          await localFM.writeImage(imgPathBG, loadedImage);
        }
        
        // store blurred resized original image
        if (!localFM.fileExists(imgPathBGBlur)) {
          let loadedImageBlur = await blurImage(loadedImage)
          await localFM.writeImage(imgPathBGBlur, loadedImageBlur);
        }
        
        await localFM.remove(tempPath);
        return imgPath;
        } else {
          return "none";
        }
      }
    }
    return "none";
  }
}

// load all settings from a file
async function loadSettingsFromFile(strFileName) {
  try {
    let fmSettings;
    try {fmSettings = FileManager.iCloud()} catch (e) {fmSettings = FileManager.local()}
    try {fmSettings.documentsDirectory()} catch(e) {fmSettings = FileManager.local()}
    
    let filePath = fmSettings.documentsDirectory();
    filePath = fmSettings.joinPath(filePath, "News-Widget-Settings");
    filePath = fmSettings.joinPath(filePath, strFileName);
    
    if (fmSettings.fileExists(filePath) && fmSettings.isFileStoredIniCloud(filePath)) {
      await fmSettings.downloadFileFromiCloud(filePath);
      
      const jsonConfig = await JSON.parse(fmSettings.readString(filePath));

      if (jsonConfig.CHECK_FOR_SCRIPT_UPDATE !== undefined) {CHECK_FOR_SCRIPT_UPDATE = jsonConfig.CHECK_FOR_SCRIPT_UPDATE;}
      if (jsonConfig.PARAM_LINKS !== undefined) {PARAM_LINKS = jsonConfig.PARAM_LINKS;}
      if (jsonConfig.PARAM_WIDGET_TITLE !== undefined) {PARAM_WIDGET_TITLE = jsonConfig.PARAM_WIDGET_TITLE;}
      if (jsonConfig.PARAM_BG_IMAGE_NAME !== undefined) {PARAM_BG_IMAGE_NAME = jsonConfig.PARAM_BG_IMAGE_NAME;}
      if (jsonConfig.PARAM_BG_IMAGE_BLUR !== undefined) {PARAM_BG_IMAGE_BLUR = jsonConfig.PARAM_BG_IMAGE_BLUR;}
      if (jsonConfig.PARAM_BG_IMAGE_GRADIENT !== undefined) {PARAM_BG_IMAGE_GRADIENT = jsonConfig.PARAM_BG_IMAGE_GRADIENT;}
      if (jsonConfig.PARAM_SHOW_NEWS_IMAGES !== undefined) {PARAM_SHOW_NEWS_IMAGES = jsonConfig.PARAM_SHOW_NEWS_IMAGES;}
      if (jsonConfig.CONF_LARGE_WIDGET_MAX_NEWS !== undefined) {CONF_LARGE_WIDGET_MAX_NEWS = jsonConfig.CONF_LARGE_WIDGET_MAX_NEWS;}
      if (jsonConfig.CONF_POSTS_PER_LINK !== undefined) {CONF_POSTS_PER_LINK = jsonConfig.CONF_POSTS_PER_LINK;}
      if (jsonConfig.CONF_DATE_TIME_LOCALE !== undefined) {CONF_DATE_TIME_LOCALE = jsonConfig.CONF_DATE_TIME_LOCALE;}
      if (jsonConfig.CONF_12_HOUR !== undefined) {CONF_12_HOUR = jsonConfig.CONF_12_HOUR;}
      
      if (jsonConfig.CONF_BG_COLOR.lightMode !== undefined && jsonConfig.CONF_BG_COLOR.darkMode !== undefined) {
        CONF_BG_COLOR = Color.dynamic(new Color(jsonConfig.CONF_BG_COLOR.lightMode), new Color(jsonConfig.CONF_BG_COLOR.darkMode));
      }
      
      if (jsonConfig.CONF_BG_GRADIENT !== undefined) {CONF_BG_GRADIENT = jsonConfig.CONF_BG_GRADIENT;}
      if (jsonConfig.CONF_BG_GRADIENT_COLOR_TOP.lightMode !== undefined && jsonConfig.CONF_BG_GRADIENT_COLOR_TOP.darkMode !== undefined) {
        CONF_BG_GRADIENT_COLOR_TOP = Color.dynamic(new Color(jsonConfig.CONF_BG_GRADIENT_COLOR_TOP.lightMode), new Color(jsonConfig.CONF_BG_GRADIENT_COLOR_TOP.darkMode));
      }
      if (jsonConfig.CONF_BG_GRADIENT_COLOR_BTM.lightMode !== undefined && jsonConfig.CONF_BG_GRADIENT_COLOR_BTM.darkMode !== undefined) {
        CONF_BG_GRADIENT_COLOR_BTM = Color.dynamic(new Color(jsonConfig.CONF_BG_GRADIENT_COLOR_BTM.lightMode), new Color(jsonConfig.CONF_BG_GRADIENT_COLOR_BTM.darkMode));
      }
      
      if (jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.lightMode !== undefined && jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.darkMode !== undefined) {
        if (jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.lightModeAlpha !== undefined && jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.darkModeAlpha !== undefined) {
          CONF_BG_GRADIENT_OVERLAY_TOP = Color.dynamic(new Color(jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.lightMode, jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.lightModeAlpha),
                                                       new Color(jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.darkMode, jsonConfig.CONF_BG_GRADIENT_OVERLAY_TOP.darkModeAlpha));}
      }
      if (jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.lightMode !== undefined && jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.darkMode !== undefined) {
        if (jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.lightModeAlpha !== undefined && jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.darkModeAlpha !== undefined) {
          CONF_BG_GRADIENT_OVERLAY_BTM = Color.dynamic(new Color(jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.lightMode, jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.lightModeAlpha),
                                                       new Color(jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.darkMode, jsonConfig.CONF_BG_GRADIENT_OVERLAY_BTM.darkModeAlpha));}
      }
      
      if (jsonConfig.CONF_FONT_WIDGET_TITLE !== undefined) {CONF_FONT_WIDGET_TITLE = jsonConfig.CONF_FONT_WIDGET_TITLE;}
      if (jsonConfig.CONF_FONT_WEIGHT_WIDGET_TITLE !== undefined) {CONF_FONT_WEIGHT_WIDGET_TITLE = jsonConfig.CONF_FONT_WEIGHT_WIDGET_TITLE;}
      if (jsonConfig.CONF_FONT_SIZE_WIDGET_TITLE !== undefined) {CONF_FONT_SIZE_WIDGET_TITLE = jsonConfig.CONF_FONT_SIZE_WIDGET_TITLE;}
      if (jsonConfig.CONF_FONT_COLOR_WIDGET_TITLE.lightMode !== undefined && jsonConfig.CONF_FONT_COLOR_WIDGET_TITLE.darkMode !== undefined) {
        CONF_FONT_COLOR_WIDGET_TITLE = Color.dynamic(new Color(jsonConfig.CONF_FONT_COLOR_WIDGET_TITLE.lightMode), new Color(jsonConfig.CONF_FONT_COLOR_WIDGET_TITLE.darkMode));
      }
      
      if (jsonConfig.CONF_FONT_DATE !== undefined) {CONF_FONT_DATE = jsonConfig.CONF_FONT_DATE;}
      if (jsonConfig.CONF_FONT_WEIGHT_DATE !== undefined) {CONF_FONT_WEIGHT_DATE = jsonConfig.CONF_FONT_WEIGHT_DATE;}
      if (jsonConfig.CONF_FONT_SIZE_DATE !== undefined) {CONF_FONT_SIZE_DATE = jsonConfig.CONF_FONT_SIZE_DATE;}
      if (jsonConfig.CONF_FONT_COLOR_DATE.lightMode !== undefined && jsonConfig.CONF_FONT_COLOR_DATE.darkMode !== undefined) {
        CONF_FONT_COLOR_DATE = Color.dynamic(new Color(jsonConfig.CONF_FONT_COLOR_DATE.lightMode), new Color(jsonConfig.CONF_FONT_COLOR_DATE.darkMode));
      }
      
      if (jsonConfig.CONF_FONT_HEADLINE !== undefined) {CONF_FONT_HEADLINE = jsonConfig.CONF_FONT_HEADLINE;}
      if (jsonConfig.CONF_FONT_WEIGHT_HEADLINE !== undefined) {CONF_FONT_WEIGHT_HEADLINE = jsonConfig.CONF_FONT_WEIGHT_HEADLINE;}
      if (jsonConfig.CONF_FONT_SIZE_HEADLINE !== undefined) {CONF_FONT_SIZE_HEADLINE = jsonConfig.CONF_FONT_SIZE_HEADLINE;}
      if (jsonConfig.CONF_FONT_COLOR_HEADLINE.lightMode !== undefined && jsonConfig.CONF_FONT_COLOR_HEADLINE.darkMode !== undefined) {
        CONF_FONT_COLOR_HEADLINE = Color.dynamic(new Color(jsonConfig.CONF_FONT_COLOR_HEADLINE.lightMode), new Color(jsonConfig.CONF_FONT_COLOR_HEADLINE.darkMode));
      }
    } else {
      return null;
    }
  } catch(err) {
    log("try loadSettingsFromFile: "+err);
    return null;
  }
}

// set the filename of the post image (site name + image id)
async function getFileName(strSiteName, strID) {
  const strWidgetTitle = await PARAM_WIDGET_TITLE.replace(/[^a-zA-Z1-9]+/g, "").toLowerCase();
  strSiteName = await strSiteName.replace(/[^a-zA-Z1-9]+/g, "").toLowerCase();
  return strWidgetTitle+"-"+strSiteName+"-"+strID;
}

// load post image from file path
async function loadLocalImage(imgPath) {
  const localFM = FileManager.local();
  
  if (localFM.fileExists(imgPath)) {
    return await localFM.readImage(imgPath);
  } else {
    const fontSym = await loadFont(CONF_FONT_HEADLINE, "regular", 60);
    const sym = SFSymbol.named("square.slash");
    sym.applyFont(fontSym);
    return sym.image;
  }
}

// search for and load a local (or iCloud) background image
async function loadBGImage(imageName, optBlur) {
  const localFM = FileManager.local();
  let iCloudFM;
  try {iCloudFM = FileManager.iCloud();} catch(err) {log("try loadBGImage iCloudFM: "+err); return "not found";}
  
  const docDir = localFM.documentsDirectory();
  const iCloudDocDir = iCloudFM.documentsDirectory();
  const bgIMGiCloudDocPath = iCloudFM.joinPath(iCloudDocDir, imageName);
  const bgIMGiCloudWPPath = iCloudFM.joinPath(iCloudDocDir+"/wallpaper", imageName);
  const bgIMGWPCachePath = localFM.joinPath(docDir+"/saudumm-news-widget-data/wallpaper-cache", imageName);
  
  if (optBlur == "true" && localFM.fileExists(bgIMGWPCachePath+"-blur")) {
    return await localFM.readImage(bgIMGWPCachePath+"-blur");
  } else {
    if (optBlur == "true") {
      if (iCloudFM.fileExists(bgIMGiCloudDocPath)) {
        if (iCloudFM.isFileStoredIniCloud(bgIMGiCloudDocPath)) {await iCloudFM.downloadFileFromiCloud(bgIMGiCloudDocPath);}
        let imgToBlur = await iCloudFM.readImage(bgIMGiCloudDocPath);
        imgToBlur = await resizeImage(imgToBlur, 300)
        imgToBlur = await blurImage(imgToBlur);
        await localFM.writeImage(bgIMGWPCachePath+"-blur", imgToBlur);
        return imgToBlur;
      } else if (iCloudFM.fileExists(bgIMGiCloudWPPath)) {
        if (iCloudFM.isFileStoredIniCloud(bgIMGiCloudWPPath)) {await iCloudFM.downloadFileFromiCloud(bgIMGiCloudWPPath);}
        let imgToBlur = await iCloudFM.readImage(bgIMGiCloudWPPath);
        imgToBlur = await resizeImage(imgToBlur, 300)
        imgToBlur = await blurImage(imgToBlur);
        await localFM.writeImage(bgIMGWPCachePath+"-blur", imgToBlur);
        return imgToBlur;
      } else {
        return "not found";
      }
    } else {
      if (iCloudFM.fileExists(bgIMGiCloudDocPath)) {
        return await iCloudFM.readImage(bgIMGiCloudDocPath);
      } else if (iCloudFM.fileExists(bgIMGiCloudWPPath)) {
        return await iCloudFM.readImage(bgIMGiCloudWPPath);
      } else {
        return "not found";
      }
    }
  }
}

// check if all folders are available and create them if needed
function checkFileDirs() {
  // Create new FileManager and set data dir
  const localFM = FileManager.local();
  const docDir = localFM.documentsDirectory();
  const imgCacheDir = localFM.joinPath(docDir, "saudumm-news-widget-data/image-cache");
  const imgCacheDirWP = localFM.joinPath(docDir, "saudumm-news-widget-data/wallpaper-cache");
  
  if (!localFM.fileExists(imgCacheDir)) {localFM.createDirectory(imgCacheDir, true);}
  if (!localFM.fileExists(imgCacheDirWP)) {localFM.createDirectory(imgCacheDirWP, true);}
  
  let fmSettings;
  try {fmSettings = FileManager.iCloud()} catch (e) {fmSettings = FileManager.local()}
  try {fmSettings.documentsDirectory()} catch(e) {fmSettings = FileManager.local()}
  let filePathSettings = fmSettings.documentsDirectory();
  filePathSettings = fmSettings.joinPath(filePathSettings, "News-Widget-Settings");
  if (!fmSettings.fileExists(filePathSettings)) {fmSettings.createDirectory(filePathSettings, true);}
  
  return;
}

// cleanup post image files (if older than 7 days)
function cleanUpCache() {
  const localFM = FileManager.local();
  const docDir = localFM.documentsDirectory();
  const widgetDir = localFM.joinPath(docDir, "saudumm-news-widget-data");
  const content = localFM.listContents(widgetDir);
  
  if (content && content.length >= 1) {
    for (i = 0; i < content.length; i++) {
      if (!localFM.isDirectory(localFM.joinPath(widgetDir, content[i]))) {
        const filePath = localFM.joinPath(widgetDir, content[i]);
        const fileDate = localFM.creationDate(filePath);
        const dateDiffHours = Math.round((Date.now()-fileDate)/1000/60/60/1);
        // delete cache files older than 24 hours
        if (Math.abs(dateDiffHours) > 24) {localFM.remove(filePath);}
      } else if (localFM.isDirectory(localFM.joinPath(widgetDir, content[i]))) {
        const subDir = localFM.joinPath(widgetDir, content[i]);
        const contentSub = localFM.listContents(subDir);
        for (c = 0; c < contentSub.length; c++) {
          const filePath = localFM.joinPath(subDir, contentSub[c]);
          const fileDate = localFM.creationDate(filePath);
          const dateDiffHours = Math.round((Date.now()-fileDate)/1000/60/60/1);
          if (content[i] == "image-cache") {
            // delete image cache files older than 24 hours
            if (Math.abs(dateDiffHours) > 24) {localFM.remove(filePath);}
          }
          else if (content[i] == "wallpaper-cache") {
            // delete wallpaper cache files older than 2 days
            if (Math.abs(dateDiffHours) > 48) {localFM.remove(filePath);}
          }
        }
      }
    }
  }
  return;
}

// get the chosen font for widget texts
function loadFont(fontName, fontThickness, fontSize) {
  let font = Font.boldSystemFont(fontSize);
  if (fontName == "System" || fontName == "Rounded" || fontName == "Monospaced") {
    switch (fontThickness) {
      case "ultralight":
        font = (fontName == "Rounded") ? Font.ultraLightRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.ultraLightMonospacedSystemFont(fontSize) : Font.ultraLightSystemFont(fontSize); break;
      case "thin":
        font = (fontName == "Rounded") ? Font.thinRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.thinMonospacedSystemFont(fontSize) : Font.thinSystemFont(fontSize); break;
      case "light":
        font = (fontName == "Rounded") ? Font.lightRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.lightMonospacedSystemFont(fontSize) : Font.lightSystemFont(fontSize); break;
      case "regular":
        font = (fontName == "Rounded") ? Font.regularRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.regularMonospacedSystemFont(fontSize) : Font.regularSystemFont(fontSize); break;
      case "medium":
        font = (fontName == "Rounded") ? Font.mediumRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.mediumMonospacedSystemFont(fontSize) : Font.mediumSystemFont(fontSize); break;
      case "semibold":
        font = (fontName == "Rounded") ? Font.semiboldRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.semiboldMonospacedSystemFont(fontSize) : Font.semiboldSystemFont(fontSize); break;
      case "bold":
        font = (fontName == "Rounded") ? Font.boldRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.boldMonospacedSystemFont(fontSize) : Font.boldSystemFont(fontSize); break;
      case "heavy":
        font = (fontName == "Rounded") ? Font.heavyRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.heavyMonospacedSystemFont(fontSize) : Font.heavySystemFont(fontSize); break;
      case "black":
        font = (fontName == "Rounded") ? Font.blackRoundedSystemFont(fontSize) : (fontName == "Monospaced") ? Font.blackMonospacedSystemFont(fontSize) : Font.blackSystemFont(fontSize); break;
    }
  } else {
    font = new Font(fontName, fontSize);
  }
  return font;
}

// check if there's a connection to the interwebz
async function isOnline() {
  const view = new WebView();
  const connection = await view.evaluateJavaScript("navigator.onLine");
  return connection;
}

// check if there's a script update available on GitHub
async function checkForUpdate(currentVersion) {
  if (ONLINE) {
    try {
      const latestVersion = await new Request("https://raw.githubusercontent.com/Saudumm/scriptable-News-Widget/main/version.txt").loadString();
      return (currentVersion.replace(/[^1-9]+/g, "") < latestVersion.replace(/[^1-9]+/g, "")) ? true : false;
    } catch(err) {
      log("try checkForUpdate: "+err);
      return false;
    }
  }
}

// check and process widget parameters
function checkWidgetParameter() {
  if (args.widgetParameter) {
    const aWidgetParameter = args.widgetParameter.split("|");
    switch (aWidgetParameter.length) {
      case 8: CONF_FONT_WIDGET_TITLE = CONF_FONT_DATE = CONF_FONT_HEADLINE = aWidgetParameter[7];
      case 7: PARAM_BG_IMAGE_GRADIENT = aWidgetParameter[6];
      case 6: PARAM_BG_IMAGE_BLUR = aWidgetParameter[5];
      case 5: PARAM_BG_IMAGE_NAME = aWidgetParameter[4];
      case 4: PARAM_SHOW_NEWS_IMAGES = aWidgetParameter[3];
      case 3: PARAM_WIDGET_TITLE = aWidgetParameter[2];
      case 2:
        if (aWidgetParameter[1].substring(0, 4) == "http") {
          PARAM_LINKS = [[aWidgetParameter[1], ""]];
        } else {
          SETTINGS_FILE = aWidgetParameter[1];
        }
      case 1:
        if (aWidgetParameter[0] == "small" || aWidgetParameter[0] == "medium" || aWidgetParameter[0] == "large") {
          WIDGET_SIZE = aWidgetParameter[0];
        } else {
          SETTINGS_FILE = aWidgetParameter[0]
        }
    }
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
  const blurStrength = await Math.floor((img.size.height*img.size.width)/18000/1);
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
      var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2 / 1;
      
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
  let view = await new WebView();
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
  let resizeFactor = await Math.round(imgShortSide/maxShortSide/1);
  
  const js = `
    // Set up the canvas
    const img = document.getElementById("resImg");
    const canvas = document.getElementById("mainCanvas");
    const w = img.width;
    const h = img.height;
    const maxW = Math.round(w / ${resizeFactor} / 1);
    const maxH = Math.round(h / ${resizeFactor} / 1);
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
  let view = await new WebView();
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
    let imgCropSide = await Math.floor(imgCropTotal / 2 / 1);

    let rect;
    switch (imgShortSide) {
      case imgHeight: rect = await new Rect(imgCropSide, 0, imgShortSide, imgShortSide); break;
      case imgWidth: rect = await new Rect(0, imgCropSide, imgShortSide, imgShortSide); break;
    }
    
    let draw = await new DrawContext();
    draw.size = await new Size(rect.width, rect.height);
    
    await draw.drawImageAtPoint(img, new Point(-rect.x, -rect.y));
    img = await draw.getImage();
  }
  return img;
}

// settings wizard
async function settingsWizard() {
  try {
    let fm;
    try {fm = FileManager.iCloud()} catch (err) {fm = FileManager.local()}
    try {fm.documentsDirectory()} catch(err) {fm = FileManager.local()}
    let filePath = fm.documentsDirectory();
    filePath = fm.joinPath(filePath, "News-Widget-Settings")
    
    let settingsFileName = "widget-settings.txt";
    let jsonData;
    
    const alAddEdit = await _createNewAlert("Welcome to News Widget Settings Wizard\nDo you want to create a new Settings File or edit an exisiting file?");
    alAddEdit.addAction("Create New File");
    alAddEdit.addAction("Edit Existing File");
    alAddEdit.addAction("Delete Existing File");
    alAddEdit.addCancelAction("Cancel");
    
    switch (await alAddEdit.presentSheet()) {
      case 0: jsonData = await _getStandardSettings(); break;
      case 1:
        const settingsContent = fm.listContents(filePath)
        settingsContent.sort();
        const alLoad = await _createNewAlert("Select which Settings File you want to edit:");
        if (settingsContent && settingsContent.length > 0) {
          for (let iLoad = 0; iLoad < settingsContent.length; iLoad++) {alLoad.addAction(settingsContent[iLoad]);}
          alLoad.addCancelAction("Cancel");
          const answerLoad = await alLoad.presentSheet();
          if (answerLoad > -1) {
            settingsFileName = settingsContent[answerLoad]
            const filePathLoad = fm.joinPath(filePath, settingsFileName);
            if (fm.fileExists(filePathLoad)) {
              if (fm.isFileStoredIniCloud(filePathLoad)) {await fm.downloadFileFromiCloud(filePathLoad);}
              jsonData = await JSON.parse(fm.readString(filePathLoad));
            }
          }
        }
        break;
      case 2:
        const settingsContentDel = fm.listContents(filePath)
        const alDel = await _createNewAlert("Select which Settings File you want to delete:");
        if (settingsContentDel && settingsContentDel.length > 0) {
          for (let iDel = 0; iDel < settingsContentDel.length; iDel++) {alDel.addAction(settingsContentDel[iDel]);}
          alDel.addCancelAction("Cancel");
          const answerDel = await alDel.presentSheet();
          if (answerDel > -1) {
            const settingsFileNameDel = settingsContentDel[answerDel]
            const filePathDel = fm.joinPath(filePath, settingsFileNameDel);
            if (fm.fileExists(filePathDel)) {
              if (fm.isFileStoredIniCloud(filePathDel)) {await fm.downloadFileFromiCloud(filePathDel);}
              const alDelConfirm = await _createNewAlert("Are you sure you want to delete "+settingsFileNameDel+"?");
              alDelConfirm.addAction("Yes");
              alDelConfirm.addAction("No");
              switch (await alDelConfirm.presentSheet()) {
                case 0:
                  fm.remove(filePathDel);
                  const alDelOK = await _createNewAlert("File "+settingsFileNameDel+" deleted!");
                  alDelOK.addAction("OK");
                  await alDelOK.presentSheet();
                  break;
                case 1: return await settingsWizard();
              }
            }
          }
        }
        return await settingsWizard();
      case -1: return null;
    }
    
    if (jsonData !== undefined) {
      await createTable();
    } else {
      const alErr = await _createNewAlert("Couldn't load Settings Data. Please try again.");
      alErr.addAction("OK");
      await alErr.presentSheet();
      return;
    }
    
    async function createTable() {
      const jsonKeys = Object.keys(jsonData);
      const translate = _translateSettings();
      
      const tblSettings = new UITable();
      tblSettings.showSeparators = true
      await _reCreateRows();
      await tblSettings.present(true);
      return;
      
      // Create or recreate all Rows
      async function _reCreateRows() {
        const rowTitle = new UITableRow();
        rowTitle.addText("Tap on the Settings to edit their values!\n\nTap \"SAVE\" when you're done").centerAligned();
        rowTitle.height = 90;
        tblSettings.addRow(rowTitle);
        
        const rowSave = new UITableRow();
        rowSave.addText("SAVE").centerAligned();
        rowSave.backgroundColor = Color.blue();
        rowSave.height = 50;
        rowSave.dismissOnSelect = false;
        rowSave.onSelect = async () => {
          let isWritten = await _saveSettings();
          if (isWritten == true) {
            let alDone = await _createNewAlert("Settings File successfully saved!\nYou can now close the Settings Wizard (Top Left) and configure\n\n"+settingsFileName+"\n\nas a Widget Parameter or in the News Widget Code.");
            alDone.addAction("OK");
            await alDone.presentAlert();
            return;
          } else {
            let alDone = await _createNewAlert("No Settings File saved.");
            alDone.addAction("OK");
            await alDone.presentAlert();
            return;
          }
        }
        tblSettings.addRow(rowSave);
        
        let rowSpacer = new UITableRow();
        rowSpacer.height = 30;
        tblSettings.addRow(rowSpacer);
        
        let rowBGColor = Color.dynamic(new Color("#e3e3e1"),new Color("#1c1c1e"));
        
        for (let i = 0; i < jsonKeys.length; i++) {
          let rowSetting = new UITableRow()
          rowSetting.height = 70;
          rowSetting.dismissOnSelect = false;
          
          let rowTitleTXT = translate[jsonKeys[i]];
          
          // color every second row
          if (i%2 != 0) {rowSetting.backgroundColor = rowBGColor;}
          
          let rowTXT;
          switch (jsonKeys[i].toString()) {
            case "CHECK_FOR_SCRIPT_UPDATE":
            case "CONF_LARGE_WIDGET_MAX_NEWS":
            case "CONF_12_HOUR":
            case "CONF_BG_GRADIENT":
            case "CONF_FONT_SIZE_WIDGET_TITLE":
            case "CONF_FONT_SIZE_DATE":
            case "CONF_FONT_SIZE_HEADLINE":
              rowTXT = jsonKeys[i].toString() + " = " + jsonData[jsonKeys[i]].toString(); break;
            case "PARAM_WIDGET_TITLE":
            case "PARAM_BG_IMAGE_NAME":
            case "PARAM_BG_IMAGE_BLUR":
            case "PARAM_BG_IMAGE_GRADIENT":
            case "PARAM_SHOW_NEWS_IMAGES":
            case "CONF_DISPLAY_NEWS":
            case "CONF_DATE_TIME_LOCALE":
            case "CONF_FONT_WIDGET_TITLE":
            case "CONF_FONT_WEIGHT_WIDGET_TITLE":
            case "CONF_FONT_DATE":
            case "CONF_FONT_WEIGHT_DATE":
            case "CONF_FONT_HEADLINE":
            case "CONF_FONT_WEIGHT_HEADLINE":
              rowTXT = jsonKeys[i].toString() + " = \"" + jsonData[jsonKeys[i]].toString() + "\"";
              break;
            case "PARAM_LINKS":
              if (jsonData[jsonKeys[i]].length >= 1) {
                let strWebsite = "";
                for (let cArr = 0; cArr < jsonData[jsonKeys[i]].length; cArr++) {
                  strWebsite += "[\""+jsonData[jsonKeys[i]][cArr][0]+"\", \""+jsonData[jsonKeys[i]][cArr][1]+"\"],\n";
                }
                rowTXT = strWebsite.slice(0, -2);
                rowSetting.height = 70+(15*jsonData[jsonKeys[i]].length);
              }
              break;
            case "CONF_BG_COLOR":
            case "CONF_BG_GRADIENT_COLOR_TOP":
            case "CONF_BG_GRADIENT_COLOR_BTM":
            case "CONF_BG_GRADIENT_OVERLAY_TOP":
            case "CONF_BG_GRADIENT_OVERLAY_BTM":
            case "CONF_FONT_COLOR_WIDGET_TITLE":
            case "CONF_FONT_COLOR_DATE":
            case "CONF_FONT_COLOR_HEADLINE":
              if (typeof jsonData[jsonKeys[i]] === "object") {
                let height = 75;
                let strWebsite = jsonKeys[i].toString() + ":\n";
                if (jsonData[jsonKeys[i]].lightMode !== undefined) {strWebsite += "lightMode = \""+jsonData[jsonKeys[i]].lightMode+"\"\n"; height += 15;}
                if (jsonData[jsonKeys[i]].lightModeAlpha !== undefined) {strWebsite += "lightModeAlpha = "+jsonData[jsonKeys[i]].lightModeAlpha+"\n"; height += 15;}
                if (jsonData[jsonKeys[i]].darkMode !== undefined) {strWebsite += "darkMode = \""+jsonData[jsonKeys[i]].darkMode+"\"\n"; height += 15;}
                if (jsonData[jsonKeys[i]].darkModeAlpha !== undefined) {strWebsite += "darkModeAlpha = "+jsonData[jsonKeys[i]].darkModeAlpha+"\n"; height += 15;}
                rowSetting.height = height;
                rowTXT = strWebsite.slice(0, -1);
              }
              break;
            default: rowTXT = jsonData[jsonKeys[i]].toString(); break;
          }
          rowSetting.addText(rowTitleTXT, rowTXT)
          rowSetting.onSelect = async (number) => {
            await _showMessage(number);
            await tblSettings.removeAllRows();
            await _reCreateRows();
            await tblSettings.reload();
          }
          tblSettings.addRow(rowSetting);
        }
      }
    }
    
    /* === Settings Wizard internal functions === */
    async function _saveSettings() {
      let alertSave = await _createNewAlert("Enter the Filename of your Settings File including the Extension (.txt)");
      alertSave.addTextField("filename.txt", settingsFileName);
      alertSave.addAction("Save");
      alertSave.addCancelAction("Cancel");
      switch (await alertSave.presentAlert()) {
        case 0:
          if (alertSave.textFieldValue(0).length > 0 && alertSave.textFieldValue(0).slice(-4) == ".txt") {
            settingsFileName = alertSave.textFieldValue(0);
            settingsFileName = settingsFileName.replaceAll(/[\?\|&;\$%@"<>\(\)\+,]/g, "");
            let filePathWrite = fm.joinPath(filePath, settingsFileName);
            if (fm.fileExists(filePathWrite)) {
              let alertOverwrite = await _createNewAlert("The File \""+settingsFileName+"\" already exists.\nDo you want to overwrite the File?");
              alertOverwrite.addAction("No");
              alertOverwrite.addAction("Yes");
              switch (await alertOverwrite.presentAlert()) {
                case 0: return false;
                case 1: await fm.writeString(filePathWrite, JSON.stringify(jsonData)); return true;
              }
            } else {
              await fm.writeString(filePathWrite, JSON.stringify(jsonData));
              return true;
            }
          }
          break;
        case -1: return false;
      }
    }
    
    async function _showMessage(rowID) {
      let al = await _createNewAlert("");
      switch (rowID) {
        case 3: // CHECK_FOR_SCRIPT_UPDATE
          al.message = "Do you want to automatically search for Script Updates to News Widget?\n(Default: Yes)"
          al.addAction("Yes");
          al.addAction("No");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["CHECK_FOR_SCRIPT_UPDATE"] = true; break;
            case 1: jsonData["CHECK_FOR_SCRIPT_UPDATE"] = false; break;
            case -1: return;
          }
          break;
        case 4: // PARAM_LINKS
          await _editParamLinks()
          break;
        case 5: // PARAM_WIDGET_TITLE
          al.message = "Enter the Title of the Widget\nThe Title is displayed at the top of the Widget\n(Default: News Widget)";
          al.addTextField("example: News Widget", jsonData["PARAM_WIDGET_TITLE"].toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length > 0) {jsonData["PARAM_WIDGET_TITLE"] = al.textFieldValue(0);}
              break;
            case -1: return;
          }
          break;
        case 6: // PARAM_BG_IMAGE_NAME
          al.message = "Enter the Filename of the image you want to use as a Widget Background\n(Default: none)";
          al.addTextField("example: image.jpg", jsonData["PARAM_BG_IMAGE_NAME"].toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length > 0) {jsonData["PARAM_BG_IMAGE_NAME"] = al.textFieldValue(0);} else {jsonData["PARAM_BG_IMAGE_NAME"] = "none"}
              break;
            case -1: return;
          }
          break;
        case 7: // PARAM_BG_IMAGE_BLUR
          al.message = "Do you want Widget Background Images to be blurred?\n(Default: Yes)"
          al.addAction("Yes");
          al.addAction("No");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["PARAM_BG_IMAGE_BLUR"] = "true"; break;
            case 1: jsonData["PARAM_BG_IMAGE_BLUR"] = "false"; break;
            case -1: return;
          }
          break;
        case 8: // PARAM_BG_IMAGE_GRADIENT
          al.message = "Do you want to display a Color Gradient over the Background Image?\nThis can improve legibility of text\n(Default: Yes)"
          al.addAction("Yes");
          al.addAction("No");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["PARAM_BG_IMAGE_GRADIENT"] = "true"; break;
            case 1: jsonData["PARAM_BG_IMAGE_GRADIENT"] = "false"; break;
            case -1: return;
          }
          break;
        case 9: // PARAM_SHOW_NEWS_IMAGES
          al.message = "Do you want to display Images next to the News?\n(Default: Yes)"
          al.addAction("Yes");
          al.addAction("No");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["PARAM_SHOW_NEWS_IMAGES"] = "true"; break;
            case 1: jsonData["PARAM_SHOW_NEWS_IMAGES"] = "false"; break;
            case -1: return;
          }
          break;
        case 10: // CONF_LARGE_WIDGET_MAX_NEWS
          al.message = "Do you want to display a max. number of 4 (like iOS News Widget) or 5 News in a Large Widget?\n\n(Default: Max. 5 News)"
          al.addAction("Max. 4 News");
          al.addAction("Max. 5 News");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["CONF_LARGE_WIDGET_MAX_NEWS"] = 4; break;
            case 1: jsonData["CONF_LARGE_WIDGET_MAX_NEWS"] = 5; break;
            case -1: return;
          }
          break;
        case 11: // CONF_DISPLAY_NEWS
          al.message = "Do you want to prioritize seeing News from all Websites (like iOS News Widget) or prioritize sorting all News by Date?\n(Default: Prioritize Websites)"
          al.addAction("Prioritize Websites");
          al.addAction("Prioritize Date");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["CONF_DISPLAY_NEWS"] = "websites"; break;
            case 1: jsonData["CONF_DISPLAY_NEWS"] = "date"; break;
            case -1: return;
          }
          break;
        case 12: // CONF_DATE_TIME_LOCALE
          al.message = "Enter the Region you want to use for the Date and Time\n(e.g. en-US, de-DE, ko)\n(Default: default)";
          al.addTextField("example: en-US", jsonData["CONF_DATE_TIME_LOCALE"].toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length > 0) {jsonData["CONF_DATE_TIME_LOCALE"] = al.textFieldValue(0);} else {jsonData["PARAM_BG_IMAGE_NAME"] = "default"}
              break;
            case -1: return;
          }
          break;
        case 13: // CONF_12_HOUR
          al.message = "Do you want to display the TIME\nin 12 or 24 hour format?\n(Default: 24 Hour)"
          al.addAction("12 Hour");
          al.addAction("24 Hour");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["CONF_12_HOUR"] = true; break;
            case 1: jsonData["CONF_12_HOUR"] = false; break;
            case -1: return;
          }
          break;
        case 14: // CONF_BG_COLOR
          al.message = "Enter the Widget Background Color (HEX)\n(Default Light Mode: #fefefe)\n(Default Dark Mode: #2c2c2e)\n\nFirst Value is used in iOS Light Mode\nSecond Value is used in iOS Dark Mode";
          al.addTextField("example: #fefefe", jsonData["CONF_BG_COLOR"].lightMode.toString());
          al.addTextField("example: #2c2c2e", jsonData["CONF_BG_COLOR"].darkMode.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let wBGColorLight, wBGColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                wBGColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGColorLight)) {jsonData["CONF_BG_COLOR"].lightMode = wBGColorLight;}
              }
              if (al.textFieldValue(1).length == 6 || al.textFieldValue(1).length == 7) {
                wBGColorDark = (al.textFieldValue(1).substring(0,1) == "#") ? al.textFieldValue(1) : "#"+al.textFieldValue(1)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGColorDark)) {jsonData["CONF_BG_COLOR"].darkMode = wBGColorDark;}
              }
              break;
            case -1: return;
          }
          break;
        case 15: // CONF_BG_GRADIENT
          al.message = "Do you want to use a Widget Background Color Gradient instead of a Solid Color? (Only active if no Background Image is displayed)\n(Default: No)"
          al.addAction("Yes");
          al.addAction("No");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData["CONF_BG_GRADIENT"] = true; break;
            case 1: jsonData["CONF_BG_GRADIENT"] = false; break;
            case -1: return;
          }
          break;
        case 16: // CONF_BG_GRADIENT_COLOR_TOP
          al.message = "Enter the Widget Background Gradient Top Color (HEX)\n(Default Light Mode: #fefefe)\n(Default Dark Mode: #000000)\n\nFirst Value is used in iOS Light Mode\nSecond Value is used in iOS Dark Mode";
          al.addTextField("example: #fefefe", jsonData["CONF_BG_GRADIENT_COLOR_TOP"].lightMode.toString());
          al.addTextField("example: #000000", jsonData["CONF_BG_GRADIENT_COLOR_TOP"].darkMode.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let wBGGTopColorLight, wBGGTopColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                wBGGTopColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGTopColorLight)) {jsonData["CONF_BG_GRADIENT_COLOR_TOP"].lightMode = wBGGTopColorLight;}
              }
              if (al.textFieldValue(1).length == 6 || al.textFieldValue(1).length == 7) {
                wBGGTopColorDark = (al.textFieldValue(1).substring(0,1) == "#") ? al.textFieldValue(1) : "#"+al.textFieldValue(1)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGTopColorDark)) {jsonData["CONF_BG_GRADIENT_COLOR_TOP"].darkMode = wBGGTopColorDark;}
              }
              break;
            case -1: return;
          }
          break;
        case 17: // CONF_BG_GRADIENT_COLOR_BTM
          al.message = "Enter the Widget Background Gradient Bottom Color (HEX)\n(Default Light Mode:#cccccc)\n(Default Dark Mode: #2c2c2e)\n\nFirst Value is used in iOS Light Mode\nSecond Value is used in iOS Dark Mode";
          al.addTextField("example: #cccccc", jsonData["CONF_BG_GRADIENT_COLOR_BTM"].lightMode.toString());
          al.addTextField("example: #2c2c2e", jsonData["CONF_BG_GRADIENT_COLOR_BTM"].darkMode.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let wBGGBtmColorLight, wBGGBtmColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                wBGGBtmColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGBtmColorLight)) {jsonData["CONF_BG_GRADIENT_COLOR_BTM"].lightMode = wBGGBtmColorLight;}
              }
              if (al.textFieldValue(1).length == 6 || al.textFieldValue(1).length == 7) {
                wBGGBtmColorDark = (al.textFieldValue(1).substring(0,1) == "#") ? al.textFieldValue(1) : "#"+al.textFieldValue(1)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGBtmColorDark)) {jsonData["CONF_BG_GRADIENT_COLOR_BTM"].darkMode = wBGGBtmColorDark;}
              }
              break;
            case -1: return;
          }
          break;
        case 18: // CONF_BG_GRADIENT_OVERLAY_TOP
          al.message = "Enter the BG Image Overlay Gradient Top Color (HEX)\n(Default Light Mode: #fefefe, 0.3)\n(Default Dark Mode: #2c2c2e, 0.3)\n\n1st Value is Color in iOS Light Mode\n2nd Value is Alpha in Light Mode\n3rd Value is Color in iOS Dark Mode\n4th Value is Alpha value in Dark Mode";
          al.addTextField("example: #fefefe", jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].lightMode.toString());
          al.addTextField("example: 0.3", jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].lightModeAlpha.toString());
          al.addTextField("example: #2c2c2e", jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].darkMode.toString());
          al.addTextField("example: 0.3", jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].darkModeAlpha.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let wBGGOTopColorLight, wBGGOTopColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                wBGGOTopColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGOTopColorLight)) {jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].lightMode = wBGGOTopColorLight;}
              }
              if (al.textFieldValue(1).length > 0 && parseFloat(al.textFieldValue(1)).toString() != "NaN") {jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].lightModeAlpha = parseFloat(al.textFieldValue(1));}
              
              if (al.textFieldValue(2).length == 6 || al.textFieldValue(2).length == 7) {
                wBGGOTopColorDark = (al.textFieldValue(2).substring(0,1) == "#") ? al.textFieldValue(2) : "#"+al.textFieldValue(2)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGOTopColorDark)) {jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].darkMode = wBGGOTopColorDark;}
              }
              if (al.textFieldValue(3).length > 0 && parseFloat(al.textFieldValue(3)).toString() != "NaN") {jsonData["CONF_BG_GRADIENT_OVERLAY_TOP"].darkModeAlpha = parseFloat(al.textFieldValue(3));}
              break;
            case -1: return;
          }
          break;
        case 19: // CONF_BG_GRADIENT_OVERLAY_BTM
          al.message = "Enter the BG Image Overlay Gradient Bottom Color (HEX)\n(Default Light Mode: #fefefe, 1)\n(Default Dark Mode: #2c2c2e, 1)\n\n1st Value is Color in iOS Light Mode\n2nd Value is Alpha in Light Mode\n3rd Value is Color in iOS Dark Mode\n4th Value is Alpha value in Dark Mode";
          al.addTextField("example: #fefefe", jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].lightMode.toString());
          al.addTextField("example: 1", jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].lightModeAlpha.toString());
          al.addTextField("example: #2c2c2e", jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].darkMode.toString());
          al.addTextField("example: 1", jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].darkModeAlpha.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let wBGGOBtmColorLight, wBGGOBtmColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                wBGGOBtmColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGOBtmColorLight)) {jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].lightMode = wBGGOBtmColorLight;}
              }
              if (al.textFieldValue(1).length > 0 && parseFloat(al.textFieldValue(1)).toString() != "NaN") {jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].lightModeAlpha = parseFloat(al.textFieldValue(1));}
              
              if (al.textFieldValue(2).length == 6 || al.textFieldValue(2).length == 7) {
                wBGGOBtmColorDark = (al.textFieldValue(2).substring(0,1) == "#") ? al.textFieldValue(2) : "#"+al.textFieldValue(2)
                if (/^#([0-9A-F]{3}){1,2}$/i.test(wBGGOBtmColorDark)) {jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].darkMode = wBGGOBtmColorDark;}
              }
              if (al.textFieldValue(3).length > 0 && parseFloat(al.textFieldValue(3)).toString() != "NaN") {jsonData["CONF_BG_GRADIENT_OVERLAY_BTM"].darkModeAlpha = parseFloat(al.textFieldValue(3));}
              break;
            case -1: return;
          }
          break;
        case 20: // CONF_FONT_WIDGET_TITLE
        case 24: // CONF_FONT_DATE
        case 28: // CONF_FONT_HEADLINE
          let selTextFont = (rowID == 20) ? "Widget Title\n(Default: System)" : (rowID == 24) ? "Date and Time\n(Default: System)" : "Headline\n(Default: System)";
          let selKeyFont = (rowID == 20) ? "CONF_FONT_WIDGET_TITLE" : (rowID == 24) ? "CONF_FONT_DATE" : "CONF_FONT_HEADLINE";
          al.message = "Enter your Font Weight for the "+selTextFont;
          al.addTextField("example: MarkerFelt-Thin", jsonData[selKeyFont].toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length > 0) {jsonData[selKeyFont] = al.textFieldValue(0);}
              break;
            case -1: return;
          }
          break;
        case 21: // CONF_FONT_WEIGHT_WIDGET_TITLE
        case 25: // CONF_FONT_WEIGHT_DATE
        case 29: // CONF_FONT_WEIGHT_HEADLINE
          let selTextWeight = (rowID == 21) ? "Widget Title\n(Default: heavy)" : (rowID == 25) ? "Date and Time\n(Default: heavy)" : "Headline\n(Default: semibold)";
          let selKeyWeight = (rowID == 21) ? "CONF_FONT_WEIGHT_WIDGET_TITLE" : (rowID == 25) ? "CONF_FONT_WEIGHT_DATE" : "CONF_FONT_WEIGHT_HEADLINE";
          al.message = "Select your Font Weight for the "+selTextWeight;
          al.addAction("ultralight");
          al.addAction("thin");
          al.addAction("light");
          al.addAction("regular");
          al.addAction("medium");
          al.addAction("semibold");
          al.addAction("bold");
          al.addAction("heavy");
          al.addAction("black");
          al.addCancelAction("Cancel");
          switch (await al.presentSheet()) {
            case 0: jsonData[selKeyWeight] = "ultralight"; break;
            case 1: jsonData[selKeyWeight] = "thin"; break;
            case 2: jsonData[selKeyWeight] = "light"; break;
            case 3: jsonData[selKeyWeight] = "regular"; break;
            case 4: jsonData[selKeyWeight] = "medium"; break;
            case 5: jsonData[selKeyWeight] = "semibold"; break;
            case 6: jsonData[selKeyWeight] = "bold"; break;
            case 7: jsonData[selKeyWeight] = "heavy"; break;
            case 8: jsonData[selKeyWeight] = "black"; break;
            case -1: return;
          }
          break;
        case 22: // CONF_FONT_SIZE_WIDGET_TITLE
        case 26: // CONF_FONT_SIZE_DATE
        case 30: // CONF_FONT_SIZE_HEADLINE
          let selTextSize = (rowID == 22) ? "Widget Title\n(Default: 16)" : (rowID == 26) ? "Date and Time\n(Default: 12)" : "Headline\n(Default: 13)";
          let selKeySize = (rowID == 22) ? "CONF_FONT_SIZE_WIDGET_TITLE" : (rowID == 26) ? "CONF_FONT_SIZE_DATE" : "CONF_FONT_SIZE_HEADLINE";
          al.message = "Enter your Font Weight for the "+selTextSize;
          al.addTextField("example: 12", jsonData[selKeySize].toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length > 0 && parseFloat(al.textFieldValue(0)).toString() != "NaN") {jsonData[selKeySize] = parseFloat(al.textFieldValue(0));}
              break;
            case -1: return;
          }
          break;
        case 23: // CONF_FONT_COLOR_WIDGET_TITLE
        case 27: // CONF_FONT_COLOR_DATE
        case 31: // CONF_FONT_COLOR_HEADLINE
          let selTextColor = (rowID == 23) ? "Widget Title\n(Default Light Mode: #000000)\n(Default Dark Mode: #fefefe)" : (rowID == 27) ? "News Date and Time\n(Default Light Mode: #8a8a8d)\n(Default Dark Mode: #9f9fa4)" : "News Headline\n(Default Light Mode: #000000)\n(Default Dark Mode: #fefefe)";
          let selKeyColor = (rowID == 23) ? "CONF_FONT_COLOR_WIDGET_TITLE" : (rowID == 27) ? "CONF_FONT_COLOR_DATE" : "CONF_FONT_COLOR_HEADLINE";
          al.message = "Enter the Font Color (HEX) for the "+selTextColor+"\n\nFirst Value is used in iOS Light Mode\nSecond Value is used in iOS Dark Mode";
          al.addTextField("example: #8a8a8d", jsonData[selKeyColor].lightMode.toString());
          al.addTextField("example: #9f9fa4", jsonData[selKeyColor].darkMode.toString());
          al.addAction("OK");
          al.addCancelAction("Cancel");
          let fontColorLight, fontColorDark;
          switch (await al.presentAlert()) {
            case 0:
              if (al.textFieldValue(0).length == 6 || al.textFieldValue(0).length == 7) {
                fontColorLight = (al.textFieldValue(0).substring(0,1) == "#") ? al.textFieldValue(0) : "#"+al.textFieldValue(0);
                if (/^#([0-9A-F]{3}){1,2}$/i.test(fontColorLight)) {jsonData[selKeyColor].lightMode = fontColorLight;}
              }
              if (al.textFieldValue(1).length == 6 || al.textFieldValue(1).length == 7) {
                fontColorDark = (al.textFieldValue(1).substring(0,1) == "#") ? al.textFieldValue(1) : "#"+al.textFieldValue(1);
                if (/^#([0-9A-F]{3}){1,2}$/i.test(fontColorDark)) {jsonData[selKeyColor].darkMode = fontColorDark;}
              }
              break;
            case -1: return;
          }
          break;
      }
    }
    
    // edit websites
    async function _editParamLinks() {
      var tableParamLinks = new UITable();
      tableParamLinks.showSeparators = true
      await _reCreateRowsParamLinks();
      await tableParamLinks.present(false);
      return;
      
      async function _reCreateRowsParamLinks() {
        const rowLinkTitle = new UITableRow();
        rowLinkTitle.addText("Tap on the Links to edit or remove!\n\nTap on Close (Top Left)\nwhen you're done").centerAligned();
        rowLinkTitle.height = 115;
        rowLinkTitle.backgroundColor = Color.dynamic(new Color("#fefefe"), new Color("#000000"));
        tableParamLinks.addRow(rowLinkTitle);
        
        let rowLinkSpacer = new UITableRow();
        rowLinkSpacer.height = 30;
        rowLinkSpacer.backgroundColor = Color.dynamic(new Color("#fefefe"), new Color("#000000"));
        tableParamLinks.addRow(rowLinkSpacer);
        
        let rowLinkBGColor = Color.dynamic(new Color("#e3e3e1"), new Color("#000000"));
        
        for (let iLink = 0; iLink < jsonData["PARAM_LINKS"].length; iLink++) {
          let rowLink = new UITableRow();
          rowLink.height = 70;
          rowLink.dismissOnSelect = false;
          
          // color every second row
          if (iLink%2 != 0) {rowLink.backgroundColor = rowLinkBGColor;}
          
          rowLink.addText(jsonData.PARAM_LINKS[iLink][1].toString(), jsonData.PARAM_LINKS[iLink][0].toString());
          rowLink.onSelect = async (number) => {
            await _showLinkEdit(number-2);
            await tableParamLinks.removeAllRows();
            await _reCreateRowsParamLinks();
            await tableParamLinks.reload();
          }
          tableParamLinks.addRow(rowLink);
        }
        
        const rowAddLink = new UITableRow();
        rowAddLink.addText("Add another Website").centerAligned();
        rowAddLink.backgroundColor = Color.blue();
        rowAddLink.height = 50;
        rowAddLink.dismissOnSelect = false;
        rowAddLink.onSelect = async () => {
          let alAddLink = await _createNewAlert("Enter the Link and Name of a Website or RSS Feed:");
          alAddLink.addTextField("Website URL (https://...)", "");
          alAddLink.addTextField("Website Name", "");
          alAddLink.addAction("Add");
          alAddLink.addCancelAction("Cancel");
          
          switch (await alAddLink.presentAlert()) {
            case 0:
              if (alAddLink.textFieldValue(0).length > 0 && alAddLink.textFieldValue(1).length > 0) {jsonData.PARAM_LINKS.push([alAddLink.textFieldValue(0), alAddLink.textFieldValue(1)]);}
              break;
          }
          await tableParamLinks.removeAllRows();
          await _reCreateRowsParamLinks();
          await tableParamLinks.reload();
        }
        tableParamLinks.addRow(rowAddLink);
      }
      
      async function _showLinkEdit(linkID) {
        let websiteURL = jsonData.PARAM_LINKS[linkID][0];
        let websiteName = jsonData.PARAM_LINKS[linkID][1];
        let alertEditLink = await _createNewAlert("Enter the Link and Name of a Website or RSS Feed:");
        alertEditLink.addTextField("Website URL", websiteURL);
        alertEditLink.addTextField("Website Name", websiteName);
        alertEditLink.addAction("OK");
        alertEditLink.addDestructiveAction("Remove");
        alertEditLink.addCancelAction("Cancel");
        
        switch (await alertEditLink.presentAlert()) {
          case 0:
            if (alertEditLink.textFieldValue(0).length > 0) {jsonData.PARAM_LINKS[linkID][0] = alertEditLink.textFieldValue(0);}
            if (alertEditLink.textFieldValue(1).length > 0) {jsonData.PARAM_LINKS[linkID][1] = alertEditLink.textFieldValue(1);}
            break;
          case 1:
            let alertWantToDelete = await _createNewAlert("Are you sure you want to remove this Website?");
            alertWantToDelete.addAction("No");
            alertWantToDelete.addAction("Yes");
            switch (await alertWantToDelete.presentAlert()) {
              case 0: break;
              case 1: jsonData.PARAM_LINKS.splice(linkID, 1); break;
            }
            break;
          case -1: return;
        }
        return;
      }
    }
    
    // create a new alert (saving on lines and file size)
    async function _createNewAlert(message) {
      let newAlert = await new Alert();
      newAlert.title = "News Widget Settings Wizard";
      newAlert.message = message;
      return newAlert;
    }
    
    // translate the settings var name to a string
    function _translateSettings() {
      return {
        "CHECK_FOR_SCRIPT_UPDATE": "Check For News Widget Script Updates:",
        "PARAM_LINKS": "Configure Websites:",
        "PARAM_WIDGET_TITLE": "Widget Title:",
        "PARAM_BG_IMAGE_NAME": "Widget Background Image:",
        "PARAM_BG_IMAGE_BLUR": "Blur Background Image:",
        "PARAM_BG_IMAGE_GRADIENT": "Background Image Color Gradient Overlay:",
        "PARAM_SHOW_NEWS_IMAGES": "Show Images Next to News:",
        "CONF_LARGE_WIDGET_MAX_NEWS": "Max News in Large Widget:",
        "CONF_DISPLAY_NEWS": "Prioritize News In Widget by:",
        "CONF_DATE_TIME_LOCALE": "Region Settings for Date and Time:",
        "CONF_12_HOUR": "12 Hour Time Format:",
        "CONF_BG_COLOR": "Widget Background Color:",
        "CONF_BG_GRADIENT": "Color Gradient as Widget Background:",
        "CONF_BG_GRADIENT_COLOR_TOP": "Top Color of Background Gradient:",
        "CONF_BG_GRADIENT_COLOR_BTM": "Bottom Color of Background Gradient:",
        "CONF_BG_GRADIENT_OVERLAY_TOP": "Top Color of Image Gradient Overlay:",
        "CONF_BG_GRADIENT_OVERLAY_BTM": "Bottom Color of Image Gradient Overlay:",
        "CONF_FONT_WIDGET_TITLE": "Font of Widget Title:",
        "CONF_FONT_WEIGHT_WIDGET_TITLE": "Font Weight of Widget Title:",
        "CONF_FONT_SIZE_WIDGET_TITLE": "Font Size of Widget Title:",
        "CONF_FONT_COLOR_WIDGET_TITLE": "Font Color of Widget Title:",
        "CONF_FONT_DATE": "Font of News Date+Time:",
        "CONF_FONT_WEIGHT_DATE": "Font Weight of News Date+Time:",
        "CONF_FONT_SIZE_DATE": "Font Size of News Date+Time:",
        "CONF_FONT_COLOR_DATE": "Font Color of News Date+Time:",
        "CONF_FONT_HEADLINE": "Font of News Headlines:",
        "CONF_FONT_WEIGHT_HEADLINE": "Font Weight of News Headlines:",
        "CONF_FONT_SIZE_HEADLINE": "Font Size of News Headlines:",
        "CONF_FONT_COLOR_HEADLINE": "Font Color of News Headlines:"
      };
    }
    
    // load standard settings
    function _getStandardSettings() {
      const jsonData = `
      {
        "CHECK_FOR_SCRIPT_UPDATE": true,
        "PARAM_LINKS": [
                        ["https://venturebeat.com", "VENTUREBEAT"],
                        ["http://rss.cnn.com/rss/edition.rss", "CNN"]
                        ],
        "PARAM_WIDGET_TITLE": "News Widget",
        "PARAM_BG_IMAGE_NAME": "none",
        "PARAM_BG_IMAGE_BLUR": "true",
        "PARAM_BG_IMAGE_GRADIENT": "true",
        "PARAM_SHOW_NEWS_IMAGES": "true",
        "CONF_LARGE_WIDGET_MAX_NEWS": 4,
        "CONF_DISPLAY_NEWS": "websites",
        "CONF_DATE_TIME_LOCALE": "default",
        "CONF_12_HOUR": false,
        "CONF_BG_COLOR": {
          "lightMode": "#fefefe",
          "darkMode": "#2c2c2e"
        },
        "CONF_BG_GRADIENT": false,
        "CONF_BG_GRADIENT_COLOR_TOP": {
          "lightMode": "#fefefe",
          "darkMode": "#000000"
        },
        "CONF_BG_GRADIENT_COLOR_BTM": {
          "lightMode": "#cccccc",
          "darkMode": "#2c2c2e"
        },
        "CONF_BG_GRADIENT_OVERLAY_TOP": {
          "lightMode": "#fefefe",
          "lightModeAlpha": 0.3,
          "darkMode": "#2c2c2e",
          "darkModeAlpha": 0.3
        },
        "CONF_BG_GRADIENT_OVERLAY_BTM": {
          "lightMode": "#fefefe",
          "lightModeAlpha": 1.0,
          "darkMode": "#2c2c2e",
          "darkModeAlpha": 1.0
        },
        "CONF_FONT_WIDGET_TITLE": "System",
        "CONF_FONT_WEIGHT_WIDGET_TITLE": "heavy",
        "CONF_FONT_SIZE_WIDGET_TITLE": 16,
        "CONF_FONT_COLOR_WIDGET_TITLE": {
          "lightMode": "#000000",
          "darkMode" : "#fefefe"
        },
        "CONF_FONT_DATE" : "System",
        "CONF_FONT_WEIGHT_DATE": "heavy",
        "CONF_FONT_SIZE_DATE": 12,
        "CONF_FONT_COLOR_DATE": {
          "lightMode": "#8a8a8d",
          "darkMode" : "#9f9fa4"
        },
        "CONF_FONT_HEADLINE": "System",
        "CONF_FONT_WEIGHT_HEADLINE": "semibold",
        "CONF_FONT_SIZE_HEADLINE": 13,
        "CONF_FONT_COLOR_HEADLINE": {
          "lightMode": "#000000",
          "darkMode" : "#fefefe"
        }
      }`
      return JSON.parse(jsonData);
    }
  } catch(err) {
    log("try settingsWizard: "+err);
  }
}

/* ============ END OF SCRIPT ============ */
