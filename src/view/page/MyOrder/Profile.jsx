import axios from "axios";
import './Profile.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [data, setData] = useState([]);
    const navigat = useNavigate();

    useEffect(() => {

        let formdata = new FormData();
        formdata.append("user_id", 26);

        axios.post("https://studiogo.tech/student/shoppingapi/myorders.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status == 200) {
                let json = response.data;
                // console.log(json);
                setData(json);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    function hanleMyOrderDetails(id) {
        navigat('/myOrderDetials/'+id);
    }

    return (<>


        <div className="myprofile-container">
            <div className="container">
                <div className="profile-details">
                    <table className="profile-table">
                        <thead className="profile-thead">
                            <tr className="profile-head-row">
                                <th className="profile-th">OrderId</th>
                                <th className="profile-th">TotalAmount</th>
                                <th className="profile-th">AddressLine1</th>
                                <th className="profile-th">AddressLine2</th>
                                <th className="profile-th">Pincode</th>
                                <th className="profile-th">OrderDateTime</th>
                                <th className="profile-th">Status</th>
                                <th className="profile-th">Action</th>
                            </tr>
                        </thead>

                        <tbody className="profile-tbody">
                            {data.map((obj) => (
                                <tr className="profile-row">
                                    <td className="profile-td">{obj.order_id}</td>
                                    <td className="profile-td">{obj.total_amount}</td>
                                    <td className="profile-td">{obj.address_line_1}</td>
                                    <td className="profile-td">{obj.address_line_2}</td>
                                    <td className="profile-td">{obj.pincode}</td>
                                    <td className="profile-td">{obj.order_date_time}</td>
                                    <td className="profile-td">{obj.status}</td>
                                    <td className="profile-td">
                                        <button className="profile-view-btn" onClick={(e)=>hanleMyOrderDetails(obj.order_id)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </>)
}
export default Profile;