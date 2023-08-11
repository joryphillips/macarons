import type { LucideProps } from "lucide-react";
import { AlertTriangle, Annoyed, CheckCircle2, Info } from "lucide-react";
import { alertIconStyles } from "./AlertIcon.css";

export interface AlertIconProps extends LucideProps {
  status: keyof typeof alertIconStyles;
}

export function AlertIcon({ status, ...props }: AlertIconProps) {
  switch (status) {
    case "success":
      return <CheckCircle2 className={alertIconStyles[status]} {...props} />;
    case "warning":
      return <AlertTriangle className={alertIconStyles[status]} {...props} />;
    case "error":
      return <Annoyed className={alertIconStyles[status]} {...props} />;
    // case: "info" fallthrough:
    default:
      return <Info className={alertIconStyles[status]} {...props} />;
  }
}
