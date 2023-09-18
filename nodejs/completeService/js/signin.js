// 토큰이 있을 경우 로그아웃 지시

const token = localStorage.getItem("x-access-token");

if (token) {
  alert("로그아웃 후 이용해주세요.");
  location.href = "index.html";
}


// 로그인 정보 확인

const buttonSignin = document.getElementById("signin");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

buttonSignin.addEventListener("click", signin);

// 로그인 처리 함수
async function signin(event) {
  currentEmail = inputEmail.value;
  currentPassword = inputPassword.value;

  if (!currentEmail || !currentPassword) {
    return false;
  }

  // 로그인 api 요청
  const config = {
    method: "post",
    url: url + "/sign-in",
    data: {
      email: currentEmail,
      password: currentPassword,
    },
  };

  try {
    const res = await axios(config);

    if (res.data.code !== 200) {
      alert(res.data.message);
      return false;
    }

    localStorage.setItem("x-access-token", res.data.result.token);
    alert(res.data.message);
    location.href = "index.html";
    return true;
  } catch (err) {
    console.error(err);
  }
}