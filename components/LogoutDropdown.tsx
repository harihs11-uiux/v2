import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';

interface LogoutDropdownProps {
  onLogout: () => void;
  children: React.ReactNode;
}

export default function LogoutDropdown({ onLogout, children }: LogoutDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer hover:opacity-80 transition-opacity">
          {children}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-[#1f2432] border-[#505767] text-white min-w-[160px] mr-2"
        sideOffset={5}
      >
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer flex items-center gap-2"
          disabled
        >
          <User className="h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer flex items-center gap-2"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}