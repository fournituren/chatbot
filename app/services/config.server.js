/**
 * Configuration Service
 * Centralizes all configuration values for the chat service
 */
export const AppConfig = {
  // API Configuration
  api: {
    defaultModel: 'claude-3-5-sonnet-20241022',
    maxTokens: 2000,
    defaultPromptType: 'fournitureExpertNL_V6',
    maxConversationTurns: 5  // Houdt alleen laatste 5 berichten
  },
  // Error Message Templates
  errorMessages: {
    missingMessage: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    apiUnsupported: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    authFailed: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    apiKeyError: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    rateLimitExceeded: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    rateLimitDetails: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl.",
    genericError: "Oeps! Er ging iets mis. Probeer het opnieuw of mail naar info@fournituren.nl."
  },
  // Tool Configuration
  tools: {
    productSearchName: "search_shop_catalog",
    maxProductsToDisplay: 3
  }
};

export default AppConfig;
