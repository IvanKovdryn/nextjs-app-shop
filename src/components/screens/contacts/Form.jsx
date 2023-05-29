import { setData } from "@/store/slices/dataSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const dataInStore = useSelector((state) => state.data.data);
  const [showMassage, setShowMassage] = useState(false);
  const setShow = () => {
    setTimeout(() => {
      setShowMassage(false);
    }, 4000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataFromForm = {
      name: e.target.name.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
      area: e.target.area.value,
    };

    try {
      const { data } = await axios({
        url: "/api/form",
        method: "POST",
        data: dataFromForm,
      });
      setShowMassage(true);
      dispatch(setData(data));
      console.log("result: ", ...data);
    } catch (error) {
      console.log("error: ", error);
    }

    document.querySelector("form").reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex relative flex-col gap-[15px]">
      <p className="text-xl font-semibold">Contact us</p>
      <input
        className="px-[20px] py-[7px] w-[50%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
        type="text"
        id="name"
        name="name"
        maxLength="20"
        minLength="3"
        placeholder="Name"
        required
      />
      <input
        className="px-[20px] py-[7px] w-[50%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
        type="email"
        name="email"
        id="email"
        minLength="3"
        maxLength="50"
        placeholder="E-mail"
        required
      />
      <input
        className="px-[20px] py-[7px] w-[50%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
        type="tel"
        placeholder="Phone"
        maxLength="20"
        minLength="3"
        id="tel"
        name="tel"
        required
      />
      <textarea
        className="px-[20px] py-[7px] w-[50%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
        name="area"
        id="area"
        cols="30"
        rows="10"
      ></textarea>
      <button
        onClick={setShow}
        type="submit"
        className="mt-[10px] px-[20px] py-[7px] w-[25%] rounded-md bg-red-200 hover:bg-red-300 transition-all flex items-center justify-center"
      >
        Send
      </button>
      {showMassage && (
        <div className="bg-red-100 mt-[10px] absolute bottom-[-75px] left-0 rounded-md flex items-center w-[50%] justify-center px-[25px] py-[15px]">
          Massage success sended
        </div>
      )}
    </form>
  );
}
