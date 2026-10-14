"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Field, WhatsAppResult, describe, openWhatsApp } from "@/components/booking/FormParts";
import { COPY } from "@/lib/content";
import { buildCorporateMessage, todayISO, waLink } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  company: z.string().trim().min(1, "Enter your company name."),
  teamSize: z
    .string()
    .trim()
    .min(1, "Enter your team size.")
    .refine((v) => /^\d+$/.test(v) && Number(v) >= 1, "Enter a whole number of people, 1 or more."),
  cityArea: z.string().trim().min(1, "Enter the city or area for the session."),
  date: z
    .string()
    .min(1, "Choose a preferred date.")
    .refine((v) => v >= todayISO(), "Choose today or a later date."),
  message: z.string().trim().optional(),
});

type Values = z.infer<typeof schema>;

export function CorporateForm() {
  const [minDate, setMinDate] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", teamSize: "", cityArea: "", date: "", message: "" },
  });

  useEffect(() => setMinDate(todayISO()), []);

  const values = useWatch({ control });
  const live = schema.safeParse(values);
  const message = submitted && live.success ? buildCorporateMessage(live.data) : null;

  const onSubmit = (data: Values) => {
    setPopupBlocked(!openWhatsApp(waLink(buildCorporateMessage(data))));
    setSubmitted(true);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate aria-labelledby="corp-form-title">
      <h2 id="corp-form-title" className="mb-8 text-[clamp(32px,4vw,46px)]">
        Request a <em>corporate quote</em>
      </h2>
      <div className="grid2">
        <Field id="c-name" label="Name" required error={errors.name?.message}>
          <input className="line-input" autoComplete="name" {...describe("c-name", errors.name?.message)} {...register("name")} />
        </Field>
        <Field id="c-company" label="Company" required error={errors.company?.message}>
          <input
            className="line-input"
            autoComplete="organization"
            {...describe("c-company", errors.company?.message)}
            {...register("company")}
          />
        </Field>
        <Field id="c-size" label="Team size" required error={errors.teamSize?.message}>
          <input
            className="line-input"
            inputMode="numeric"
            {...describe("c-size", errors.teamSize?.message)}
            {...register("teamSize")}
          />
        </Field>
        <Field id="c-city" label="City / area" required error={errors.cityArea?.message}>
          <input
            className="line-input"
            autoComplete="address-level2"
            {...describe("c-city", errors.cityArea?.message)}
            {...register("cityArea")}
          />
        </Field>
        <Field id="c-date" label="Preferred date" required full error={errors.date?.message}>
          <input
            className="line-input"
            type="date"
            min={minDate}
            {...describe("c-date", errors.date?.message)}
            {...register("date")}
          />
        </Field>
        <Field id="c-msg" label="Message" optional full>
          <textarea className="line-input" {...describe("c-msg")} {...register("message")} />
        </Field>
      </div>

      <div className="mt-7 grid gap-4">
        <button type="submit" className="btn btn-dark justify-self-start">
          {COPY.corporate.cta}
          <span className="chip" aria-hidden="true">
            <MessageCircle size={18} strokeWidth={1.8} />
          </span>
        </button>
        <p className="privacy">We use these details only to respond to your enquiry.</p>
      </div>

      {message && (
        <WhatsAppResult heading="Your enquiry is ready" message={message} url={waLink(message)} popupBlocked={popupBlocked} />
      )}
    </form>
  );
}
