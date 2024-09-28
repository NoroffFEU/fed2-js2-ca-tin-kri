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
  localStorage.setItem(key, JSON.stringify(value)); // Token is saved as a string
  console.log(`Saved ${key}:`, value); // Log to confirm saving
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    console.log(`Loaded ${key}:`, value); // Log to verify loading
    return JSON.parse(value);
  } catch {
    console.error("Error in loading key:", key); // Use error level for logging
    return null;
  }
}
