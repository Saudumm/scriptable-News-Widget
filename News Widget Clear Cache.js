// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: trash-alt;
/********************************************
 *                                          *
 *         DELETE NEWS WIDGET CACHE         *
 *                                          *
 *        v1.1.1 - made by @saudumm         *
 *       https://twitter.com/saudumm        *
 *                                          *
 *******************************************/

// GitHub Repo:
// https://github.com/Saudumm/scriptable-News-Widget

let fm = FileManager.local();
let dir = fm.cacheDirectory();
let alertMsg = "No files to delete";

if (fm.fileExists(dir+"/saudumm-news-widget-data")) {
  try {
    fm.remove(dir+"/saudumm-news-widget-data");
    alertMsg = "All cache files deleted!";
  } catch(err) {
    alertMsg = "ERROR while deleting cache files";
  }
}

let alert = new Alert();
alert.message = "\n"+alertMsg;
alert.title = "Clear News Widget Cache";
alert.presentAlert();
