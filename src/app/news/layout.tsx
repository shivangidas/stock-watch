export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <h2>News Headlines</h2>
            {children}
        </section>
    )
}