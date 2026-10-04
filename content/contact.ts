export const budgetOptions = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
] as const;

export const projectTypeOptions = [
  "Website / web app",
  "WordPress",
  "Automation & integrations",
  "IT / DevOps consulting",
  "Something else",
] as const;

export const contactCopy = {
  title: "Start a project",
  subtitle: "Tell us about your project and we will reply within one business day.",
  success: "Thanks! Your message has been sent. We will be in touch within one business day.",
  error: "Something went wrong sending your message. Please try again or email us directly.",
  notConfigured:
    "The contact form is not configured yet. Please email us directly instead.",
};
