import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Cart from '@/Pages/Cart';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-purple-800 dark:text-purple-200 leading-tight">Library of Favorites</h2>}
        >
            <Head title="Library of Favorites" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-purple-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-purple-900 dark:text-purple-100">You're logged in!</div>
                        <Cart/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
