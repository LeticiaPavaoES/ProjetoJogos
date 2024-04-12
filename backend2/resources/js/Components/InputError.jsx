export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-pink-600 dark:text-pink-400 ' + className}>
            {message}
        </p>
    ) : null;
}
