import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export function Header({
  label,
}: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <CircleUserRound className="h-8 w-8" />
        <h1 className={cn(
          "text-3xl font-semibold",
          font.className,
        )}>
          Auth
        </h1>
      </div>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
}