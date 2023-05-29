import Layout from "@/components/layout/Layout";
import ScreensNav from "../nav/ScreensNav";
import Form from "./Form";

export const Contacts = () => {
  return (
    <Layout title="Contacts" description="Shop contacts, Womazing">
      <div className="pt-[100px]">
        <div className="text-4xl mb-[25px] font-semibold">Contacts</div>
        <ScreensNav page="Contacts" />
      </div>
      <div>
        <div className="w-full h-[250px] flex items-center justify-center bg-gray-300 rounded-lg">
          Map
        </div>
        <div className="my-[75px]">
          <div>
            <span>Phone: </span>
            <span> +7 (495) 823-54-12</span>
          </div>
          <div className="my-[10px]">
            <span>E-mail: </span>
            <span> info@sitename.com</span>
          </div>
          <div>
            <span>Address: </span>
            <span> c. Ccccccccccccc. l. Looooooooo</span>
          </div>
        </div>
        <Form />
      </div>
    </Layout>
  );
};
export default Contacts;
