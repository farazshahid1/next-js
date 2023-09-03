import { useRouter } from "next/router"

function ClientProjectsPage () {
    const router = useRouter()

    console.log("clientProjectPageRender")


function loadProjectHandler () {
    router.push('/clients/max/projecta')
}

    return <div>
        <h1>The Projects of the given Client</h1>
        <btton onClick={loadProjectHandler}>Load Project A</btton>
    </div>
}

export default ClientProjectsPage