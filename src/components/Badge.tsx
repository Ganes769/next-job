import { ReactNode } from "react";

function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded border bg-muted px-1  font-semibold text-muted-foreground text-xs ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
