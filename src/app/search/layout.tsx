export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div> The search Page</div>
      <main>{children}</main>
    </>
  );
}
