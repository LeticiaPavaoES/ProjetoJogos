export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-purple-800 dark:bg-purple-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-purple-800 uppercase tracking-widest hover:bg-purple-700 dark:hover:bg-white focus:bg-purple-700 dark:focus:bg-white active:bg-purple-900 dark:active:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-purple-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
