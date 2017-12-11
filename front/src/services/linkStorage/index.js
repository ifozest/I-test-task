import 'whatwg-fetch';

/**
 * Fetch all links
 */
export const fetchLinks = () => JSON.parse(sessionStorage.getItem('links')) || [];

/**
 * Add new link to the beginning of already existing links
 * @param {Object} link - link to add
 * @return {Object} same link object
 */
export const addLink = (link) => {
  const links = fetchLinks();
  links.unshift(link);
  sessionStorage.setItem('links', JSON.stringify(links));
  return link;
};

/**
 * Removes all links
 */
export const clear = () => sessionStorage.setItem('links', JSON.stringify([]));

/**
 * Check ajax response status
 * // TODO move in request middleware service
 * @param response
 * @return {*}
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Parse response body
 * // TODO move in request middleware service
 * @param response
 */
const parseJSON = response => response.json();


/**
 * Send request to the server with url in the body that should be shorten
 * @param {string} url - url that should be shorten
 * @return {Promise} object with data of new created Link
 */
export const createShortenLink = url => fetch('/api/shorten', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url,
  }),
}).then(checkStatus)
  .then(parseJSON)
  .then(addLink);
