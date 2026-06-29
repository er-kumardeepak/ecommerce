import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "NexCart. - Admin",
    description: "NexCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
