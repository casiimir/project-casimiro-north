// pagina che ti reindirizza
import { useRouter } from "next/router"
import { useLayoutEffect } from "react";

export default function ActivityRe() {


    const router = useRouter();

    useLayoutEffect(() => {
        router.back();
    }, []) 

    return (
        <div></div>
    )
}