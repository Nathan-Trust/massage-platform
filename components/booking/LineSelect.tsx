"use client";

import { forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type LineSelectGroup = { label?: string; options: { value: string; label: string }[] };

type Props = {
  id: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  groups: LineSelectGroup[];
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

/** shadcn Select dressed as an underline field to match the form's text inputs. */
export const LineSelect = forwardRef<HTMLButtonElement, Props>(function LineSelect(
  { id, value, onChange, onBlur, placeholder, groups, ...aria },
  ref,
) {
  return (
    <Select value={value ?? ""} onValueChange={onChange}>
      <SelectTrigger ref={ref} id={id} className="line-select" onBlur={onBlur} {...aria}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="line-select-content" position="popper" sideOffset={8}>
        {groups.map((g, i) => (
          <SelectGroup key={g.label ?? i}>
            {g.label && <SelectLabel className="line-select-label">{g.label}</SelectLabel>}
            {g.options.map((o) => (
              <SelectItem key={o.value} value={o.value} className="line-select-item">
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
});
