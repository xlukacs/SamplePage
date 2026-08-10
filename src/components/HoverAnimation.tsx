import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HoverAnimation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hover Animation</CardTitle>
        <CardDescription>
          Hover the shape to speed it up, scale it, and spin the ring.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="group flex flex-col items-center gap-4">
          <div
            className="relative flex size-48 cursor-pointer items-center justify-center rounded-xl border border-dashed border-border bg-muted/40"
            aria-label="Hover animation demo"
          >
            <div className="absolute size-28 rounded-full border-2 border-primary/20 transition-all duration-500 group-hover:scale-125 group-hover:border-primary/60 group-hover:animate-spin-slow" />

            <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-violet-600 group-hover:shadow-lg animate-float">
              <div className="size-5 rounded-full bg-primary-foreground/90 transition-transform duration-300 group-hover:scale-125" />
            </div>

            <span className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-orbit" />
            <span className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-orbit-reverse" />
          </div>

          <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            <span className="group-hover:hidden">Hover me</span>
            <span className="hidden group-hover:inline">Active!</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
