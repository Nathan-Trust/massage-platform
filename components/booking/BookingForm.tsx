"use client";

import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Info, MessageCircle } from "lucide-react";
import { Field, WhatsAppResult, describe, openWhatsApp } from "@/components/booking/FormParts";
import { LineSelect } from "@/components/booking/LineSelect";
import { BOOKABLE, CITIES, COPY, findBookable, formatNaira } from "@/lib/content";
import { buildBookingMessage, todayISO, waLink } from "@/lib/whatsapp";

const schema = z.object({
  item: z.string().optional(),
  city: z
    .string()
    .refine((v) => (CITIES as readonly string[]).includes(v), "Select the city where you’d like your session."),
  area: z.string().trim().min(1, "Enter your area or address so we can check we can reach you."),
  date: z
    .string()
    .min(1, "Choose your preferred date.")
    .refine((v) => v >= todayISO(), "Choose today or a later date."),
  time: z.string().min(1, "Choose a preferred time. We’ll confirm the exact slot."),
  name: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

type Values = z.infer<typeof schema>;

export function BookingForm({ initialItem }: { initialItem?: string }) {
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
    defaultValues: { item: initialItem ?? "", city: "", area: "", date: "", time: "", name: "", notes: "" },
  });

  useEffect(() => setMinDate(todayISO()), []);

  const values = useWatch({ control });
  const selected = findBookable(values.item);

  // Once submitted, the message follows any edits (e.g. a different package) while the form stays valid.
  const live = schema.safeParse(values);
  const message = submitted && live.success ? buildBookingMessage(live.data) : null;

  const onSubmit = (data: Values) => {
    const url = waLink(buildBookingMessage(data));
    setPopupBlocked(!openWhatsApp(url));
    setSubmitted(true);
  };

  const packages = BOOKABLE.filter((b) => b.kind === "package");
  const services = BOOKABLE.filter((b) => b.kind === "service");

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Booking request">
      <div className="grid2">
        <Field id="b-item" label="Service or package" full>
          <Controller
            control={control}
            name="item"
            render={({ field }) => (
              <LineSelect
                {...describe("b-item")}
                ref={field.ref}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Choose a service or package"
                groups={[
                  { label: "Packages", options: packages.map((p) => ({ value: p.id, label: `${p.label} · ${formatNaira(p.price!)}` })) },
                  { label: "Massage services", options: services.map((x) => ({ value: x.id, label: `${x.label} · ${formatNaira(x.price!)}` })) },
                ]}
              />
            )}
          />
        </Field>

        {selected?.price && (
          <div className="price-box">
            <div>
              <span className="mb-1 block">Listed price</span>
              <b>{formatNaira(selected.price)}</b>
            </div>
            <span>Any travel fee and the final total are confirmed with you on WhatsApp before any payment.</span>
          </div>
        )}

        <Field
          id="b-city"
          label="City"
          required
          hint="Choosing a city doesn’t guarantee every address can be served. We’ll confirm."
          error={errors.city?.message}
        >
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <LineSelect
                {...describe("b-city", errors.city?.message, true)}
                ref={field.ref}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Select your city"
                groups={[{ options: CITIES.map((c) => ({ value: c, label: c })) }]}
              />
            )}
          />
        </Field>

        <Field id="b-area" label="Area or address" required error={errors.area?.message}>
          <input
            className="line-input"
            autoComplete="street-address"
            placeholder="e.g. Lekki Phase 1"
            {...describe("b-area", errors.area?.message)}
            {...register("area")}
          />
        </Field>

        <Field id="b-date" label="Preferred date" required error={errors.date?.message}>
          <input
            className="line-input"
            type="date"
            min={minDate}
            {...describe("b-date", errors.date?.message)}
            {...register("date")}
          />
        </Field>

        <Field
          id="b-time"
          label="Preferred time"
          required
          hint="A preference, not a confirmed slot."
          error={errors.time?.message}
        >
          <input
            className="line-input"
            type="time"
            {...describe("b-time", errors.time?.message, true)}
            {...register("time")}
          />
        </Field>

        <Field id="b-name" label="Name">
          <input className="line-input" autoComplete="name" {...describe("b-name")} {...register("name")} />
        </Field>

        <Field id="b-notes" label="Notes" optional>
          <input className="line-input" {...describe("b-notes")} {...register("notes")} />
        </Field>
      </div>

      <div className="mt-7 grid gap-4">
        <div className="notice">
          <Info size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>{COPY.book.important}</span>
        </div>
        <button type="submit" className="btn btn-dark justify-self-start">
          {COPY.book.button}
          <span className="chip" aria-hidden="true">
            <MessageCircle size={18} strokeWidth={1.8} />
          </span>
        </button>
        <p className="privacy">
          We use these details only to respond to your request. Please don’t include health information here; we can
          discuss anything relevant privately.
        </p>
      </div>

      {message && (
        <WhatsAppResult
          heading="Your booking request is ready"
          message={message}
          url={waLink(message)}
          popupBlocked={popupBlocked}
        />
      )}
    </form>
  );
}
