"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with actual form ID

export function CTASection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
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
            <CardContent className="p-6 md:p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-oasis-accent-red mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-oasis-accent-red">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={errors.name ? "border-oasis-accent-red" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-oasis-accent-red">
                          {errors.name.message}
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
                        className={errors.email ? "border-oasis-accent-red" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-oasis-accent-red">
                          {errors.email.message}
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
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">
                      I&apos;m interested in{" "}
                      <span className="text-oasis-accent-red">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("interest", value)}
                    >
                      <SelectTrigger
                        className={errors.interest ? "border-oasis-accent-red" : ""}
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
                    {errors.interest && (
                      <p className="text-xs text-oasis-accent-red">
                        {errors.interest.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about how you'd like to get involved..."
                      {...register("message")}
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-oasis-accent-red text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full bg-oasis-primary hover:bg-oasis-primary-dark text-white py-6 text-lg"
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
