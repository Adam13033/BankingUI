import axios from "axios";
import { useCookies } from "react-cookie";

export const signUp = async (
  firstName,
  mobileNumber,
  email,
  password,
  setUser,
  token
) => {
  try {
    const customerData = {
        name: firstName,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
    };
  

    await fetch(`/register`, {
      headers: {
            "X-XSRF-TOKEN": token,
            "Content-Type": 'application/json'
      },
      credentials: 'include',
      method: "POST",
      body: JSON.stringify(customerData),
    });
    // const data = await res.json();
    // if (data.err) {
    //   throw new Error(data.err);
    // }

    //   localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.error(error.message);
  }
};

// export const csrfTokenFetch = async () => {
// //     const fetchCsrf = await fetch(`/csrf`, {
// //         headers: {
// //             "XSRF-TOKEN": document.cookie.split(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1')
// //         },
// //     });
// //  const data = await fetchCsrf.json();
// //  return data;
// //     console.log("Testing fetch from db method: " + data);

//   return axios.get("/csrf").then((tokenResponse) => {
//     let config = {
//       headers: {
//         "X-CSRF-TOKEN": tokenResponse.data.token,
//       },
//     };
//   });
// };

function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie
    .split(";")
    .map((c) => c.trim())
    .filter((c) => c.startsWith(name + "="));

  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split("=")[1]);
}
