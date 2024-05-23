/**
 * Encoding cleaner, fixes any special character not displaying in the str
 * @param {*} params -> (str) string from out question passed as arg
 * @returns the cleaned string
 * @author ShaAnder
 */
export function fixEncoding(str = "") {
  // create a div element, as HTML automatically fixes encoding errors
  const div = document.createElement("div");
  // set the innerHTML of the div to the string
  div.innerHTML = str;
  // now return the inner HTML, we replace these chars, because even HTML won't clean these three
  return div.innerHTML
    .replace(/&amp;/gi, "&")
    .replace(/&gt;/gi, ">")
    .replace(/&lt;/gi, "<");
}
