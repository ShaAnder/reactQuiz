/**
 * Removes empty properties from an object
 * @param {*} params -> (obj) -> takes the object passed into it
 * @returns a new object without any of the empty properties
 * @author ShaAnder
 */

export function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
}
