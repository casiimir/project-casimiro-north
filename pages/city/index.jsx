import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export default function City() {
    const router = useRouter();

    useLayoutEffect(() => {
        router.push(`/`)
    }, [])

    return (
        <div>
            <h1 style={{fontSize: '4rem'}}>Prova</h1>
        </div>
    )
}