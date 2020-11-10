// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: trash-alt;
/********************************************
 *                                          *
 *         DELETE NEWS WIDGET CACHE         *
 *                                          *
 *        v1.1.3 - made by @saudumm         *
 *       https://twitter.com/saudumm        *
 *                                          *
 *******************************************/

// GitHub Repo:
// https://github.com/Saudumm/scriptable-News-Widget

let fm = FileManager.local();
let docDir = fm.documentsDirectory();
let alertMsg = "No files to delete";

if (await fm.fileExists(docDir+"/saudumm-news-widget-data")) {
  try {
    await fm.remove(docDir+"/saudumm-news-widget-data");
    alertMsg = "All cache files deleted!";
  } catch(err) {
    alertMsg = "Error while deleting cache files\n\n"+err;
  }
}

let alert = new Alert();
alert.message = "\n"+alertMsg;
alert.title = "Clear News Widget Cache";
alert.addAction("OK");
alert.presentAlert();
