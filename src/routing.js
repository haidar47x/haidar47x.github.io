if (!location.hash) {
  const path = location.pathname;
  if (path !== "/") {
    location.replace("/#" + path);
  }
}
