import 'isomorphic-fetch'

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText)
  return response
}

export function apiJson(url, opts) {
  return fetch(url, opts)
    .then(handleErrors)
    .then(resp => resp.json())
    .then(json => ({ json }))
    .catch(ex => ({ error: ex.message }))
}

export function apiHttp(url, opts) {
  return fetch(url, opts)
    .then(handleErrors)
    .then(response => ({ response }))
    .catch(ex => ({ error: ex.message }))
}
