const defaultLang = 'no_nb'

function getDocumentDefinition (id, lang = defaultLang) {
  const definition = `./definitions/${id}-${lang}`
  const fallback = `./definitions/${id}-${defaultLang}`
  try {
    return require(definition)
  } catch (error) {
    console.warn(`Could not find ${definition}. Trying fallback.`)
    return require(fallback)
  }
}

module.exports = getDocumentDefinition
