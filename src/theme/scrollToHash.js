import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

function scrollToHashWithRetries(retries = 30) {
  if (!ExecutionEnvironment.canUseDOM) return

  const { hash } = window.location
  if (!hash) return

  const id = decodeURIComponent(hash.slice(1))
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView()
    return
  }

  if (retries > 0) {
    requestAnimationFrame(() => scrollToHashWithRetries(retries - 1))
  }
}

export function onRouteDidUpdate({ location, previousLocation }) {
  // Run on first load and on real page navigations
  if (!previousLocation || location.pathname !== previousLocation.pathname) {
    // Wait for MDX/content to be in the DOM
    requestAnimationFrame(() => scrollToHashWithRetries())
  }
}
