import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { FloatingInput, FloatingInputProps } from "./FloatingInput";
import { passwordStrength, PasswordStrength } from "@/lib/authValidation";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends Omit<FloatingInputProps, "type" | "trailing"> {
  showStrength?: boolean;
}

const strengthMap: Record<PasswordStrength, { label: string; width: string; color: string }> = {
  empty: { label: "", width: "w-0", color: "" },
  weak: { label: "Weak", width: "w-1/3", color: "bg-[hsl(var(--red-600))]" },
  medium: { label: "Medium", width: "w-2/3", color: "bg-[hsl(var(--orange-500))]" },
  strong: { label: "Strong", width: "w-full", color: "bg-[hsl(var(--india-green))]" },
};

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showStrength, value, onChange, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    const v = typeof value === "string" ? value : "";
    const s = strengthMap[passwordStrength(v)];

    return (
      <div className="w-full">
        <FloatingInput
          ref={ref}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          autoComplete="current-password"
          trailing={
            <button
              type="button"
              onClick={() => setShow((x) => !x)}
              aria-label={show ? "Hide password" : "Show password"}
              className="grid h-8 w-8 place-items-center rounded-sm hover:bg-[hsl(var(--neutral-100))] transition-colors"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          {...props}
        />
        {showStrength && v && (
          <div className="mt-2 space-y-1">
            <div className="h-1 w-full rounded-full bg-[hsl(var(--neutral-150))] overflow-hidden">
              <div className={cn("h-full transition-all duration-300", s.width, s.color)} />
            </div>
            <p className="text-xs font-medium text-[hsl(var(--neutral-500))]">
              Strength: <span className="text-foreground">{s.label}</span>
            </p>
          </div>
        )}
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";
