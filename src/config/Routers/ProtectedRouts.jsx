import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouts = ({ component }) => {
    const [user,setUser] = useState(true);

    if (!user) return <Navigate to="/" />
    else if (user) return component
}

export default ProtectedRouts