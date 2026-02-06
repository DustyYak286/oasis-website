"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Section } from "@/components/layout";
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
import { Card, CardContent } from "@/components/ui/card";
import { trackContactFormSubmit } from "@/lib/analytics";

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

const FALLBACK_SUBMIT_ERROR_MESSAGE =
  "Try again or email contact@oasis-edu.org.";
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

export function CTASection() {
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
      const response = await fetch(FORMSPREE_ENDPOINT, {
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

  return (
    <Section id="contact" background="primary" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
            Join the Movement
          </h2>
          <p className="text-lg [@media(min-width:360px)]:text-xl text-white/90 mb-7 sm:mb-8 leading-relaxed">
            Help us bridge the education gap worldwide. Whether you&apos;re a school,
            organization, donor, or simply passionate about education—there&apos;s a
            place for you in the Oasis community.
          </p>

          <div className="space-y-4">
            {[
              "Partner with us to bring Oasis to your community",
              "Support our mission through donations",
              "Stay updated with our newsletter",
              "Join our pilot program",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="h-5 w-5 text-oasis-accent-red flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-5 sm:p-6 md:p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-oasis-accent-red mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6" aria-live="polite">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    variant="outline"
                    className="hover:bg-oasis-accent-red hover:text-white hover:border-oasis-accent-red"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  {!hasValidEndpoint && (
                    <div
                      className="rounded-md border border-oasis-accent-red/40 bg-oasis-accent-red/10 p-3 text-sm text-oasis-accent-red"
                      role="alert"
                      aria-live="polite"
                    >
                      Form config missing: set{" "}
                      <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to a valid
                      Formspree endpoint (example:{" "}
                      <code>https://formspree.io/f/your_form_id</code>).
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-oasis-accent-red">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={showNameError ? "border-oasis-accent-red min-h-10" : "min-h-10"}
                      />
                      {showNameError && (
                        <p className="text-xs text-oasis-accent-red">
                          {showNameError.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-oasis-accent-red">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className={showEmailError ? "border-oasis-accent-red min-h-10" : "min-h-10"}
                      />
                      {showEmailError && (
                        <p className="text-xs text-oasis-accent-red">
                          {showEmailError.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      placeholder="Your school or organization"
                      {...register("organization")}
                      className={
                        showOrganizationError
                          ? "border-oasis-accent-red min-h-10"
                          : "min-h-10"
                      }
                    />
                    {showOrganizationError && (
                      <p className="text-xs text-oasis-accent-red">
                        {showOrganizationError.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">
                      I&apos;m interested in{" "}
                      <span className="text-oasis-accent-red">*</span>
                    </Label>
                    <Controller
                      name="interest"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className={
                              showInterestError
                                ? "border-oasis-accent-red w-full min-h-10"
                                : "w-full min-h-10"
                            }
                          >
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pilot">Pilot Program</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="donation">Donation</SelectItem>
                            <SelectItem value="newsletter">Newsletter</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {showInterestError && (
                      <p className="text-xs text-oasis-accent-red">
                        {showInterestError.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about how you'd like to get involved..."
                      {...register("message")}
                      className={
                        showMessageError
                          ? "flex min-h-[100px] w-full rounded-md border border-oasis-accent-red bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          : "flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      }
                    />
                    {showMessageError && (
                      <p className="text-xs text-oasis-accent-red">
                        {showMessageError.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "error" && (
                    <div
                      className="flex items-center gap-2 text-oasis-accent-red text-sm"
                      role="alert"
                      aria-live="polite"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span>
                        {submitErrorMessage || FALLBACK_SUBMIT_ERROR_MESSAGE}
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitStatus === "loading" || !hasValidEndpoint}
                    className="w-full bg-oasis-primary hover:bg-oasis-primary-dark text-white py-6 text-lg min-h-12"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
