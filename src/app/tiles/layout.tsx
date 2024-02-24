export default function TilesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="md">
            {children}
        </div>
    );
  }
