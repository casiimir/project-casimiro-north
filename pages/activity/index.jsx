// pagina che ti reindirizza
import { useRouter } from "next/router"
import { useLayoutEffect } from "react";

export default function ActivityRe() {


    const router = useRouter();

    useLayoutEffect(() => {
        router.back();
    }, [router]) 

    return (
        <div>
        </div>
    )
}