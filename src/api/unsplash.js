import axios from 'axios';

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: 'Client-ID DJd_npv4ret1sE9w5OGCCiEhH0KzfR-mkil29YPwWz4',
  },
});
