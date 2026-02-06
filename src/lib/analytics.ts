type ContactFormSubmitPayload = {
  interest: string;
  organizationProvided: boolean;
  messageProvided: boolean;
};

export function trackContactFormSubmit(
  payload: ContactFormSubmitPayload
): void {
  try {
    void payload;
    // TODO: Wire this to Plausible or GA4 when analytics is configured.
  } catch {
    // Keep analytics non-blocking. Form submission must never fail due to tracking.
  }
}
