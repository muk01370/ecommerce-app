import React, { useContext, useEffect, useState } from 'react';
import cartService from '../../services/cartService'; // Import cartService
import { myContext } from '../../App';
import axios from 'axios';

const Profile = () => {
    const { user } = useContext(myContext);
    const [profileData, setProfileData] = useState(null);
    const [cartItems, setCartItems] = useState([]); // State for cart items

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get('/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setProfileData(response.data);

                // Fetch cart items after profile data
                const cartResponse = await cartService.getCartItems(response.data.id);
                setCartItems(cartResponse); // Set cart items
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        if (user) {
            fetchProfileData();
        }
    }, [user]);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            <h2>Cart Items</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.productId}>{item.productId} - Quantity: {item.quantity}</li>
                    ))}
                </ul>
            ) : (
                <p>No items in cart.</p>
            )}
            {/* Add more fields as necessary */}
        </div>
    );
};

export default Profile;
