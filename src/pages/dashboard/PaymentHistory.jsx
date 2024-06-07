import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">My Payment History</h2>

            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div>
                                            <div className="text-blue-600">{payment.transactionId}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                           {
                                                  payment.status === 'Paid' ? <div className="font-semibold text-green-600">Paid</div> : payment.status === 'Pending' ? <div className="font-semibold text-yellow-500">Pending</div> : <div className="font-semibold text-red-600">Failed</div>
                                           }
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-semibold">{payment.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="">{payment.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-semibold text-orange-600">BDT {payment.amount}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="">{payment.date}</div>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;