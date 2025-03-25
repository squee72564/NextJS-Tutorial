import React from "react";
import DashboardSkeleton from "@/app/ui/skeletons";

const Loading = ( { children }: { children: React.ReactNode} ) => {
    
    return (
        <DashboardSkeleton />
    );
};

export default Loading;