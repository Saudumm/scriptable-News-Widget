// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: sync-alt;
/********************************************
 *                                          *
 *       UPDATE OR INSTALL NEWS WIDGET      *
 *                                          *
 *        v1.0.1 - made by @saudumm         *
 *       https://twitter.com/saudumm        *
 *                                          *
 *******************************************/

// GitHub Repo:
// https://github.com/Saudumm/scriptable-News-Widget
 
let fm
try {fm = FileManager.iCloud()} catch (err) {fm = FileManager.local()}
try {fm.documentsDirectory()} catch(e) {fm = FileManager.local()}

const docDir = fm.documentsDirectory()
const path = fm.joinPath(docDir, "News Widget.js")
const pathAlt = fm.joinPath(docDir, "News-Widget.js")
const pathBackup = fm.joinPath(docDir, "News Widget Backup.js")
const pathBackup2 = fm.joinPath(docDir, "News Widget Backup2.js")

let alertMsg = "No Message"

try {
  const latestVersion = await new Request("https://raw.githubusercontent.com/Saudumm/scriptable-News-Widget/main/News%20Widget.js").loadString();
  
  if (fm.fileExists(pathBackup2)) {await fm.remove(pathBackup2);}

  if (fm.fileExists(pathBackup)) {await fm.move(pathBackup, pathBackup2);}

  if (fm.fileExists(pathAlt)) {
    await fm.move(pathAlt, pathBackup);
  } else if (fm.fileExists(path)) {
    await fm.move(path, pathBackup);
  }

  if (fm.fileExists(path) || await fm.fileExists(pathAlt)) {
    await fm.remove(path);
    await fm.remove(pathAlt);
  }
  
  await fm.writeString(path, latestVersion);
  
  if (fm.fileExists(pathBackup2)) {await fm.remove(pathBackup2);}
  
  alertMsg = "News Widget successfully updated!\n\nOld Script has been saved as\n'News Widget Backup'"
} catch(err) {
  alertMsg = "Error while updateing News Widget\n\n"+err+"\n\nPlease Check 'News Widget' \nor\n'News Widget Backup'"
}

let alert = new Alert();
alert.message = "\n"+alertMsg;
alert.title = "News Widget Update";
alert.addAction("OK");
alert.presentAlert();
