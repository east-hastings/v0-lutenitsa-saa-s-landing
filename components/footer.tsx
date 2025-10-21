export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                Л
              </div>
              <span className="font-bold">Lutenitsa</span>
            </div>
            <p className="text-sm opacity-75">Authentic Balkan flavors delivered to your door</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Producers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Lutenitsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
