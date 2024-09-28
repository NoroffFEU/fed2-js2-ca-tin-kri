export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    console.log("Error in loading key:", key);
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
