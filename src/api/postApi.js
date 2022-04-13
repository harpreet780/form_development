import axios from "axios"

export const usersignupApi = async (payload) => {
    let signupdata = await axios.post("/data", payload).then((res) => {
        console.log(res)
    })
    return signupdata
  }
  