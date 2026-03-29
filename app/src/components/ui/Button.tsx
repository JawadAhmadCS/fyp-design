import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "iconBubble"
  | "sidebarItem"
  | "configRail"
  | "dashboardFilter"
  | "sidebarSoft"
  | "sidebarSoftIcon"
  | "assistantChip"
  | "publish"
  | "optimize"
  | "import"
  | "cancel"
  | "landingHeader"
  | "landingPrimary"
  | "landingSecondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Button({ variant, className, startIcon, endIcon, children, ...rest }: ButtonProps) {
  return (
    <button className={cx("ui-btn", `ui-btn--${variant}`, className)} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
