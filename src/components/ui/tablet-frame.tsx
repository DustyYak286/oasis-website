import { cn } from "@/lib/utils";

interface TabletFrameProps {
  children: React.ReactNode;
  className?: string;
}

/** A landscape tablet bezel around a screenshot, to match the phone frame. */
export function TabletFrame({ children, className }: TabletFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] bg-ink p-[9px] shadow-[0_40px_70px_-28px_rgba(15,27,51,0.5),0_14px_30px_-14px_rgba(15,27,51,0.25)] ring-1 ring-white/10 sm:rounded-[2rem] sm:p-3",
        className
      )}
    >
      <div className="overflow-hidden rounded-[1.05rem] bg-white sm:rounded-[1.3rem]">{children}</div>
    </div>
  );
}
