import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-7xl mx-auto shadow-2xl shadow-black/20 left-1/2 -translate-x-1/2">
    <div className="text-2xl font-headline font-bold text-white italic tracking-tighter">
      QuickStream
    </div>
    <div className="hidden md:flex gap-8 items-center">
      <a
        className="text-[#E7BDB8] hover:text-white transition-colors hover:scale-105 transition-transform duration-300"
        href="#features"
      >
        Features
      </a>
      <a
        className="text-[#E7BDB8] hover:text-white transition-colors hover:scale-105 transition-transform duration-300"
        href="#pricing"
      >
        Pricing
      </a>
      <a
        className="text-[#E7BDB8] hover:text-white transition-colors hover:scale-105 transition-transform duration-300"
        href="#compatibility"
      >
        Compatibility
      </a>
      <a
        className="text-[#E7BDB8] hover:text-white transition-colors hover:scale-105 transition-transform duration-300"
        href="#faq"
      >
        FAQ
      </a>
    </div>
    <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary-container/20">
      Get Access
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover opacity-80"
        alt="Luxury modern living room at night with a large glowing 4K OLED TV background"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAauBSkq1u-GXibOlsuY6Z8JIl7ede0tPRPIzBk7n5KjhjwMEHc4wQR0bIE3nty2f9oVfHwBv10S0jEPkjmnNxSP2UwaORglhcptW2WserSUoYu3QeAsHQqG4mq9phlYoQinweSaDgkMwtTPsQRu6UHU4iAJ0JmRK2wkx6ziZ6Kg5p8sv0ukmWOOl24WOh9ApLu6OkO9BI53qe_SmQUvrJTP-6S1BnKk7T-8Z0poIlpCp-UMDf-ojsPz6WPZWdbufkjyiM09597lhs"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 hero-gradient"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center">
      <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
        Buy IPTV Subscription —{" "}
        <span className="text-primary-container text-glow">
          Instant Activation
        </span>
        , 37,000+ Channels
      </h1>
      <p className="text-on-surface-variant text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Ready to buy your IPTV subscription? QuickStream delivers your login
        within minutes. 37,000+ live channels, 198,000+ movies and series, 4K
        quality, and a built-in VPN — all activated instantly after secure
        checkout.
      </p>
      <button className="bg-gradient-to-r from-primary-container to-tertiary-container text-white px-10 py-5 rounded-xl text-xl font-bold mb-16 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary-container/30">
        Buy Now — Streaming in Under 5 Minutes
      </button>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto border-t border-outline-variant/15 pt-12">
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="material-symbols-outlined text-primary-container">
            check_circle
          </span>
          <span>Instant Login Delivery — No Waiting</span>
        </div>
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="material-symbols-outlined text-primary-container">
            check_circle
          </span>
          <span>Secure Encrypted Checkout via PayPal & Card</span>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-surface-container-low py-24" id="features">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center">
        Four Reasons to Buy Your IPTV Subscription from QuickStream
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/5 hover:bg-surface-container-high transition-colors group">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-4">
            Buy Now, Watch in Five Minutes
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Complete your purchase and receive your IPTV login credentials via
            email within minutes. No waiting for engineer visits, no hardware to
            unbox. Buy your IPTV subscription and start streaming almost
            immediately.
          </p>
        </div>
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/5 hover:bg-surface-container-high transition-colors group">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield
            </span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-4">
            Secure Encrypted Payment Options
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Pay with confidence via PayPal, Visa, Mastercard, or cryptocurrency.
            Every transaction is SSL-encrypted and processed through trusted
            payment gateways — your financial details are never stored or
            shared.
          </p>
        </div>
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/5 hover:bg-surface-container-high transition-colors group">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              list
            </span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-4">
            37,000+ Channels, Zero Compromise
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            When you buy an IPTV subscription from QuickStream, you get the
            complete package — 37,000+ live channels, 198,000+ on-demand titles,
            4K quality, anti-freeze servers, and every PPV event included.
          </p>
        </div>
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/5 hover:bg-surface-container-high transition-colors group">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              cashback
            </span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-4">
            Money-Back Guarantee on Every Plan
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Not satisfied? Every plan comes with a money-back guarantee — 7 to
            30 days depending on your subscription length. Buy your IPTV
            subscription with zero risk and full confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl"></div>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Buy IPTV Subscription from QuickStream — Here Is Exactly What You Get
        </h2>
        <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
          You have done the research. You have compared the options. Now you are
          ready to buy an IPTV subscription and start watching. QuickStream IPTV
          is designed for buyers who want a fast, transparent, and reliable
          purchase experience — no marketing fluff, no bait-and-switch pricing,
          just a clean transaction followed by instant access to world-class
          entertainment.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            "Instant credential delivery — watch within five minutes of purchase",
            "37,000+ live channels from 100+ countries",
            "198,000+ on-demand movies and TV series",
            "4K Ultra HD streaming with anti-freeze technology",
            "Complete Premier League, Champions League, and PPV coverage",
            "Seven-day catch-up TV with integrated EPG",
            "Built-in VPN included free on every plan",
            "Works on Fire Stick, Smart TV, Android, iOS, MAG, Xbox, Windows",
            "One-time payment — zero recurring billing or auto-renewal",
            "SSL-encrypted checkout via PayPal, card, or cryptocurrency",
            "24/7 WhatsApp and email support for post-purchase setup",
            "Money-back guarantee from 7 to 30 days on all plans",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-primary-container/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
        <img
          className="relative z-10 rounded-xl border border-outline-variant/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
          alt="Close-up of a premium TV screen showing a channel grid with a modern remote control"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBJNmDno01g10sgADJZEFABU6u5r_pO2iJYRyoO3FCbqOiYWpKvhUr-Yud3eqNHuCLdUiLXB1g46sqVpQJB2Cy_fc2R4s8SoAPxgi9Tjk_DK5MRrXiO-H2nz9RY7Bo2oVkHnOc5mkt48MP0mPyHNVWTy6M2u3mXgGCFrlLMxGHOJ9Oq8Ve-NsxiKuddQ7Fd61TZljlBU9kEZbtIJ6IhCjAtlZpAgqrAwa9Bc0GifZaBmjT8R4r1bBTFU4XBnis3cj7A4CT5iQz-_I"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24 bg-surface-container-low" id="pricing">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <span className="text-primary-container text-xs tracking-widest uppercase font-bold mb-4 block">
          Instant Login Delivery After Secure Checkout
        </span>
        <h2 className="font-headline text-4xl font-bold mb-4">
          Buy IPTV Subscription — Choose Your Plan
        </h2>
        <div className="w-24 h-1 bg-primary-container mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 3 Months */}
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:-translate-y-2 transition-all flex flex-col">
          <h3 className="text-on-surface-variant font-label text-sm uppercase mb-4 tracking-widest">
            3 Months Plan
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-headline font-bold">£25.99</span>
            <span className="text-on-surface-variant line-through text-sm">
              £39.99
            </span>
          </div>
          <p className="text-xs text-primary-container font-bold mb-6">
            7-Day Money-Back Guarantee
          </p>
          <ul className="space-y-4 mb-10 flex-grow text-sm">
            {[
              "37,000+ Live Channels",
              "198,000+ Movies & Series",
              "4K / Ultra HD / FHD Quality",
              "Anti-Freeze Technology",
              "Electronic Program Guide (EPG)",
              "Built-in VPN Included",
              "Instant Login Delivery",
              "24/7 Priority Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-lg">
                  check
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-lg bg-primary-container text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
            Buy 3 Months — Instant Login
          </button>
        </div>
        {/* 6 Months */}
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:-translate-y-2 transition-all flex flex-col">
          <h3 className="text-on-surface-variant font-label text-sm uppercase mb-4 tracking-widest">
            6 Months Plan
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-headline font-bold">£35.99</span>
            <span className="text-on-surface-variant line-through text-sm">
              £54.99
            </span>
          </div>
          <p className="text-xs text-primary-container font-bold mb-6">
            14-Day Money-Back Guarantee
          </p>
          <ul className="space-y-4 mb-10 flex-grow text-sm">
            {[
              "37,000+ Live Channels",
              "198,000+ Movies & Series",
              "4K / Ultra HD / FHD Quality",
              "Anti-Freeze Technology",
              "Electronic Program Guide (EPG)",
              "Built-in VPN Included",
              "Instant Login Delivery",
              "24/7 Priority Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-lg">
                  check
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-lg bg-primary-container text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
            Buy 6 Months — Instant Login
          </button>
        </div>
        {/* 12 Months - POPULAR */}
        <div className="bg-surface-container p-8 rounded-xl border-2 border-primary-container shadow-2xl shadow-primary-container/20 -translate-y-4 relative flex flex-col">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
            Best Seller
          </div>
          <h3 className="text-on-surface-variant font-label text-sm uppercase mb-4 tracking-widest">
            12 Months Plan
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-headline font-bold">£49.99</span>
            <span className="text-on-surface-variant line-through text-sm">
              £89.99
            </span>
          </div>
          <p className="text-xs text-primary-container font-bold mb-6">
            30-Day Money-Back Guarantee
          </p>
          <ul className="space-y-4 mb-10 flex-grow text-sm">
            {[
              "37,000+ Live Channels",
              "198,000+ Movies & Series",
              "4K / Ultra HD / FHD Quality",
              "Anti-Freeze Technology",
              "Electronic Program Guide (EPG)",
              "Built-in VPN Included",
              "Instant Login Delivery",
              "24/7 Priority Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-bold">
                <span className="material-symbols-outlined text-primary-container text-lg">
                  check
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-lg bg-gradient-to-r from-primary-container to-tertiary-container text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-primary-container/30">
            Buy 12 Months — Instant Login
          </button>
        </div>
        {/* 24 Months */}
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:-translate-y-2 transition-all flex flex-col">
          <h3 className="text-on-surface-variant font-label text-sm uppercase mb-4 tracking-widest">
            24 Months Plan
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-headline font-bold">£79.99</span>
            <span className="text-on-surface-variant line-through text-sm">
              £149.99
            </span>
          </div>
          <p className="text-xs text-primary-container font-bold mb-6">
            30-Day Money-Back Guarantee
          </p>
          <ul className="space-y-4 mb-10 flex-grow text-sm">
            {[
              "37,000+ Live Channels",
              "198,000+ Movies & Series",
              "4K / Ultra HD / FHD Quality",
              "Anti-Freeze Technology",
              "Electronic Program Guide (EPG)",
              "Built-in VPN Included",
              "Instant Login Delivery",
              "24/7 Priority Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-lg">
                  check
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-lg bg-primary-container text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
            Buy 24 Months — Instant Login
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Compatibility = () => (
  <section
    className="py-12 bg-surface-container-lowest overflow-hidden"
    id="compatibility"
  >
    <div className="max-w-7xl mx-auto px-8">
      <h4 className="text-center text-on-surface-variant font-label text-xs tracking-[0.3em] uppercase mb-12">
        Works on all your favorite devices
      </h4>
      <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">tv</span>{" "}
          <span>Android TV</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">
            fire_extinguisher
          </span>{" "}
          <span>Fire Stick</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">smartphone</span>{" "}
          <span>iOS / Android</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">computer</span>{" "}
          <span>PC / MacOS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">
            videogame_asset
          </span>{" "}
          <span>Xbox / PS5</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">
            settings_input_hdmi
          </span>{" "}
          <span>Smart TV</span>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 bg-surface-container-lowest">
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="font-headline text-4xl font-bold mb-12 text-center">
        Why We Outperform the Rest
      </h2>
      <div className="overflow-x-auto rounded-xl border border-outline-variant/15">
        <table className="w-full text-left">
          <thead className="bg-surface-container-high border-b border-outline-variant/20">
            <tr>
              <th className="p-6 text-on-surface-variant uppercase text-xs tracking-widest font-bold">
                Feature
              </th>
              <th className="p-6 text-primary-container uppercase text-xs tracking-widest font-bold">
                QuickStream IPTV
              </th>
              <th className="p-6 text-on-surface-variant uppercase text-xs tracking-widest font-bold">
                UK Cable
              </th>
              <th className="p-6 text-on-surface-variant uppercase text-xs tracking-widest font-bold">
                Bundles
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr>
              <td className="p-6 font-bold">Live Channels</td>
              <td className="p-6 text-primary-container font-bold">37,000+</td>
              <td className="p-6 text-on-surface-variant">300-500</td>
              <td className="p-6 text-on-surface-variant">200-400</td>
            </tr>
            <tr>
              <td className="p-6 font-bold">Contract Length</td>
              <td className="p-6 text-primary-container font-bold">
                None / Cancel Anytime
              </td>
              <td className="p-6 text-on-surface-variant">18-24 Months</td>
              <td className="p-6 text-on-surface-variant">12 Months</td>
            </tr>
            <tr>
              <td className="p-6 font-bold">Support Type</td>
              <td className="p-6 text-primary-container font-bold">
                24/7 WhatsApp
              </td>
              <td className="p-6 text-on-surface-variant">Call Centers</td>
              <td className="p-6 text-on-surface-variant">Live Chat (Bot)</td>
            </tr>
            <tr>
              <td className="p-6 font-bold">4K/UHD Content</td>
              <td className="p-6 text-primary-container font-bold">
                Included Free
              </td>
              <td className="p-6 text-on-surface-variant">Extra £10+/mo</td>
              <td className="p-6 text-on-surface-variant">Extra Charge</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="font-headline text-4xl font-bold mb-16 text-center">
        User Experiences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-[#E7BDB8]/80 italic mb-6 text-sm leading-relaxed">
            "Activated within 2 minutes of payment. The channel selection is
            mind-blowing, especially the sports packages."
          </p>
          <div className="font-bold text-white">Daniel K.</div>
        </div>
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-[#E7BDB8]/80 italic mb-6 text-sm leading-relaxed">
            "Best value for money. Haven't experienced a single freeze during
            the big matches. Highly recommended."
          </p>
          <div className="font-bold text-white">Sophie A.</div>
        </div>
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-[#E7BDB8]/80 italic mb-6 text-sm leading-relaxed">
            "Customer support via WhatsApp is incredibly fast. They helped me
            set up my Fire Stick in under 5 minutes."
          </p>
          <div className="font-bold text-white">Raj P.</div>
        </div>
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
          <div className="flex text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-[#E7BDB8]/80 italic mb-6 text-sm leading-relaxed">
            "I was skeptical about IPTV but QuickStream is legal and
            ultra-reliable. The 4K movies library is vast."
          </p>
          <div className="font-bold text-white">Claire W.</div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-surface-container-lowest" id="faq">
    <div className="max-w-3xl mx-auto px-8">
      <h2 className="font-headline text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {[
          {
            q: "What is IPTV and how does it work?",
            a: "IPTV (Internet Protocol Television) uses internet technology to transmit television programming to your TV. Instead of using cable or satellite signals, QuickStream uses your broadband connection to deliver high-quality streams instantly.",
          },
          {
            q: "How long does activation take?",
            a: "Typically, you will receive your login details via email within 2 to 5 minutes of your payment being confirmed. Our automated system works 24/7.",
          },
          {
            q: "Can I use it on multiple devices?",
            a: "Yes! Our service is compatible with all devices. However, standard plans allow for one active stream at a time. Multi-device packages are available during checkout if you need simultaneous viewing.",
          },
          {
            q: "Do I need a VPN to use QuickStream?",
            a: "No, a VPN is not required as our service features built-in anti-freeze and proxy technology. However, you are free to use your own VPN if you prefer an extra layer of privacy.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10"
          >
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-surface-container-high transition-colors">
              <span className="font-bold">{item.q}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 pt-8 text-on-surface-variant text-sm border-t border-outline-variant/10">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-lowest py-16 border-t border-outline-variant/15">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-sm">
        <div className="text-2xl font-headline font-bold text-white italic tracking-tighter mb-4">
          QuickStream
        </div>
        <p className="text-on-surface-variant text-xs leading-relaxed mb-6">
          Disclaimer: QuickStream does not host or own any of the streams or
          channels provided. We provide a platform to access legally available
          content via the internet.
        </p>
        <div className="text-xs text-[#E7BDB8]/60">
          © 2024 QuickStream. All rights reserved.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h5 className="text-primary-container font-label text-xs tracking-widest uppercase mb-6">
            Legal
          </h5>
          <ul className="space-y-3 text-xs">
            <li>
              <a
                className="text-[#E7BDB8]/60 hover:text-primary-container transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[#E7BDB8]/60 hover:text-primary-container transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-[#E7BDB8]/60 hover:text-primary-container transition-colors"
                href="#"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary-container font-label text-xs tracking-widest uppercase mb-6">
            Contact
          </h5>
          <ul className="space-y-3 text-xs">
            <li className="text-[#E7BDB8]/60">
              orders@buy-iptv-subscription.tv
            </li>
            <li>
              <a
                className="text-white font-bold hover:text-primary-container transition-colors"
                href="#"
              >
                24/7 WhatsApp Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <Compatibility />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
