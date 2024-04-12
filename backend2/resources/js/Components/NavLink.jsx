import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 dark:border-indigo-600 text-purple-900 dark:text-purple-100 focus:border-indigo-700 '
                    : 'border-transparent text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-300 dark:hover:border-purple-700 focus:text-purple-700 dark:focus:text-purple-300 focus:border-purple-300 dark:focus:border-purple-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
