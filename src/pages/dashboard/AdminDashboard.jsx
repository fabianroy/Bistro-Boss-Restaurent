import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import usePublicAxios from "../../hooks/usePublicAxios";

const AdminDashboard = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();
    const publicAxios = usePublicAxios();
    const today = new Date().toLocaleDateString();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        publicAxios.get('/reviews').then(res => {
            console.log(res.data);
            setReviews(res.data);
        })
    });

    const averageRating = reviews.length > 0 ? (reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length).toFixed(2) : 0;

    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold">Hi, <span className="font-semibold text-orange-600">{user.displayName}</span>. Welcome to Admin Dashboard.</h2>
            </div>

            <div className="my-10">
                <div className="stats stats-vertical md:stats-horizontal shadow md:w-full">

                    <div className="stat">
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value">{stats?.orders}</div>
                        <div className="stat-desc">6/1/2024 - {today}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value">{stats?.customers}</div>
                        <div className="stat-desc">6/1/2024 - {today}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Revew</div>
                        <div className="stat-value">{stats?.reviews}</div>
                        <div className="stat-desc">Average - {averageRating}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Items</div>
                        <div className="stat-value">{stats?.menuItems}</div>
                        <div className="stat-desc">Active</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Revenue</div>
                        <div className="stat-value">{stats?.revenue}</div>
                        <div className="stat-desc">BDT</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;