import { signOut, useSession } from "next-auth/react"

const SectionUser = () => {
    const { data } = useSession()

    return (
        <section>
            <div>{data?.user?.email}</div>
            <button onClick={() => signOut()}>Cerrar sesión</button>
        </section>
    );
}

export default SectionUser;