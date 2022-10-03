import { FormRent } from "../../components/form/formRent/formRent";
import Header from "../../components/header/header.component";
import "./createRent.page.css";

const CreateRentPage: React.FC = () => {
  return (
    <>
      <Header className="create_rent" />
      <div className="rent_page">
      <FormRent />
      </div>
    </>
  );
};

export default CreateRentPage;
