import axios from "axios";

const ACCESSKEY: string = '31h48PTl6HlP3IAG0CfqrB9Xdvq8tlSD4c2_bpsYcCU';

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getFetchUrl = ( page: number, per_page: number, query: string): string => {
  return `/photos?client_id=${ACCESSKEY}&page=${page}&per_page=${per_page}&query=${query}`;
}
