import { topNavLinks, components } from './all-routes'

export const stringToUrl = (str, path = '/') => {
  return `${path}${str
    .toLowerCase()
    .split(' ')
    .join('-')}`
}


export const findNextAndPrevRoute = (path) => {
  const orderedRoutes = [...topNavLinks, ...components]

  let isValidRoutePath = false
  const extractedRoutes = []
  orderedRoutes.forEach((singleRoute) => {
    let urlString = stringToUrl(singleRoute)

    if (urlString === '/getting-started') {
      urlString = '/'
    }
    if (urlString === path) {
      isValidRoutePath = true
    }
    extractedRoutes.push({ name: singleRoute, path: urlString })
  })

  if (isValidRoutePath === false) {
    return { prev: '', next: '' }
  }

  const currentRouteIndex = extractedRoutes.map(route => route.path).indexOf(path)

  const nextPage = extractedRoutes[currentRouteIndex + 1]
  const prevPage = extractedRoutes[currentRouteIndex - 1]

  return { prev: prevPage || '', next: nextPage || '' }
}
