"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import { NavIcon } from "./NavIcon";
import type { NavDropdownItem } from "./navData";

interface NavDropdownProps {
  items: NavDropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function NavDropdown({ items, isOpen, onClose }: NavDropdownProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const links = menu.querySelectorAll<HTMLAnchorElement>(
        "a[role='menuitem']"
      );
      const currentIndex = Array.from(links).findIndex(
        (link) => link === document.activeElement
      );

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = currentIndex < links.length - 1 ? currentIndex + 1 : 0;
          links[next]?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev = currentIndex > 0 ? currentIndex - 1 : links.length - 1;
          links[prev]?.focus();
          break;
        }
        case "Escape":
          onClose();
          break;
      }
    };

    menu.addEventListener("keydown", handleKeyDown);
    return () => menu.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      role="menu"
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50",
        "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top",
        isOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-2 scale-[0.96] pointer-events-none"
      )}
    >
      <div className="min-w-[320px] max-w-[380px] rounded-2xl border border-[#e6ebf0] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col gap-0.5">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-150 hover:bg-[#f4f6f8]"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4f6f8] text-[#6b7280] transition-all duration-200 group-hover:bg-white group-hover:text-[#3448FF] group-hover:shadow-[0_2px_8px_rgba(52,72,255,0.12)]">
                <NavIcon name={item.icon} className="h-[18px] w-[18px]" />
              </span>

              <div className="flex flex-col min-w-0">
                <span className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-[#1a1a2e] transition-colors duration-150 group-hover:text-[#3448FF]">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white",
                        item.badgeColor || "bg-[#3448FF]"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
                {item.description && (
                  <span className="text-[11.5px] text-[#6b7280] mt-0.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
