import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "153479a8240c4c2380a1c8aff503771d",
  },
});
