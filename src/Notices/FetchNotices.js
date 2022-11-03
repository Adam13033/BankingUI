export default function fetchNotice(){
try {

  
    const notice = await fetch(`/notices`, {
      headers: {
            "X-XSRF-TOKEN": token,
            "Content-Type": 'application/json'
      },
      credentials: 'include',
      method: "GET",
    });
    const data = await notice.json();
    // const data = await res.json();
    // if (data.err) {
    //   throw new Error(data.err);
    // }

    //   localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.error(error.message);
  }
}