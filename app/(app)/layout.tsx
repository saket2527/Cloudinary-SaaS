export default function AppLayout({ children }: LayoutProps<"/">) {
  return <div className="min-h-screen">{children}</div>;
}
