export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2> Companies details</h2>
      <main>{children}</main>
    </>
  );
}
