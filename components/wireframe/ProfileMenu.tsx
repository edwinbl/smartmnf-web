"use client";

import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, LayoutDashboard, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockAuth, MockUser } from "@/lib/mockAuth";
import { toast } from "@/hooks/use-toast";

interface ProfileMenuProps {
  user: MockUser;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

export const ProfileMenu = ({ user, variant = "desktop", onNavigate }: ProfileMenuProps) => {
  const navigate = useRouter();

  const handleSignOut = () => {
    mockAuth.signOut();
    onNavigate?.();
    toast({ title: "Signed out", description: "You have been logged out." });
    router.push("/", { replace: false });
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 p-3 rounded-md bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))]">
          <div
            className="grid h-11 w-11 place-items-center rounded-full text-white font-semibold text-sm shrink-0"
            style={{ background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--orange-500)))" }}
          >
            {user.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy-800 truncate">{user.name}</p>
            <p className="text-xs text-[hsl(var(--neutral-500))] truncate">{user.email}</p>
          </div>
        </div>
        <button onClick={handleSignOut} className="btn-outline h-11 w-full">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open profile menu"
          className="group flex items-center gap-2 rounded-full pl-1 pr-3 py-1 border border-[hsl(var(--neutral-150))] hover:border-[hsl(var(--navy-700))] transition-colors"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-full text-white font-semibold text-[12px]"
            style={{ background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--orange-500)))" }}
          >
            {user.initials}
          </span>
          <span className="hidden lg:inline text-[13px] font-semibold font-display text-navy-800 max-w-[120px] truncate">
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-navy-800 truncate">{user.name}</span>
            <span className="text-xs font-normal text-[hsl(var(--neutral-500))] truncate">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <UserIcon className="h-4 w-4 mr-2" />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="h-4 w-4 mr-2" />
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-[hsl(var(--red-600))] focus:text-[hsl(var(--red-600))]">
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
