export default function TilesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flasherr-area">
            {children}
        </div>
    );
  }
