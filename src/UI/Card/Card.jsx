import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SelectedContext } from "../../context/SelectedContext";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Card({ data }) {
  const [iconType, setIconType] = useState(
    localStorage.getItem("IconType") || ""
  );
  const { selectedID, setSelectedID } = useContext(SelectedContext);
  const choosen = localStorage.getItem("choosen");

  const dispatch = useDispatch();

  function getSelected(item) {
    if (item.id) {
      setSelectedID(item.id);
    }

    if (item.id === selectedID) {
      dispatch({ type: "POST", payload: item });
      toast.success("Успешно добавлен !");
      if (choosen && !iconType) {
        setIconType("s");
      } else {
        setIconType("s");
      }
    }
  }

  return (
    <>
      <div className="col-xl-3 pt-4">
        <div className="card-wrapper m-auto h-[500px] bg-white shadow-sm p-4 rounded-lg">
          <div className="head">
            <i
              className={`bx bx${iconType}-heart text-[25px]`}
              onClick={() => {
                getSelected(data);
              }}
            ></i>
          </div>
          <Link to={`/products/${data?.id}`} className="text-dark">
            <div className="body">
              <img
                src={data?.image}
                className="mx-auto h-[300px] transition duration-300 ease-in-out hover:scale-90"
                alt="png"
              />
              <div className="flex justify-between h-[75px] m-auto mt-3">
                <h5 className="text-[15px] w-75">{data?.title}</h5>
                <p className="text-orange-400 text-[15px]">${data?.price}</p>
              </div>
              <div className="flex align-items-center gap-2 mt-2">
                <i className="bx bxs-star text-[25px] text-yellow-400"></i>
                <p className="text-[18px] text-[#838383]">
                  {data?.rating?.rate}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
