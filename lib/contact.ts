export const contactServiceOptions = [
  "Aluminium windows",
  "Aluminium doors",
  "Facades & glazing",
  "Aluminium railings",
  "Frameless shower cubicles",
  "Interiors & light steel",
  "Other enquiry",
] as const

export type ContactField = "name" | "email" | "phone" | "service" | "message"

export type ContactFormState = {
  status: "idle" | "success" | "error" | "fallback"
  message: string
  /** Field-level validation messages, keyed by input name. */
  fieldErrors?: Partial<Record<ContactField, string>>
  /** Prefilled mailto link used when server-side email is unavailable. */
  mailtoHref?: string
}

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
}
