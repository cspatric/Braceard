import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserPreference from "./UserPreferences/Index";

export default function Dashboard(user) {

    return (
        <AuthenticatedLayout
        user={user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg flex flex-col gap-6 max-h-[500px] overflow-auto">
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
