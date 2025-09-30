import { Autocomplete, TextField, IconButton, Avatar, Badge } from "@mui/material";
import { Search, Notifications, KeyboardArrowDown } from "@mui/icons-material";

export default function DashboardHeader() {
    return (
        <header 
            className="flex items-center justify-between px-6 py-4 shadow-sm dark:shadow-blue-500/50 sticky top-0 z-50 transition-all duration-300"
        >
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="flex items-center">
                    <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ 
                            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
                        }}
                    >
                        <span style={{ color: 'var(--color-testWhite)' }} className="font-bold text-lg">C</span>
                    </div>
                    <div className="ml-3">
                        <div 
                            className="text-xl font-bold bg-clip-text text-transparent"
                            style={{ 
                                backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
                            }}
                        >
                            Collabify
                        </div>
                        <div 
                            className="text-xs -mt-1 text-textSecondaryLight dark:text-textSecondaryDark"
                        >
                            Workspace
                        </div>
                    </div>
                </div>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={[]}
                        className="w-full"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Search tasks, projects, or team members..."
                                size="small"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '16px',
                                        backgroundColor: 'var(--color-searchBarBgLight)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                        paddingLeft: '16px',
                                        color: 'var(--color-textPrimaryLight)',
                                        '&:hover': {
                                            backgroundColor: 'var(--color-testWhite)',
                                            borderColor: 'rgba(37, 99, 235, 0.3)',
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: 'var(--color-testWhite)',
                                            borderColor: 'var(--color-primary)',
                                            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)',
                                        },
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                        '& input::placeholder': {
                                            color: 'var(--color-textSecondaryLight)',
                                            opacity: 1,
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        ...params.InputProps,
                                        startAdornment: (
                                            <Search 
                                                fontSize="small" 
                                                sx={{ color: 'var(--color-textSecondaryLight)', mr: 2 }}
                                            />
                                        ),
                                        type: 'search',
                                    },
                                }}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Mobile search, Notifications and Profile */}
            <div className="flex items-center space-x-3">
                {/* Mobile Search Button */}
                <span className="md:hidden">
                    <IconButton 
                    
                    sx={{ 
                        color: 'var(--color-textSecondaryLight)',
                        '&:hover': { 
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                            color: 'var(--color-primary)'
                        },
                    }}
                >
                    <Search />
                </IconButton>
                </span>

                {/* Notifications */}
                <IconButton
                    
                >
                    <Badge 
                    className="mr-2"
                        badgeContent={3} 
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: 'var(--color-error)',
                                color: 'var(--color-testWhite)',
                                fontSize: '0.75rem',
                                minWidth: '18px',
                                height: '18px',
                            }
                        }}
                    >
                        <Notifications className="text-textPrimaryLight dark:text-textPrimaryDark hover:text-primary" />
                    </Badge>
                </IconButton>

                {/* Profile Section */}
                <div 
                    className="flex items-center space-x-3 pl-3 border-l"
                    style={{ borderLeftColor: '#E5E7EB' }}
                >
                    <button className="flex items-center space-x-3 p-2 rounded-xl hover:cursor-pointer">
                        <div className="relative">
                            <Avatar 
                                src="https://ui-avatars.com/api/?name=John+Doe&background=2563EB&color=fff&size=40"
                                sx={{ 
                                    width: 40, 
                                    height: 40,
                                    border: '2px solid rgba(37, 99, 235, 0.2)',
                                    transition: 'all 0.3s ease',
                                }}
                                className="group-hover:border-opacity-60"
                                style={{ 
                                    '&:hover': {
                                        borderColor: 'var(--color-primary)'
                                    }
                                }}
                            />
                            <div 
                                className="absolute -bottom-1 -right-1 w-4 h-4 border-2 rounded-full"
                                style={{ 
                                    backgroundColor: 'var(--color-success)',
                                    borderColor: 'var(--color-testWhite)'
                                }}
                            ></div>
                        </div>
                        
                        <div className="hidden md:flex flex-col items-start">
                            <span 
                                className="text-sm font-semibold text-textPrimaryLight dark:text-textPrimaryDark"
                            >
                                John Doe
                            </span>
                            <span 
                                className="text-xs text-textSecondaryLight dark:text-textSecondaryDark"
                            >
                                Product Manager
                            </span>
                        </div>
                        
                        <KeyboardArrowDown 
                            className="hidden md:block transition-colors group-hover:opacity-80" 
                            fontSize="small"
                            sx={{ color: 'var(--color-textSecondaryLight)' }}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}