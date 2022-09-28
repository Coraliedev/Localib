import Header from "../../components/header/header.component";
import { useQueryClient, useMutation, useQuery } from "react-query";
import axios from "axios";

const ClientsPage: React.FC = () => {
  const queryClient = useQueryClient();

  const getClients = async () => {
    const { data } = await axios.get("http://localhost:3001/client");
    console.log(data[0]._id);
    return data;
  };

  const addClient = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/client",
      data: {
        lastname: "test",
        firstname: "test",
        phone: "0000000000",
        birthdate: "2021-01-01",
      },
    });
    return response;
  };

  const deleteClient = async (id: number) => {
    await axios.delete(`http://localhost:3001/client/${id}`);
  };

  const { data, isLoading, error } = useQuery("clients", getClients);
  
  const { mutate: handleAddClient } = useMutation(addClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });
  const { mutate: handleDeleteClient } = useMutation(deleteClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });

  return (
    <div>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.map((client: any) => (
          <div id={client._id}>
            <p>{client._id}</p>
            <p>{client.lastname}</p>
            <button onClick={() => handleDeleteClient(client._id)}>
              Supprimer
            </button>
          </div>
        ))}
      <button onClick={() => handleAddClient()}>Add client</button>
      Clients Page
    </div>
  );
};

export default ClientsPage;
