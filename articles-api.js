import axios from "axios";

export const requestImagesByQuery = async (query = "", page = 1) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&page=${page}&query=${query}&client_id=k9cVNFskbtiYzzynSj8IdIxAuYu9eFezPcAzSwcmxmA`
  );
  const data = response.data.results;
  console.log(data);
  return data;
};
