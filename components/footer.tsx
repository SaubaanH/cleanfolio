export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} Saubaan Hasan
        </p>
      </div>
    </footer>
  )
}
