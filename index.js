const defaultLanguage = 'no_nb'

/**
 * Returns function for selected document definition
 * @param {string} id The id for document definition 
 * @param {string} language The language for the definition
 * @returns {function} 
 */
function getDocumentDefinition (id, language = defaultLanguage) {
  const definition = `./definitions/${id}-${language}`
  const fallback = `./definitions/${id}-${defaultLanguage}`
  try {
    return require(definition)
  } catch (error) {
    console.warn(`Could not find ${definition}. Trying fallback.`)
    return require(fallback)
  }
}

module.exports = getDocumentDefinition
