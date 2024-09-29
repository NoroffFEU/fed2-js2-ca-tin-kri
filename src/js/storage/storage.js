// export function save(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// export function load(key) {
//   try {
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);
//   } catch {
//     console.log("Error in loading key:", key);
//     return null;
//   }
// }

// export function remove(key) {
//   localStorage.removeItem(key);
// }
export function save(key, value) {
  // Only stringify if it's not a string (for objects/arrays)
  if (typeof value === "string") {
    localStorage.setItem(key, value); // Save plain strings as they are
  } else {
    localStorage.setItem(key, JSON.stringify(value)); // Stringify objects/arrays
  }
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value; // No need to parse strings
  } catch {
    console.log("Error in loading key:", key);
    return null;
  }
}
