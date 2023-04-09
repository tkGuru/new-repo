import axios from 'axios';

export const getAllImages = async () => {
    const { data } = await axios.get('/api/banner');
    return data;
};