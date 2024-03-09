export default function myImageLoader({ src, width, quality }) {
  return `https://cdn.federicomengascini.com${src}?width=${width}&quality=${
    quality || 75
  }`;
}
