import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { FormError } from "./form-error";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  description?: string;
}

export function FormField({ id, label, error, children, description }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-medium">
        {label}
      </Label>
      {children}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <FormError message={error} />
    </div>
  );
}
