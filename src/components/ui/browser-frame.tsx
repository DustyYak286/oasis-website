import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

/** A light browser window around a product screenshot, as in the deck. */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_60px_-24px_rgba(15,27,51,0.28),0_10px_24px_-12px_rgba(15,27,51,0.12)]",
        className
      )}
    >
      <div className="relative flex h-8 items-center border-b border-line bg-[#F2F4F8] px-3 sm:h-9">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#CED3DC]" />
          <span className="size-2.5 rounded-full bg-[#CED3DC]" />
          <span className="size-2.5 rounded-full bg-[#CED3DC]" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-5 w-[38%] min-w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#DEE3EA] bg-white text-[10px] font-medium text-slate sm:h-6 sm:text-xs">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
