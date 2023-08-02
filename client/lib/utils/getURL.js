export function getURL() {
  const URL = window.location.href;

  if (URL.includes('feed')) {
    return 0;
  }
  if (URL.includes('visited')) {
    return 1;
  }
  if (URL.includes('theme')) {
    return 2;
  }
  if (URL.includes('reservation')) {
    return 3;
  } else {
    return;
  }
}
