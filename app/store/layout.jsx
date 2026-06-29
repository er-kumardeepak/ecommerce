import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "NexCart. - Store Dashboard",
    description: "NexCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
