import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

/** A simple phone bezel around a mobile screenshot. */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[2.1rem] bg-ink p-[7px] shadow-[0_40px_70px_-28px_rgba(15,27,51,0.55),0_14px_30px_-14px_rgba(15,27,51,0.3)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[1.65rem] bg-white">
        <div className="relative h-6 bg-white" aria-hidden="true">
          <span className="absolute left-1/2 top-1.5 h-[15px] w-[30%] -translate-x-1/2 rounded-full bg-ink" />
        </div>
        {children}
      </div>
    </div>
  );
}
