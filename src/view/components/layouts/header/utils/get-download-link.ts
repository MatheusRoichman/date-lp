export function getDownloadLink() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return isIOS
    ? process.env.NEXT_PUBLIC_APP_STORE_DOWNLOAD_LINK
    : process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_DOWNLOAD_LINK;
}
