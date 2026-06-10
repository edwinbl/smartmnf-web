import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = () => (
  <header className="border-b border-[hsl(var(--neutral-200))] bg-white">
    <div className="container-cii flex items-center justify-between h-16 md:h-20">
      <Skeleton className="h-8 w-32 md:w-40" />
      <div className="hidden md:flex items-center gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
      <Skeleton className="h-9 w-24 rounded-md" />
    </div>
  </header>
);

const FooterSkeleton = () => (
  <footer className="border-t border-[hsl(var(--neutral-200))] bg-[hsl(var(--neutral-50))] mt-12">
    <div className="container-cii py-10 grid gap-8 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      ))}
    </div>
  </footer>
);

const HeroSkeleton = () => (
  <section className="py-12 md:py-20 bg-[hsl(var(--neutral-50))]">
    <div className="container-cii space-y-5 max-w-3xl">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-10 md:h-14 w-full" />
      <Skeleton className="h-10 md:h-14 w-3/4" />
      <Skeleton className="h-5 w-full max-w-xl" />
      <Skeleton className="h-5 w-2/3 max-w-md" />
      <div className="flex gap-3 pt-2">
        <Skeleton className="h-11 w-36 rounded-md" />
        <Skeleton className="h-11 w-32 rounded-md" />
      </div>
    </div>
  </section>
);

const GridSkeleton = ({ count = 6 }: { count?: number }) => (
  <section className="py-12 md:py-16">
    <div className="container-cii">
      <div className="mb-8 space-y-3">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-8 w-72 max-w-full" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="cii-card p-5 space-y-4">
            <Skeleton className="h-40 w-full rounded-md" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DetailSkeleton = () => (
  <section className="py-12 md:py-16">
    <div className="container-cii grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-8">
        <Skeleton className="h-64 w-full rounded-lg" />
        <div className="space-y-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-6 w-56" />
          <div className="grid sm:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-md" />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="cii-card p-6 space-y-4 sticky top-24">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  </section>
);

const FormSkeleton = () => (
  <section className="py-12 md:py-20 grid place-items-center min-h-[60vh]">
    <div className="cii-card p-8 w-full max-w-md space-y-5">
      <Skeleton className="h-7 w-40" />
      <Skeleton className="h-4 w-60" />
      <Skeleton className="h-11 w-full rounded-md" />
      <Skeleton className="h-11 w-full rounded-md" />
      <Skeleton className="h-11 w-full rounded-md" />
      <Skeleton className="h-4 w-32" />
    </div>
  </section>
);

interface PageSkeletonProps {
  variant?: "list" | "detail" | "form" | "default";
}

export const PageSkeleton = ({ variant = "default" }: PageSkeletonProps) => (
  <div className="min-h-dvh bg-background text-foreground">
    <HeaderSkeleton />
    <main>
      {variant === "form" ? (
        <FormSkeleton />
      ) : variant === "detail" ? (
        <>
          <HeroSkeleton />
          <DetailSkeleton />
        </>
      ) : variant === "list" ? (
        <>
          <HeroSkeleton />
          <GridSkeleton />
        </>
      ) : (
        <>
          <HeroSkeleton />
          <GridSkeleton count={3} />
        </>
      )}
    </main>
    <FooterSkeleton />
  </div>
);

export default PageSkeleton;
