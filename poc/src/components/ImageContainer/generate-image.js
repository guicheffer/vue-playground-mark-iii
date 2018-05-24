export default ({ isCropped, size, url }) => {
  return url.replace('{action}', isCropped).replace('{width}x{height}', size)
}
