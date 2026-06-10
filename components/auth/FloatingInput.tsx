import * as React from "react";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  success?: boolean;
  trailing?: React.ReactNode;
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, success, trailing, id, className, value, defaultValue, ...props }, ref) => {
    const inputId = id || React.useId();
    const hasValue = (value ?? defaultValue ?? "") !== "";
    return (
      <div className="w-full">
        <div
          className={cn(
            "relative rounded-md border bg-background transition-colors",
            "border-[hsl(var(--neutral-200))] focus-within:border-[hsl(var(--navy-600))]",
            "focus-within:ring-2 focus-within:ring-[hsl(var(--navy-600)/0.15)]",
            error && "border-[hsl(var(--red-600))] focus-within:border-[hsl(var(--red-600))] focus-within:ring-[hsl(var(--red-600)/0.15)]",
          )}
        >
          <input
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            placeholder=" "
            className={cn(
              "peer block w-full h-[52px] px-4 pt-5 pb-1.5 text-[16px] bg-transparent rounded-md",
              "text-foreground placeholder-transparent focus:outline-none",
              (trailing || success) && "pr-11",
              className,
            )}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-[hsl(var(--neutral-500))] transition-all duration-150",
              "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[hsl(var(--navy-700))]",
              "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold",
              hasValue && "top-2 translate-y-0 text-[11px] font-semibold",
              error && "text-[hsl(var(--red-600))] peer-focus:text-[hsl(var(--red-600))]",
            )}
          >
            {label}
          </label>
          {(trailing || success) && (
            <div className="absolute inset-y-0 right-3 flex items-center text-[hsl(var(--neutral-500))]">
              {trailing ? trailing : success && <Check className="h-4 w-4 text-[hsl(var(--india-green))]" />}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[hsl(var(--red-600))]">
            <AlertCircle className="h-3.5 w-3.5" />
            {error}
          </p>
        )}
      </div>
    );
  },
);
FloatingInput.displayName = "FloatingInput";
