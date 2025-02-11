import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { MdOutlineDelete } from "react-icons/md";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import AdminSideBar from "./Layout/AdminSideBar";
import AdminHeader from "../Layout/AdminHeader";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";

const AllLatestoffers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactId, setContactId] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/product/admin-all-latestdata`, { withCredentials: true })
      .then((res) => {
        setData(res.data.LatestDatas);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/product/delete-offerupdate/${id}`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        setData((prevData) => prevData.filter((LatestDatas) => LatestDatas._id !== id));
        setOpen(false);
      })
      .catch((error) => {
        toast.error("Failed to delete contact.");
      });
  };

  const columns = [
    {
      field: "email",
      headerName: "Email",
      minWidth: 180,
      flex: 0.5,
    },
    {
      field: "Action",
      flex: 0.2,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button onClick={() => { setContactId(params.id); setOpen(true); }}>
            <MdOutlineDelete size={20} />
          </Button>
        );
      },
    },
  ];

  const row = data.map((item) => ({
    id: item._id,
    email: item.email,
  }));

  return (
    <>
      <div>
        <AdminHeader />
        <div className="w-full flex">
          <div className="flex items-start justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <AdminSideBar active={8} />
            </div>
            <div className="w-full mx-8 pt-1 mt-10 bg-white overflow-hidden">
              <h2 className="p-3 font-bold text-xl">Latest Information Request</h2>
              {loading ? (
                <Loader />
              ) : (
                <DataGrid
                  rows={row}
                  columns={columns}
                  pageSize={10}
                  disableSelectionOnClick
                  autoHeight
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
          <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
            <div className="w-full flex justify-end cursor-pointer">
              <RxCross1 size={25} onClick={() => setOpen(false)} />
            </div>
            <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
              Are you sure you want to delete this contact?
            </h3>
            <div className="w-full flex items-center justify-center">
              <div
                className={`w-[120px] bg-red-400 h-[40px] text-sm my-3 flex items-center justify-center rounded-xl cursor-pointer text-white text-[18px] !h-[42px] mr-4`}
                onClick={() => setOpen(false)}
              >
                Cancel
              </div>
              <div
                className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                onClick={() => handleDelete(contactId)}
              >
                Confirm
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllLatestoffers