"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavIcon } from "./NavIcon";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "./navData";

export function Navbar() {
  const isScrolled = useScrollPosition(10);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-[72px] items-center justify-between gap-4"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  {item.dropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-semibold rounded-lg cursor-pointer",
                        "transition-all duration-150",
                        "hover:text-[#3448FF] hover:bg-[#3448FF]/[0.04]",
                        activeDropdown === item.label
                          ? "text-[#3448FF] bg-[#3448FF]/[0.04]"
                          : "text-[#1a1a2e]"
                      )}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <NavIcon
                        name="chevron-down"
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href || "#"}
                      className="flex items-center px-3.5 py-2 text-[13.5px] font-semibold text-[#1a1a2e] rounded-lg transition-all duration-150 hover:text-[#3448FF] hover:bg-[#3448FF]/[0.04]"
                    >
                      {item.label}
                    </a>
                  )}

                  {item.dropdown && (
                    <NavDropdown
                      items={item.dropdown}
                      isOpen={activeDropdown === item.label}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button variant="secondary" size="sm">
                Sign Up
              </Button>

              {/* Primary CTA — sonar rotating border effect */}
              <div className="relative rounded-full overflow-hidden p-[1.5px] group">
                <div
                  className="sonar-border absolute inset-[-20%] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <Button variant="primary" size="md" className="relative">
                  Schedule a Demo
                </Button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "flex lg:hidden items-center justify-center h-10 w-10 rounded-lg transition-colors cursor-pointer",
                isMobileMenuOpen
                  ? "text-[#3448FF] bg-[#3448FF]/[0.06]"
                  : "text-[#1a1a2e] hover:bg-[#f4f6f8]"
              )}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <NavIcon
                name={isMobileMenuOpen ? "x" : "menu"}
                className="h-5 w-5"
              />
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navItems}
        onClose={closeMobileMenu}
      />

      {/* Background overlay when mobile menu is open */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </>
  );
}
