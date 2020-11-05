# scriptable-News-Widget

iOS Scriptable News Widget (for websites using WordPress or RSS feeds)

![widgets](https://github.com/Saudumm/scriptable-News-Widget/blob/main/images/widgets.jpg)

## Requirements:

- iOS14
- Latest version of Scriptable for iOS: [Link](https://apps.apple.com/de/app/scriptable/id1405459188)

---

__If someone would like to buy me a coffee 😊: https://ko-fi.com/saudumm__

---

## Support

I just started learning JavaScript, so there will be bugs.
If there are any issues or questions, feel free to open an issue here on GitHub or contact me via Twitter: [@saudumm](https://www.twitter.com/saudumm)
__Please mention the URL of the website or RSS feed, so I can help you faster.__

## Notes and known bugs

- While most of the RSS feeds should work, pure Atom Feeds don't work at the moment.

## Changelog

- v1.0.0 - Initial Upload

## Setup:

First, you should add the __News-Widget.js__ Script to Scriptable. Either copy the content of the __News-Widget.js__ file and paste it into a new script in Scriptables or download the file and add it to your iCloud Drive Scriptables folder in iCloud Drive (Files App)

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

- example:
    - small|https://www.stadt-bremerhaven.de|Caschys Blog|true|background.jpg|false|true
- parameter order has to be:
    - widget size (small, large, medium)
    - site url (url of the WordPress Website or RSS feed URL)
    - site name (name of the website, displayed at the top of the widget)
    - show post images (use true if you want to display the images of the posts or set to false if not)
    - background image ()
    - blur background image ()
    - background image gradient ()
- parameters have to be separated by |
- you don't have to set all parameters, the following examples will work just fine:
    - small|https://www.stadt-bremerhaven.de|Caschys Blog
    - large|https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml|NY Times RSS|true|background.jpg
- parameters that are not set will be set by the standard widget config in the source code
- you can change more things like background color, font color and more in the source code. Look at the comments in the code for explanations

### News-Widget-Clear-Cache.js

__News-Widget__ stores images and other data on your iPhone for faster loading and to save mobile data. You can't access those files directly. If there are problems or you want to delete all the cache files, just add __News-Widget-Clear-Cache.js__ to Scriptables and run the script in the app. It'll delete all cache files from News-Widget.

# Links:

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
