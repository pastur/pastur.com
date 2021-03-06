const noop = () => undefined

async function preloadImages({ images, onLoad = noop }) {
  const promises = images.map(
    src =>
      new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve()
        img.onerror = reject()
      }),
  )

  await Promise.all(promises)
  onLoad()
}

export { preloadImages }
