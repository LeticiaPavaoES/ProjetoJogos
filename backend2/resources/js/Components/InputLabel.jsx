export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-purple-700 dark:text-purple-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
