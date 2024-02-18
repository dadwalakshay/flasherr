import { Suspense } from "react";

export default function TilesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flasherr-area">
          <Suspense>
            {children}
          </Suspense>
        </div>
    );
  }
