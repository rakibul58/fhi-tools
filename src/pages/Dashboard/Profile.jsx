import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import _ from 'lodash';
import toast from "react-hot-toast";

const Profile = () => {
    const { user, resetPassword, logOut } = useContext(AuthContext);
    const [organizationId, setOrganizationId] = useState("");
    const [profile, setProfile] = useState({
        email: "",
        organizationName: "",
        phoneNumber: "",
        industry: ""
    });
    const [initialProfile, setInitialProfile] = useState({});

    const [profileDb, setProfileDb] = useState({});
    const [isDataChanged, setIsDataChanged] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    useEffect(() => {
        const getUserData = async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/organizations?email=${user?.email}`);
            if (response?.data?.success) {
                setProfileDb(response.data.result);
                const { _id, ...currentProfile } = profileDb;
                setOrganizationId(_id + "");
                setProfile(currentProfile);
                setInitialProfile(currentProfile)
            }
        }

        getUserData();
    }, [user, organizationId]);


    useEffect(() => {
        if (!_.isEqual(initialProfile, profile)) {
            setIsDataChanged(true);
        }
        else {
            setIsDataChanged(false);
        }
    }, [initialProfile, profile]);


    const handleUpdate = async () => {
        // console.log(`${import.meta.env.BACKEND_URI}/api/v1/organizations/${organizationId}`);
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URI}/api/v1/organizations/${organizationId}`, profile);
        console.log(response.data);
        if (response.data.success) {
            setInitialProfile(profile);
            return toast.success("Organization Data Updated");
        }

        toast.error("Data Update Unsuccessful");
    }


    const handlePasswordUpdate = async () => {
        try {
            const result = await resetPassword(newPassword);
            console.log(result);
            await logOut();
        }
        catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <div>
            <h2 className="text-4xl text-accent font-bold mb-4">Profile</h2>

            {/* Edit Profile Section */}
            {
                profile.email ?
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-2">Edit Profile</h3>
                        <div className="flex flex-col lg:flex-row flex-wrap gap-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1 mt-2">Organization Name</label>
                                <input
                                    type="text"
                                    value={profile.organizationName}
                                    onChange={(e) => setProfile({ ...profile, organizationName: e.target.value })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1 mt-2">Email</label>
                                <input
                                    type="email"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1 mt-2">Phone Number</label>
                                <input
                                    type="text"
                                    value={profile.phoneNumber}
                                    onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1 mt-2">Industry</label>
                                <input
                                    type="text"
                                    value={profile.industry}
                                    onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <button onClick={handleUpdate} disabled={!isDataChanged && true} className={`btn bg-[#1DCD64] hover:bg-[#1dcd638c] text-white`}>
                            Update Profile
                        </button>
                    </div>
                    :
                    <span className="loading loading-spinner loading-lg"></span>
            }

            {/* Change Password Section */}
            <div>
                <h3 className="text-lg font-bold mb-2">Change Password</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1 mt-2">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="input input-bordered"
                        placeholder="Add New Password"
                    />
                </div>
                <button onClick={handlePasswordUpdate} disabled={!(newPassword.length >= 6) && true} className="btn bg-[#1DCD64] text-white">
                    Change Password
                </button>
            </div>

            {/* Error and Success Messages */}
            {/* {error && <p className="text-red-500 mt-4">{error}</p>}
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>} */}
        </div>
    );
};

export default Profile;