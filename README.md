# iOS News Widget for Scriptable

iOS Scriptable News Widget (for websites using WordPress and RSS feeds)
Tap on a news in the widget to open it directly in your browser.

![widgets](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widgets.jpg)

# List of contents

- [Requirements](#requirements)
- [Support](#support)
- [Notes and known bugs](#notes-and-bugs)
- [Changelog](#changelog)
- [Setup](#setup)
    - [Widget Parameters](#widget-parameters)
    - [Widget Settings](#widget-settings)
    - [News Widget Clear Cache.js](#clear-cache)
- [Update News Widget](#widget-update)
- [Links](#links)
- [Thanks](#thanks)

---

__If you'd like to support my work with a coffee 😊: https://ko-fi.com/saudumm__

---

<a name="requirements"></a>
# Requirements:

- iOS14
- Latest version of [Scriptable for iOS](https://apps.apple.com/de/app/scriptable/id1405459188)

<a name="support"></a>
# Support

I just started learning JavaScript, so there will be bugs.
If there are any issues or questions, feel free to open an issue here on GitHub or contact me via Twitter: [@saudumm](https://www.twitter.com/saudumm)
__Please mention the URL of the website or RSS feed, so I can help you faster.__

<a name="notes-and-bugs"></a>
# Notes and known bugs

- Most WordPress websites, RSS and Atom feeds should work, but it's possible that not everything will work. Please feel free to contact me, if there are any problems.

<a name="changelog"></a>
# Changelog

- v1.2.2
    - fix for feeds containing webp images
- v1.2.1
    - small fix for RSS feeds without a published date
- v1.2.0
    - added offline mode
        - if you lose your internet connection, the widget won't go blank (if all necessary data is cached)
        - the widget will show a small cloud icon on the top right, if offline mode is temporarily active
    - added settings files (see [Settings](#settings) for more info)
    - added Settings Wizard (run script directly in Scriptable to use the Settings Wizard)
    - removed links files in favor of settings files
    - added blank image symbol if a news image isn't available
    - standard design now resembles the official news widget more closely
    - added setting CONF_LARGE_WIDGET_MAX_NEWS
        - configure how much news you want to see max. in a large widget
    - added setting CONF_DISPLAY_NEWS
        - "websites" prioritizes showing at least one news per link
        - "date" just sorts everything by date
- v1.1.4
    - fixed incorrect display of date and time
    - added new font config options "Rounded" and "Monospaced"
    - added date/time region config setting
    - additional fixes for fetching images from RSS feeds
    - changed chaches from cache dir to documents dir
- v1.1.3
    - Added instructions for Script Updates and Widget Setup
- v1.1.2
    - Fix for fetching images from RSS feeds
- v1.1.1
    - Fix for links that don't start with http:// or https://
- v1.1.0
    - Multi URL support in the code or via text files
    - better RSS support
    - support for Atom feeds
    - more customization options
- v1.0.2
    - Support for iOS light and dark mode
- v1.0.1
    - Small bugfix loading images in RSS feed
- v1.0.0
    - Initial Upload

<a name="setup"></a>
# Setup:

First, you should add the __News-Widget.js__ Script to Scriptable. Either copy the content of the __News-Widget.js__ file and paste it into a new script in Scriptables or download the file and add it to your iCloud Drive Scriptables folder in iCloud Drive (Files App)
You can also add the Widget directly via the Scriptable Gallery: https://scriptable.app/gallery/news-widget

1. Enter "Wiggle Mode" on your homescreen and tap on the __+__ symbol
2. Search for and/or tap on Scriptable
3. Choose one of three sizes and tap __+ Add Widget__
4. Tap on the new widget while still in "Wiggle Mode" or long press on the widget and tap "Edit Widget"
5. Click on __Choose__ next to __Script__
6. Choose __News Widget__ from the list
7. Edit your parameters for the widget (see Widget Parameters below)
8. Tap anywhere outside of the config window and you're done! The widget should now load. 

![widget-config-old](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widget-config-old.jpg)

<a name="widget-parameters"></a>
## Widget Parameters

In v1.2.0, i've added settings files, so you don't have to configure your widget with a thousand different parameters.
Just run the Settings Wizard, create a settings file and add it via Widget Parameters. See Settings Wizard for more information.

![widget-config](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widget-config.jpg)

- Example:
    - widget-settings.txt
    - small|widget-settings.txt

Of course, the old Parameters still work:
- Example:
    - small|https://www.stadt-bremerhaven.de|Caschys Blog|true|background.jpg|false|true|MarkerFelt-Thin
- Parameter order has to be:
    - Widget size (small, large, medium)
    - Site url (url of the WordPress Website or RSS feed URL)
    - Site name (name of the website, displayed at the top of the widget)
    - Show post images (use true if you want to display the images of the posts or set to false if not)
    - Background image (name of an image file. The file has to be stored in the scriptables folder in iCloud Drive (Files App))
    - Blur background image (use true if you want the background image to be blurry. Use false if not)
    - Background image gradient (use true to create a color gradient over the background image (for better readbility), use false to turn off the gradient)
    - Font Name (refer to http://iosfonts.com for available font names)
- Parameters have to be separated by |
- You don't have to set all parameters, the following examples will work just fine:
    - small|https://www.stadt-bremerhaven.de|Caschys Blog
    - large|https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml|NY Times RSS|true|background.jpg
- Parameters that are not set will be set by the standard widget config in the source code
- You can change more things like background color, font color and more in the source code. Look at the comments in the code for explanations

<a name="widget-settings"></a>
## Widget Settings

![settings-wizard](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/settings-wizard.jpg)

To start Settings Wizard, just run News Widget in the Scriptable App.

You can create, edit or delete settings files.
To edit a specific setting, just tap on it, edit it to your liking and once you're done, tap on "SAVE" at the top of the list, set a filename (ending in .txt) and you're done! You can now set this file as a Parameter for your Widget.

I've tried to make this as simple as possible, but feel free to contact me, if there are any questions or problems.

Here are all Settings that you can edit, there are also explanations for everything in the code:

### CHECK_FOR_SCRIPT_UPDATE
Check for script updates and get notified as soon as a new version is released
- true = check for script updates
- false = don't check for updates

### PARAM_LINKS
Add Addresses (URLs/Links) of the website(s) and/or the RSS Feed(s) you want to fetch posts from.
Format of a new line has to be: ["Link to site/feed", "Name of site"],
Please note, the more sites you add, the longer the widgets needs to load all data. It's possible that the widget on your homescreen won't load anything or takes a very long time if you add too many links.

### PARAM_WIDGET_TITLE
Name of the website/feed to display in the widget (at the top). If only one site is configured (in the code or parameters), the name of the site is used.

### PARAM_BG_IMAGE_NAME
Note: custom background image files have to be in the Scriptable (iCloud) Files folder (same as the script .js file).
Change to the filename of a custom background image (CASE SENSITIVE!) or set to "none" if you don't want a custom image

### PARAM_BG_IMAGE_BLUR
Blur the background image (custom or the news image in small widgets).
- "true" = blur the background image
- "false" = no blur

### PARAM_BG_IMAGE_GRADIENT
- "true" = gradient over the background image
- "false" = no gradient

### PARAM_SHOW_NEWS_IMAGES
Note: combining PARAM_SHOW_NEWS_IMAGES = true + small widget will ignore CONF_BG_GRADIENT_COLOR values in small config widgets.
- "true" = display images next to headlines
- "false" = no images next to posts

### CONF_LARGE_WIDGET_MAX_NEWS
Configure if you want a maximum of four or five News displayed in the LARGE Widget.
Please only set 4 or 5. Other values will default to 4. If you have exactly four websites configured in PARAM_LINKS, this Setting will always default to 4.

### CONF_DISPLAY_NEWS
Configure how posts should be displayed in the widget.
- Set to "websites" if you want to prioritize seeing news from all your configured websites. This will more closely resemble the iOS News Widget.
- Set to "date" if you want to prioritize just sorting by date. This will more closely resemble a timeline or feed of all configured websites combined.

### CONF_DATE_TIME_LOCALE
Configure your preferred region to format how date and time values will be displayed
- "default" = uses your system region
- Use locales shortcodes like "en-US", "en-GB", "ko", "fr-CA" or "de-DE"
For a list of possible iOS locales, see: https://gist.github.com/jacobbubu/1836273

### CONF_12_HOUR
Configure which time format to use
- true = 12h time format
- false = 24h time format

### CONF_BG_COLOR
Set the background color of your widget

### CONF_BG_GRADIENT
Configure to use a color Gradient instead of the single background color (above)
- true = use a color gradient (colors configured below)
- false = use a single color (color configured above)

### CONF_BG_GRADIENT_COLOR_TOP
Gradient color from the top of the widget

### CONF_BG_GRADIENT_COLOR_BTM
Gradient color to the bottom of the widget

### CONF_BG_GRADIENT_OVERLAY_TOP
Gradient color image overlay from the top of the widget
- used if a background image is displayed and PARAM_BG_IMAGE_GRADIENT = "true"

### CONF_BG_GRADIENT_OVERLAY_BTM
Gradient Color Image Overlay to the bottom of the Widget
- used if a background image is displayed and PARAM_BG_IMAGE_GRADIENT = "true"

### CONF_FONT_WIDGET_TITLE, CONF_FONT_WEIGHT_WIDGET_TITLE, CONF_FONT_SIZE_WIDGET_TITLE, CONF_FONT_COLOR_WIDGET_TITLE
Set the font, size and text color of the widget title at the top of the widget

### CONF_FONT_DATE, CONF_FONT_WEIGHT_DATE, CONF_FONT_SIZE_DATE, CONF_FONT_COLOR_DATE 
Set the font, size and text color of the date and time line(s) in the widget

### CONF_FONT_HEADLINE, CONF_FONT_WEIGHT_HEADLINE, CONF_FONT_SIZE_HEADLINE, CONF_FONT_COLOR_HEADLINE
Set the font, size and text color of the news headlines in the widget

---

<a name="clear-cache"></a>
## News Widget Clear Cache.js

__News-Widget__ stores images and other data on your iPhone for faster loading and to save mobile data. You can't access those files directly. If there are problems or you want to delete all the cache files, just add __News-Widget-Clear-Cache.js__ to Scriptables and run the script in the app. It'll delete all cache files from News-Widget. Because the files are in a cache folder, iOS can delete thos files automatically, if there's not enough free space on your phone.

<a name="widget-update"></a>
# Update News Widget

To install or update News Widget hassle-free, please add __News Widget Update.js__ from this Repo to your Scriptable App and run the script in Scriptable. It'll save a backup of your existing News Widget Code and download the latest version of News Widget to your Scriptable App.

![update-example](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/update-example.jpg)

<a name="links"></a>
# Links

You can configure one or multiple Links to WordPress website and/or RSS feeds (at the same time!) directly in the script code (section STANDARD WIDGET CONFIG) or via Settings Files, if you want to set up different News Widgets.

In case you're not sure if a website is using WordPress, just add _/wp-json/wp/v2/posts_ at the end of the url (https://stadt-bremerhaven.de/wp-json/wp/v2/posts). If you see a lot of text in your browser, the site should work.
If not, you can search for an RSS feed (if the site has one) and use the link of the RSS feed.

Here are a few links to help you get started:

## WordPress

### Gaming:

- PlayStation Blog: http://blog.playstation.com
- PlayStation Blog Germany: http://blog.de.playstation.com
- Xbox Wire US: https://news.xbox.com/en-us
- Xbox Wire Germany: https://news.xbox.com/de-de
- InsideXbox (German): https://insidexbox.de
- Dualshockers: https://www.dualshockers.com
-  Twinfinite: https://twinfinite.net

### Tech:

- Caschys Blog (German): https://stadt-bremerhaven.de
- Tarnkappe.info (German): https://tarnkappe.info
- 9to5Mac: https://9to5mac.com
- 9to5Google: https://9to5google.com
- TechCrunch: https://techcrunch.com
- VentureBeat: https://venturebeat.com
- Wired: https://wired.com

## RSS Feeds

### News:
- New York Times (World News): https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
    - (more feeds can be found here: http://rss.nytimes.com)
- CNBC Top News: https://www.cnbc.com/id/100003114/device/rss/rss.html
- CNN (World News): http://rss.cnn.com/rss/edition_world.rss
    - more  feeds: https://edition.cnn.com/services/rss/
- ABC News World: https://abcnews.go.com/abcnews/internationalheadlines

### Gaming:
- PC Gamer: https://www.pcgamer.com/rss/
- IGN: http://feeds.feedburner.com/ign/all
- Eurogamer: https://www.eurogamer.net/?format=rss
    - more feeds: https://www.eurogamer.net/rss/eurogamer_frontpage_feed.rss
- Digital Foundry: https://www.eurogamer.net/?format=rss&topic=digital_foundry

### Tech:
- MacStories: https://www.macstories.net/feed
- WindowsCentral: http://feeds.windowscentral.com/wmexperts
- Tom's Hardware: https://www.tomshardware.com/feeds/all
- Heise (German): https://https://www.heise.de/rss/heise.rdf

<a name="thanks"></a>
## Thanks

A big THANK YOU to [Mario Klingemann](http://quasimondo.com/StackBlurForCanvas/StackBlurDemo.html) for the blur code and [Max Zeryck](https://github.com/mzeryck) for the WebView code.

Also a big THANK YOU to Simon B. Støvring [@simonbs](https://www.twitter.com/simonbs) for his awesome Scriptable App!
