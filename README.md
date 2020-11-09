# scriptable-News-Widget

iOS Scriptable News Widget (for websites using WordPress and RSS feeds)
Tap on a news in the widget to open it directly in your browser.

![widgets](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widgets.jpg)

## Requirements:

- iOS14
- Latest version of Scriptable for iOS: [Link](https://apps.apple.com/de/app/scriptable/id1405459188)

---

__If you'd like to support my work with a coffee 😊: https://ko-fi.com/saudumm__

---

## Support

I just started learning JavaScript, so there will be bugs.
If there are any issues or questions, feel free to open an issue here on GitHub or contact me via Twitter: [@saudumm](https://www.twitter.com/saudumm)
__Please mention the URL of the website or RSS feed, so I can help you faster.__

## Notes and known bugs

- Most WordPress websites, RSS and Atom feeds should work, but it's possible that not everything will work. Please feel free to contact me, if there are any problems.
- Fetching images from RSS feeds is very unreliable at the moment. If the script can't fetch an image, then there will be no image next to the news in the widget

## Changelog

- v1.0.0 - Initial Upload
- v1.0.1 - Small bugfix loading images in RSS feed
- v1.0.2 - Support for iOS light and dark mode
- v1.1.0 - Multi URL support in the code or via text files, better RSS support, support for Atom feeds, more customization options
- v1.1.1 - Fix for links that don't start with http:// or https://
- v1.1.2 - Fix for fetching images from RSS feeds
- v1.1.3 - Added instructions for Script Updates and Widget Setup

## Setup:

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

![widget-config](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widget-config.jpg)

### Widget Parameters

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

### Widget Examples with parameters

### Example 1
![example1](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example1.jpg)

This medium widget uses a __medium__ layout, loads links via a file called __tech-news.txt__, has a widget title called __GERMAN TECH-NEWS__, loads images next to the posts with parameter __true__ and has a custom background image with the filename __circuit.jpg__
- Parameter: medium|tech-news.txt|GERMAN TECH-NEWS|true|circuit.jpg

---
### Example 2
![example2](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example2.jpg)

This large widget uses a __large__ layout, loads links via a file called __world-news.txt__, has a widget title called __World News__, loads images next to the posts with parameter __true__ and has a custom background image with the filename __earth.jpg__
- Parameter: large|world-news.txt|World News|true|earth.jpg

---
### Example 3
![example3](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example3.jpg)

This medium widget uses a __small__ layout, loads posts from the website __https://stadt-bremerhaven.de__ and has a widget title called __Caschys Blog__
- Parameter: small|https://stadt-bremerhaven.de|Caschys Blog

---
### Example 4
![example4](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example4.jpg)

This large widget uses a __large__ layout, loads posts from the website __https://cretaweather.gr__ and has a widget title called __Creta Weather__
- Parameter: large|https://cretaweather.gr|Creta Weather

---
### Example 5
![example5](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example5.jpg)

This small widget uses a __small__ layout, loads links via a file called __xbox-news.txt__ and has a widget title called __XBOX__
- Parameter: small|xbox-news.txt|XBOX

---
### Example 6
![example6](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example6.jpg)

This small widget uses a __small__ layout, loads links via a file called __apple-news.txt__, has a widget title called __APPLE NEWS__, loads images next to the posts with parameter __true__, doesn't have a custom background image - parameter __none__, blurs the background __true__ (if there is one), has a color gradient over the background - parameter __true__ and uses a custom font with the font name __MarkerFelt-Thin__
- Parameter: small|apple-news.txt|APPLE NEWS|true|none|true|true|MarkerFelt-Thin

---
### Example 7
![example7](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/example7.jpg)

This large widget uses a __large__ layout, loads links via a file called __ps-news.txt__, has a widget title called __PLAYSTATION__, loads images next to the posts with parameter __true__, has a custom background image with the filename __playstation.jpg__, blurs the background image with parameter __true__ and with parameter __false__ it doesn't use a background color gradient over the image
- Parameter: large|ps-news.txt|PLAYSTATION|true|playstation.jpg|true|false

---
### News Widget Clear Cache.js

__News-Widget__ stores images and other data on your iPhone for faster loading and to save mobile data. You can't access those files directly. If there are problems or you want to delete all the cache files, just add __News-Widget-Clear-Cache.js__ to Scriptables and run the script in the app. It'll delete all cache files from News-Widget. Because the files are in a cache folder, iOS can delete thos files automatically, if there's not enough free space on your phone.

# News Widget Update.js

To install or update News Widget hassle-free, please add __News Widget Update.js__ from this Repo to your Scriptable App and run the script in Scriptable. It'll save a backup of your existing News Widget Code and download the latest version of News Widget to your Scriptable App.

![update-example](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/update-example.jpg)

# Links:

You can configure one or multiple Links to WordPress website and/or RSS feeds (at the same time!) directly in the script code (section STANDARD WIDGET CONFIG) or via a plain text file to use in widget parameters, if you want to set up different News Widgets.
The text file has to be plain text (no .doc, .rtf, etc...) and it has to be stored in the Scriptables folder in the Files App (iCloud Drive).

Every line has to contain a link to a WordPress website or RSS feed and the name of the site. Both values have to be separated by | (like widget parameters)
Links should start with either http:// or https://

![icloud-drive-example](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/icloud-drive-example.jpg)

Examples:

![link-examples](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/link-examples.jpg)

- https://stadt-bremerhaven.de|Caschys Blog
- https://www.heise.de/rss/heise-atom.xml|Heise Online

In case you're not sure if a website is using WordPress, just add _/wp-json/wp/v2/posts_ at the end of the url (https://stadt-bremerhaven.de/wp-json/wp/v2/posts). If you see a lot of text in your browser, the site should work.
If not, you can search for an RSS feed (if the site has one) and use the link of the RSS feed (for example: )

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
- 9to5Mac: https://9to5mac.com
- 9to5Google: https://9to5google.com
- TechCrunch: https://techcrunch.com
- VentureBeat: https://venturebeat.com
- Wired: https://wired.com

## RSS Feeds

### News:
New York Times (World News): https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
- (more feeds can be found here: http://rss.nytimes.com)

CNBC Top News: https://www.cnbc.com/id/100003114/device/rss/rss.html
CNN (World News): http://rss.cnn.com/rss/edition_world.rss
- more  feeds: https://edition.cnn.com/services/rss/

### Gaming:
PC Gamer: https://www.pcgamer.com/rss/
IGN: http://feeds.feedburner.com/ign/all

### Tech:
MacStories: https://www.macstories.net/feed
WindowsCentral: http://feeds.windowscentral.com/wmexperts
Tom's Hardware: https://www.tomshardware.com/feeds/all
Heise (German): https://https://www.heise.de/rss/heise.rdf

## Thanks

A big THANK YOU to [Mario Klingemann](http://quasimondo.com/StackBlurForCanvas/StackBlurDemo.html) for the blur code and [Max Zeryck](https://github.com/mzeryck) for the WebView code.

Also a big THANK YOU to Simon B. Støvring [@simonbs](https://www.twitter.com/simonbs) for his awesome Scriptable App!
