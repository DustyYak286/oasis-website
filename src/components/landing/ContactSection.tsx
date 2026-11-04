"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle,
  Handshake,
  HeartHandshake,
  Linkedin,
  Loader2,
  Mail,
  School,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { Aurora } from "@/components/ui/aurora";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trackContactFormSubmit } from "@/lib/analytics";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormFieldName = "name" | "email" | "organization" | "interest" | "message";
type FormspreeError = { field?: string; message?: string };

const audiences = [
  { value: "pilot", icon: School, title: "Schools", text: "Bring Oasis to your classrooms." },
  { value: "partnership", icon: Handshake, title: "Partners", text: "Devices, connectivity or education programs." },
  { value: "donation", icon: HeartHandshake, title: "Supporters", text: "Help us reach more schools." },
];

const FALLBACK_SUBMIT_ERROR_MESSAGE = `Try again or email ${CONTACT_EMAIL}.`;
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const isFormFieldName = (field: string): field is FormFieldName =>
  field === "name" ||
  field === "email" ||
  field === "organization" ||
  field === "interest" ||
  field === "message";

const isValidFormspreeEndpoint = (endpoint?: string): boolean => {
  if (!endpoint) {
    return false;
  }

  try {
    const parsed = new URL(endpoint);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "formspree.io" &&
      parsed.pathname.startsWith("/f/")
    );
  } catch {
    return false;
  }
};

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string>("");

  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    setValue,
    setFocus,
    formState: { errors, touchedFields, submitCount },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      interest: "",
      message: "",
      website: "",
    },
  });

  const interest = useWatch({ control, name: "interest" });

  const choose = (value: string) => {
    setValue("interest", value, { shouldValidate: submitCount > 0 });
    if (submitStatus === "success") setSubmitStatus("idle");
    setFocus("name");
  };

  const hasValidEndpoint = useMemo(
    () => isValidFormspreeEndpoint(FORMSPREE_ENDPOINT),
    []
  );

  const showNameError = (touchedFields.name || submitCount > 0) && errors.name;
  const showEmailError =
    (touchedFields.email || submitCount > 0) && errors.email;
  const showOrganizationError =
    (touchedFields.organization || submitCount > 0) && errors.organization;
  const showInterestError =
    (touchedFields.interest || submitCount > 0) && errors.interest;
  const showMessageError =
    (touchedFields.message || submitCount > 0) && errors.message;

  const onSubmit = async (data: FormData) => {
    if (!hasValidEndpoint) {
      setSubmitStatus("error");
      setSubmitErrorMessage(
        "Form is not configured correctly. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT."
      );
      return;
    }

    if (data.website?.trim()) {
      setSubmitErrorMessage("");
      clearErrors();
      setSubmitStatus("success");
      reset();
      return;
    }

    clearErrors();
    setSubmitErrorMessage("");
    setSubmitStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organization: data.organization,
          interest: data.interest,
          message: data.message,
          website: data.website,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        void trackContactFormSubmit({
          interest: data.interest,
          organizationProvided: Boolean(data.organization?.trim()),
          messageProvided: Boolean(data.message?.trim()),
        });
      } else {
        const payload = (await response.json().catch(() => null)) as
          | { errors?: FormspreeError[]; error?: string }
          | null;
        const responseErrors = payload?.errors ?? [];
        let hasFieldError = false;

        for (const formError of responseErrors) {
          if (!formError.field || !isFormFieldName(formError.field)) {
            continue;
          }

          hasFieldError = true;
          setError(formError.field, {
            type: "server",
            message: formError.message ?? "Invalid value.",
          });
        }

        if (!hasFieldError) {
          setSubmitErrorMessage(
            payload?.error?.trim() || FALLBACK_SUBMIT_ERROR_MESSAGE
          );
        }

        setSubmitStatus("error");
      }
    } catch {
      setSubmitErrorMessage(FALLBACK_SUBMIT_ERROR_MESSAGE);
      setSubmitStatus("error");
    }
  };

  const field = (hasError: unknown) =>
    cn(
      "h-11 rounded-lg border-line bg-white px-3.5 text-[15px] shadow-none focus-visible:border-blue focus-visible:ring-blue/20",
      Boolean(hasError) && "border-ruby"
    );

  return (
    <section
      id="contact"
      className="grain bg-night-sky relative isolate scroll-mt-16 overflow-hidden text-white"
    >
      <Aurora className="-z-10" baseline={0.84} tilt={0.08} seed={3.4} scale={0.85} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-night"
      />

      <Container className="pb-40 pt-24 sm:pb-48 sm:pt-32">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_28rem] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-6"
          >
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[3.5rem]">
              AI shouldn’t stop where the internet does.
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" aria-label="Get involved">
              {audiences.map((a) => {
                const selected = interest === a.value;
                return (
                  <li key={a.value}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => choose(a.value)}
                      className={cn(
                        "group flex h-full w-full gap-4 rounded-2xl p-4 text-left ring-1 backdrop-blur-sm transition-[background-color,box-shadow] duration-300 xl:flex-col xl:gap-3 xl:p-5",
                        selected
                          ? "bg-white/[0.14] ring-sky/70"
                          : "bg-white/[0.05] ring-white/15 hover:bg-white/[0.09] hover:ring-white/30"
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
                          selected ? "bg-sky text-night" : "bg-white/10 text-sky"
                        )}
                      >
                        <a.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{a.title}</span>
                        <span className="mt-1 block text-sm leading-snug text-white/65">{a.text}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 space-y-3 text-[15px]">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex w-fit items-center gap-3 text-white/85 transition-colors hover:text-white"
              >
                <Mail className="size-[18px] text-sky" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-white/85 transition-colors hover:text-white"
              >
                <Linkedin className="size-[18px] text-sky" aria-hidden="true" />
                David-Andrei Bratu, co-founder
                <ArrowUpRight className="size-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-white p-6 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8"
          >
            {submitStatus === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle className="mx-auto mb-4 size-12 text-leaf" aria-hidden="true" />
                <h3 className="text-2xl font-semibold">Thank you</h3>
                <p className="mt-2 text-slate" aria-live="polite">
                  We&apos;ll get back to you soon.
                </p>
                <Button onClick={() => setSubmitStatus("idle")} variant="outline" className="mt-6 rounded-full">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <h3 className="text-xl font-semibold tracking-tight">Write to us</h3>

                {!hasValidEndpoint && (
                  <div
                    className="rounded-lg border border-ruby/30 bg-blush p-3 text-sm text-ruby"
                    role="alert"
                    aria-live="polite"
                  >
                    Form config missing: set <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to a valid
                    Formspree endpoint.
                  </div>
                )}

                <input
                  {...register("website")}
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" autoComplete="name" {...register("name")} className={field(showNameError)} />
                    {showNameError && <p className="text-xs text-ruby">{showNameError.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={field(showEmailError)}
                    />
                    {showEmailError && <p className="text-xs text-ruby">{showEmailError.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">
                    Organization <span className="font-normal text-mist">(optional)</span>
                  </Label>
                  <Input
                    id="organization"
                    autoComplete="organization"
                    {...register("organization")}
                    className={field(showOrganizationError)}
                  />
                  {showOrganizationError && (
                    <p className="text-xs text-ruby">{showOrganizationError.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I&apos;m interested in</Label>
                  <Controller
                    name="interest"
                    control={control}
                    defaultValue=""
                    render={({ field: f }) => (
                      <Select value={f.value} onValueChange={f.onChange}>
                        <SelectTrigger id="interest" className={cn(field(showInterestError), "w-full data-[size=default]:h-11")}>
                          <SelectValue placeholder="Choose one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pilot">Bringing Oasis to a school</SelectItem>
                          <SelectItem value="partnership">Partnering with Oasis</SelectItem>
                          <SelectItem value="donation">Supporting Oasis</SelectItem>
                          <SelectItem value="newsletter">Following our progress</SelectItem>
                          <SelectItem value="other">Something else</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {showInterestError && <p className="text-xs text-ruby">{showInterestError.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="font-normal text-mist">(optional)</span>
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={cn(
                      "flex w-full rounded-lg border bg-white px-3.5 py-2.5 text-[15px] outline-none transition-[color,box-shadow] focus-visible:border-blue focus-visible:ring-[3px] focus-visible:ring-blue/20",
                      showMessageError ? "border-ruby" : "border-line"
                    )}
                  />
                  {showMessageError && <p className="text-xs text-ruby">{showMessageError.message}</p>}
                </div>

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-sm text-ruby" role="alert" aria-live="polite">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{submitErrorMessage || FALLBACK_SUBMIT_ERROR_MESSAGE}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={submitStatus === "loading" || !hasValidEndpoint}
                  className="h-12 w-full rounded-full bg-blue text-[15px] text-white hover:bg-deep"
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
