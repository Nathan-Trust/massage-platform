import { BRAND, findBookable, formatNaira } from "@/lib/content";

type Line = [label: string, value: string | undefined | null];

// Only filled values become lines, so a message never carries empty labels or "undefined" (AC-08).
const toLines = (pairs: Line[]) =>
  pairs
    .map(([label, value]) => [label, value?.trim()] as const)
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const formatDate = (isoDate: string) => {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit", hour12: true });
};

export type BookingRequest = {
  item?: string;
  name?: string;
  city: string;
  area: string;
  date: string;
  time: string;
  notes?: string;
};

export function buildBookingMessage(r: BookingRequest) {
  const item = findBookable(r.item);
  const itemLabel = item ? (item.price ? `${item.label} (${formatNaira(item.price)})` : item.label) : undefined;
  return [
    "Hello Bliss, I’d like to request a booking.",
    toLines([
      ["Service/package", itemLabel],
      ["Name", r.name],
      ["City", r.city],
      ["Area/address", r.area],
      ["Preferred date", formatDate(r.date)],
      ["Preferred time", formatTime(r.time)],
      ["Notes", r.notes],
    ]),
    "Please confirm availability, the total price, any travel fee and the deposit required.",
  ].join("\n\n");
}

export type CorporateEnquiry = {
  name: string;
  company: string;
  teamSize: string;
  cityArea: string;
  date: string;
  message?: string;
};

export function buildCorporateMessage(r: CorporateEnquiry) {
  return [
    "Hello Bliss, I’d like to request a corporate wellness quote.",
    toLines([
      ["Name", r.name],
      ["Company", r.company],
      ["Team size", r.teamSize],
      ["City/area", r.cityArea],
      ["Preferred date", formatDate(r.date)],
      ["Message", r.message],
    ]),
  ].join("\n\n");
}

export const todayISO = () => {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
};
