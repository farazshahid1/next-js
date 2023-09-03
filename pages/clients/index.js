import { useRouter } from "next/router";
import Link from "next/link";

function ClientsPage() {
  const router = useRouter();

  const clients = [
    { id: "max", name: "maximillion" },
    { id: "manu", name: "Manuel" },
  ];

  console.log("clientPageRender");

  return (
    <div>
      <h1>The Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <iLink href={`/clients/${client.id}`}>{client.name}</iLink> */}
            <Link href={{
                pathname: '/clients/[id]',
                query:{ id: client.id}
            }}>{client.name}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
