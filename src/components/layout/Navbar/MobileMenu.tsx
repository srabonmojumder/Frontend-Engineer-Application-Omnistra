"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { NavIcon } from "./NavIcon";
import { Button } from "@/components/ui/Button";
import type { NavItem, NavDropdownItem } from "./navData";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
}

function MobileDropdownItem({ item }: { item: NavDropdownItem }) {
  return (
    <a
      href={item.href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-[#f4f6f8]"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#6b7280] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <NavIcon name={item.icon} className="h-4 w-4" />
      </span>
      <span className="flex items-center gap-2">
        <span className="text-sm text-[#1a1a2e]">{item.label}</span>
        {item.badge && (
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase text-white",
              item.badgeColor || "bg-[#3448FF]"
            )}
          >
            {item.badge}
          </span>
        )}
      </span>
    </a>
  );
}

function MobileNavSection({ item }: { item: NavItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <a
        href={item.href || "#"}
        className="flex items-center justify-between px-3 py-3 text-base font-medium text-[#1a1a2e] transition-colors hover:text-[#3448FF]"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-[#f0f0f0] last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-[#1a1a2e] transition-colors hover:text-[#3448FF]"
      >
        {item.label}
        <NavIcon
          name="chevron-down"
          className={cn(
            "h-4 w-4 text-[#6b7280] transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[500px] opacity-100 pb-2" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-0.5 pl-1">
          {item.dropdown.map((dropdownItem) => (
            <MobileDropdownItem
              key={dropdownItem.label}
              item={dropdownItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileMenu({ isOpen, items }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-white transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] lg:hidden",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="flex flex-col px-4 pb-8 pt-4">
        <nav className="flex flex-col">
          {items.map((item) => (
            <MobileNavSection key={item.label} item={item} />
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3 px-3">
          <Button variant="ghost" className="w-full justify-center">
            Sign In
          </Button>
          <Button variant="primary" className="w-full justify-center">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
