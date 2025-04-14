export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Search Companies</h2>
      <main>{children}</main>
    </>
  );
}
