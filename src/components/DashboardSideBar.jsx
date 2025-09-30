import { useState } from 'react';
import { Home, FolderKanban, CheckSquare, MessageSquare, FileText, Calendar, Users, UserPlus, Settings, CreditCard, HelpCircle, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DashboardSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    // Main Navigation
    { icon: Home, label: 'Dashboard' },
    { icon: FolderKanban, label: 'Projects' },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: FileText, label: 'Files' },
    { icon: Calendar, label: 'Calendar' },

    // Divider
    { divider: true },

    // Team & Invites
    { icon: Users, label: 'Team' },
    { icon: UserPlus, label: 'Invites' },

    // Divider
    { divider: true },

    // Settings & Support
    { icon: Settings, label: 'Settings' },
    { icon: CreditCard, label: 'Billing' },
    { icon: HelpCircle, label: 'Help' },
    { icon: LogOut, label: 'Logout' },
  ];

  const shouldExpand = isOpen || isHovered;

  return (
    <div
      className={`${
        shouldExpand ? 'w-64' : 'w-16 sm:w-20'
      } shadow-lg dark:shadow-blue-500/50 transition-all duration-300 ease-in-out relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-4 top-8 bg-primary hover:bg-primaryHover text-white rounded-full p-1 shadow-lg transition-colors"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Menu Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full flex flex-col justify-between p-1 sm:p-4"
      >
        <nav className={`space-y-2 overflow-x-hidden ${isHovered || isOpen ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
          {menuItems.map((item, index) => {
            if (item.divider) {
              return <hr key={index} className="my-3 border-gray-300 dark:border-gray-700" />;
            }
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 transition-colors group"
              >
                <Icon size={24} className="flex-shrink-0 group-hover:text-blue-500" />
                <span className={`${!shouldExpand && 'hidden'} whitespace-nowrap`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
