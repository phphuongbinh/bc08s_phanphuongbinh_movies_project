import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-32">
      <div className="grid grid-cols-1 gap-10 pb-6 text-center text-white border-b border-white">
        <div className="space-y-3">
          <Link to={"/"} className="flex items-end justify-center">
            <img
              src={process.env.PUBLIC_URL + "/img/favicon.ico"}
              className="w-10 h-10"
              alt="logo"
            />
            <span className="text-[20px] leading-none font-semibold text-purple-500">
              licks
            </span>
          </Link>
          <p>
            Đăng ký để nhận những ưu đãi đặc biệt và danh sách phim mỗi tuần.
          </p>
          <button className="w-full px-5 py-2 text-white bg-purple-500 rounded-lg shadow shadow-purple-400">
            Đăng ký ngay
          </button>
        </div>
        <div className="flex flex-col gap-y-2">
          <Link className="duration-300 hover:text-primary">Về chúng tôi</Link>
          <Link className="duration-300 hover:text-primary">
            Thức ăn và đồ uống
          </Link>
          <Link className="duration-300 hover:text-primary">Tuyển dụng</Link>
          <Link className="duration-300 hover:text-primary">
            Câu hỏi thường gặp
          </Link>
          <Link className="duration-300 hover:text-primary">Liên hệ</Link>
        </div>
        <div>
          <p>Tải ứng dụng tại đây</p>
          <Link className="inline-block">
            <img
              className="w-[150px] mt-3"
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTE5LjY2IDQwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uYntmaWxsOiNmZmY7fTwvc3R5bGU+CiAgPC9kZWZzPgogIDxnPgogICAgPGc+CiAgICAgIDxwYXRoIGNsYXNzPSJiIiBkPSJtMTEwLjEzLDBIOS41M2MtLjM3LDAtLjczLDAtMS4wOSwwLS4zMSwwLS42MSwwLS45Mi4wMS0uNjcuMDItMS4zNC4wNi0yLC4xOC0uNjcuMTItMS4yOS4zMi0xLjkuNjMtLjYuMzEtMS4xNS43MS0xLjYyLDEuMTgtLjQ4LjQ3LS44OCwxLjAyLTEuMTgsMS42Mi0uMzEuNjEtLjUxLDEuMjMtLjYzLDEuOS0uMTIuNjYtLjE2LDEuMzMtLjE4LDIsMCwuMzEtLjAxLjYxLS4wMi45MnYyMy4xMWMwLC4zMSwwLC42MS4wMi45Mi4wMi42Ny4wNiwxLjM0LjE4LDIsLjEyLjY3LjMxLDEuMy42MywxLjkuMy42LjcsMS4xNCwxLjE4LDEuNjEuNDcuNDgsMS4wMi44OCwxLjYyLDEuMTguNjEuMzEsMS4yMy41MSwxLjkuNjMuNjYuMTIsMS4zNC4xNiwyLC4xOC4zMSwwLC42MS4wMS45Mi4wMS4zNywwLC43MywwLDEuMDksMGgxMDAuNmMuMzYsMCwuNzIsMCwxLjA4LDAsLjMsMCwuNjIsMCwuOTItLjAxLjY3LS4wMiwxLjM0LS4wNiwyLS4xOC42Ny0uMTIsMS4yOS0uMzIsMS45MS0uNjMuNi0uMywxLjE0LS43LDEuNjItMS4xOC40OC0uNDcuODctMS4wMiwxLjE4LTEuNjEuMzEtLjYxLjUxLTEuMjMuNjItMS45LjEyLS42Ni4xNi0xLjMzLjE5LTIsMC0uMzEsMC0uNjEsMC0uOTIsMC0uMzYsMC0uNzIsMC0xLjA5VjkuNTRjMC0uMzcsMC0uNzMsMC0xLjA5LDAtLjMxLDAtLjYxLDAtLjkyLS4wMi0uNjctLjA2LTEuMzQtLjE5LTItLjExLS42Ny0uMzEtMS4yOS0uNjItMS45LS4zMS0uNi0uNzEtMS4xNS0xLjE4LTEuNjItLjQ3LS40Ny0xLjAyLS44Ny0xLjYyLTEuMTgtLjYyLS4zMS0xLjI0LS41MS0xLjkxLS42My0uNjYtLjEyLTEuMzMtLjE2LTItLjE4LS4zLDAtLjYyLS4wMS0uOTItLjAxLS4zNiwwLS43MiwwLTEuMDgsMGgwWiIvPgogICAgICA8cGF0aCBjbGFzcz0iYiIgZD0ibTguNDQsMzkuMTJjLS4zLDAtLjYsMC0uOS0uMDEtLjU2LS4wMi0xLjIyLS4wNS0xLjg3LS4xNi0uNjEtLjExLTEuMTUtLjI5LTEuNjYtLjU1LS41Mi0uMjYtLjk5LS42MS0xLjQtMS4wMi0uNDEtLjQxLS43NS0uODctMS4wMi0xLjQtLjI2LS41LS40NC0xLjA1LS41NC0xLjY2LS4xMi0uNjctLjE1LTEuMzYtLjE3LTEuODgsMC0uMjEtLjAxLS45MS0uMDEtLjkxVjguNDRzMC0uNjkuMDEtLjg5Yy4wMS0uNTIuMDQtMS4yMS4xNy0xLjg3LjExLS42MS4yOC0xLjE2LjU0LTEuNjYuMjctLjUyLjYxLS45OSwxLjAyLTEuNC40MS0uNDEuODgtLjc2LDEuNC0xLjAyLjUxLS4yNiwxLjA2LS40NCwxLjY1LS41NC42Ny0uMTIsMS4zNi0uMTUsMS44OC0uMTZoLjlzMTAyLjc3LS4wMSwxMDIuNzctLjAxaC45MWMuNTEuMDMsMS4yLjA2LDEuODYuMTguNi4xMSwxLjE1LjI4LDEuNjcuNTUuNTEuMjYuOTguNjEsMS4zOSwxLjAyLjQxLjQxLjc1Ljg4LDEuMDIsMS40LjI2LjUxLjQzLDEuMDUuNTQsMS42NS4xMi42My4xNSwxLjI4LjE3LDEuODksMCwuMjgsMCwuNTksMCwuODksMCwuMzgsMCwuNzMsMCwxLjA5djIwLjkzYzAsLjM2LDAsLjcyLDAsMS4wOCwwLC4zMywwLC42MiwwLC45My0uMDIuNTktLjA2LDEuMjQtLjE3LDEuODUtLjEuNjEtLjI4LDEuMTYtLjU0LDEuNjctLjI3LjUyLS42MS45OS0xLjAyLDEuMzktLjQxLjQyLS44OC43Ni0xLjQsMS4wMi0uNTIuMjYtMS4wNS40NC0xLjY3LjU1LS42NC4xMi0xLjMuMTUtMS44Ny4xNi0uMjksMC0uNi4wMS0uOS4wMWgtMS4wOHMtMTAxLjY5LDAtMTAxLjY5LDBaIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0ibTI1LDE5Ljg5Yy0uMDMtMi44NiwyLjM0LTQuMjUsMi40NS00LjMyLTEuMzQtMS45Ni0zLjQyLTIuMjItNC4xNS0yLjI0LTEuNzUtLjE4LTMuNDQsMS4wNC00LjMzLDEuMDRzLTIuMjgtMS4wMy0zLjc1LTFjLTEuOS4wMy0zLjY4LDEuMTMtNC42NSwyLjg0LTIuMDEsMy40OC0uNTEsOC42LDEuNDIsMTEuNDEuOTYsMS4zOCwyLjA5LDIuOTIsMy41NiwyLjg2LDEuNDQtLjA2LDEuOTgtLjkyLDMuNzItLjkyczIuMjMuOTIsMy43My44OWMxLjU1LS4wMywyLjUyLTEuMzgsMy40NS0yLjc4LDEuMTEtMS41OCwxLjU2LTMuMTQsMS41OC0zLjIyLS4wNC0uMDEtMy4wMS0xLjE1LTMuMDQtNC41N1oiLz4KICAgICAgICA8cGF0aCBkPSJtMjIuMTYsMTEuNDhjLjc4LS45NywxLjMxLTIuMjksMS4xNi0zLjYzLTEuMTIuMDUtMi41My43OC0zLjM0LDEuNzMtLjcyLjg0LTEuMzUsMi4yMS0xLjE5LDMuNSwxLjI2LjA5LDIuNTYtLjY0LDMuMzctMS41OVoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJtNDIuMywyNy4xNGgtNC43M2wtMS4xNCwzLjM2aC0ybDQuNDgtMTIuNDJoMi4wOGw0LjQ4LDEyLjQyaC0yLjA0bC0xLjE0LTMuMzZabS00LjI0LTEuNTVoMy43NWwtMS44NS01LjQ1aC0uMDVsLTEuODUsNS40NVoiLz4KICAgICAgICA8cGF0aCBkPSJtNTUuMTYsMjUuOTdjMCwyLjgxLTEuNTEsNC42Mi0zLjc4LDQuNjItMS4yOSwwLTIuMzEtLjU4LTIuODUtMS41OGgtLjA0djQuNDhoLTEuODZ2LTEyLjA1aDEuOHYxLjUxaC4wM2MuNTItLjk3LDEuNjItMS42LDIuODgtMS42LDIuMywwLDMuODEsMS44MiwzLjgxLDQuNjJabS0xLjkxLDBjMC0xLjgzLS45NS0zLjA0LTIuMzktMy4wNHMtMi4zOCwxLjIzLTIuMzgsMy4wNC45NiwzLjA1LDIuMzgsMy4wNSwyLjM5LTEuMiwyLjM5LTMuMDVaIi8+CiAgICAgICAgPHBhdGggZD0ibTY1LjEyLDI1Ljk3YzAsMi44MS0xLjUxLDQuNjItMy43OCw0LjYyLTEuMjksMC0yLjMxLS41OC0yLjg1LTEuNThoLS4wNHY0LjQ4aC0xLjg2di0xMi4wNWgxLjh2MS41MWguMDNjLjUyLS45NywxLjYyLTEuNiwyLjg4LTEuNiwyLjMsMCwzLjgxLDEuODIsMy44MSw0LjYyWm0tMS45MSwwYzAtMS44My0uOTUtMy4wNC0yLjM5LTMuMDRzLTIuMzgsMS4yMy0yLjM4LDMuMDQuOTYsMy4wNSwyLjM4LDMuMDUsMi4zOS0xLjIsMi4zOS0zLjA1WiIvPgogICAgICAgIDxwYXRoIGQ9Im03MS43MSwyNy4wNGMuMTQsMS4yMywxLjMzLDIuMDQsMi45NywyLjA0czIuNjktLjgxLDIuNjktMS45MmMwLS45Ni0uNjgtMS41NC0yLjI5LTEuOTRsLTEuNjEtLjM5Yy0yLjI4LS41NS0zLjM0LTEuNjItMy4zNC0zLjM1LDAtMi4xNCwxLjg3LTMuNjEsNC41Mi0zLjYxczQuNDIsMS40Nyw0LjQ4LDMuNjFoLTEuODhjLS4xMS0xLjI0LTEuMTQtMS45OS0yLjYzLTEuOTlzLTIuNTIuNzYtMi41MiwxLjg2YzAsLjg4LjY1LDEuMzksMi4yNSwxLjc5bDEuMzcuMzRjMi41NS42LDMuNjEsMS42MywzLjYxLDMuNDQsMCwyLjMyLTEuODUsMy43OC00Ljc5LDMuNzgtMi43NSwwLTQuNjEtMS40Mi00LjczLTMuNjdoMS45WiIvPgogICAgICAgIDxwYXRoIGQ9Im04My4zNSwxOS4zdjIuMTRoMS43MnYxLjQ3aC0xLjcydjQuOTljMCwuNzguMzQsMS4xNCwxLjEsMS4xNC4xOSwwLC40OS0uMDMuNjEtLjA0djEuNDZjLS4yMS4wNS0uNjIuMDktMS4wMy4wOS0xLjgzLDAtMi41NS0uNjktMi41NS0yLjQ0di01LjE5aC0xLjMydi0xLjQ3aDEuMzJ2LTIuMTRoMS44N1oiLz4KICAgICAgICA8cGF0aCBkPSJtODYuMDYsMjUuOTdjMC0yLjg1LDEuNjgtNC42NCw0LjI5LTQuNjRzNC4yOSwxLjc5LDQuMjksNC42NC0xLjY2LDQuNjQtNC4yOSw0LjY0LTQuMjktMS43OC00LjI5LTQuNjRabTYuNywwYzAtMS45NS0uOS0zLjExLTIuNC0zLjExcy0yLjQsMS4xNi0yLjQsMy4xMS45LDMuMTEsMi40LDMuMTEsMi40LTEuMTQsMi40LTMuMTFaIi8+CiAgICAgICAgPHBhdGggZD0ibTk2LjE5LDIxLjQ0aDEuNzd2MS41NGguMDRjLjI4LTEuMDIsMS4xMS0xLjY0LDIuMTgtMS42NC4yNywwLC40OS4wNC42NC4wN3YxLjc0Yy0uMTUtLjA2LS40Ny0uMTEtLjgzLS4xMS0xLjIsMC0xLjk0LjgxLTEuOTQsMi4wOHY1LjM3aC0xLjg2di05LjA1WiIvPgogICAgICAgIDxwYXRoIGQ9Im0xMDkuMzgsMjcuODRjLS4yNSwxLjY0LTEuODUsMi43Ny0zLjksMi43Ny0yLjYzLDAtNC4yNy0xLjc2LTQuMjctNC42czEuNjQtNC42OCw0LjE5LTQuNjgsNC4wOCwxLjcyLDQuMDgsNC40N3YuNjRoLTYuMzl2LjExYzAsMS41NS45NywyLjU2LDIuNDQsMi41NiwxLjAzLDAsMS44NC0uNDksMi4wOS0xLjI3aDEuNzZabS02LjI4LTIuN2g0LjUzYy0uMDQtMS4zOS0uOTMtMi4zLTIuMjItMi4zcy0yLjIxLjkzLTIuMzEsMi4zWiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0ibTM3LjgzLDguNzNjMS43NywwLDIuODEsMS4wOSwyLjgxLDIuOTZzLTEuMDMsMy0yLjgxLDNoLTIuMTZ2LTUuOTdoMi4xNlptLTEuMjMsNS4xMmgxLjEyYzEuMjUsMCwxLjk3LS43OCwxLjk3LTIuMTVzLS43My0yLjEzLTEuOTctMi4xM2gtMS4xMnY0LjI4WiIvPgogICAgICA8cGF0aCBkPSJtNDEuNjgsMTIuNDRjMC0xLjQ1LjgxLTIuMzQsMi4xMi0yLjM0czIuMTIuODgsMi4xMiwyLjM0LS44MSwyLjM0LTIuMTIsMi4zNC0yLjEyLS44OC0yLjEyLTIuMzRabTMuMzMsMGMwLS45OC0uNDQtMS41NS0xLjIxLTEuNTVzLTEuMjEuNTctMS4yMSwxLjU1LjQzLDEuNTUsMS4yMSwxLjU1LDEuMjEtLjU3LDEuMjEtMS41NVoiLz4KICAgICAgPHBhdGggZD0ibTUxLjU3LDE0LjdoLS45MmwtLjkzLTMuMzJoLS4wN2wtLjkzLDMuMzJoLS45MWwtMS4yNC00LjVoLjlsLjgxLDMuNDRoLjA3bC45My0zLjQ0aC44NWwuOTMsMy40NGguMDdsLjgtMy40NGguODlsLTEuMjQsNC41WiIvPgogICAgICA8cGF0aCBkPSJtNTMuODUsMTAuMTloLjg2di43MmguMDdjLjIyLS41LjY3LS44LDEuMzQtLjgsMSwwLDEuNTYuNiwxLjU2LDEuNjd2Mi45MmgtLjg5di0yLjY5YzAtLjcyLS4zMS0xLjA4LS45Ny0xLjA4cy0xLjA4LjQ0LTEuMDgsMS4xNHYyLjYzaC0uODl2LTQuNVoiLz4KICAgICAgPHBhdGggZD0ibTU5LjA5LDguNDRoLjg5djYuMjZoLS44OXYtNi4yNloiLz4KICAgICAgPHBhdGggZD0ibTYxLjIyLDEyLjQ0YzAtMS40NS44MS0yLjM0LDIuMTItMi4zNHMyLjEyLjg4LDIuMTIsMi4zNC0uODEsMi4zNC0yLjEyLDIuMzQtMi4xMi0uODgtMi4xMi0yLjM0Wm0zLjMzLDBjMC0uOTgtLjQ0LTEuNTUtMS4yMS0xLjU1cy0xLjIxLjU3LTEuMjEsMS41NS40MywxLjU1LDEuMjEsMS41NSwxLjIxLS41NywxLjIxLTEuNTVaIi8+CiAgICAgIDxwYXRoIGQ9Im02Ni40LDEzLjQyYzAtLjgxLjYtMS4yOCwxLjY3LTEuMzRsMS4yMi0uMDd2LS4zOWMwLS40OC0uMzEtLjc0LS45Mi0uNzQtLjUsMC0uODQuMTgtLjk0LjVoLS44NmMuMDktLjc3LjgyLTEuMjcsMS44NC0xLjI3LDEuMTMsMCwxLjc3LjU2LDEuNzcsMS41MXYzLjA4aC0uODZ2LS42M2gtLjA3Yy0uMjcuNDUtLjc2LjcxLTEuMzUuNzEtLjg3LDAtMS41LS41Mi0xLjUtMS4zNVptMi44OS0uMzh2LS4zOGwtMS4xLjA3Yy0uNjIuMDQtLjkuMjUtLjkuNjVzLjM1LjY0LjgzLjY0Yy42NywwLDEuMTctLjQzLDEuMTctLjk4WiIvPgogICAgICA8cGF0aCBkPSJtNzEuMzUsMTIuNDRjMC0xLjQyLjczLTIuMzIsMS44Ny0yLjMyLjYyLDAsMS4xNC4yOSwxLjM4Ljc5aC4wN3YtMi40N2guODl2Ni4yNmgtLjg1di0uNzFoLS4wN2MtLjI3LjQ5LS43OS43OS0xLjQxLjc5LTEuMTUsMC0xLjg3LS45LTEuODctMi4zM1ptLjkyLDBjMCwuOTYuNDUsMS41MywxLjIsMS41M3MxLjIxLS41OCwxLjIxLTEuNTMtLjQ3LTEuNTMtMS4yMS0xLjUzLTEuMi41OC0xLjIsMS41M1oiLz4KICAgICAgPHBhdGggZD0ibTc5LjIzLDEyLjQ0YzAtMS40NS44MS0yLjM0LDIuMTItMi4zNHMyLjEyLjg4LDIuMTIsMi4zNC0uODEsMi4zNC0yLjEyLDIuMzQtMi4xMi0uODgtMi4xMi0yLjM0Wm0zLjMzLDBjMC0uOTgtLjQ0LTEuNTUtMS4yMS0xLjU1cy0xLjIxLjU3LTEuMjEsMS41NS40MywxLjU1LDEuMjEsMS41NSwxLjIxLS41NywxLjIxLTEuNTVaIi8+CiAgICAgIDxwYXRoIGQ9Im04NC42NywxMC4xOWguODZ2LjcyaC4wN2MuMjItLjUuNjctLjgsMS4zNC0uOCwxLDAsMS41Ni42LDEuNTYsMS42N3YyLjkyaC0uODl2LTIuNjljMC0uNzItLjMxLTEuMDgtLjk3LTEuMDhzLTEuMDguNDQtMS4wOCwxLjE0djIuNjNoLS44OXYtNC41WiIvPgogICAgICA8cGF0aCBkPSJtOTMuNTIsOS4wN3YxLjE0aC45OHYuNzVoLS45OHYyLjMyYzAsLjQ3LjE5LjY4LjY0LjY4LjE0LDAsLjIxLDAsLjM0LS4wMnYuNzRjLS4xNC4wMi0uMzEuMDUtLjQ4LjA1LS45OSwwLTEuMzgtLjM1LTEuMzgtMS4yMnYtMi41NGgtLjcxdi0uNzVoLjcxdi0xLjE0aC44OVoiLz4KICAgICAgPHBhdGggZD0ibTk1LjcsOC40NGguODh2Mi40OGguMDdjLjIyLS41LjY5LS44MSwxLjM3LS44MS45NiwwLDEuNTUuNjEsMS41NSwxLjY4djIuOTFoLS44OXYtMi42OWMwLS43Mi0uMzMtMS4wOC0uOTYtMS4wOC0uNzMsMC0xLjEzLjQ2LTEuMTMsMS4xNHYyLjYzaC0uODl2LTYuMjZaIi8+CiAgICAgIDxwYXRoIGQ9Im0xMDQuNzYsMTMuNDhjLS4yLjgxLS45MiwxLjMtMS45NSwxLjMtMS4yOSwwLTIuMDgtLjg4LTIuMDgtMi4zMnMuODEtMi4zNSwyLjA4LTIuMzUsMi4wMS44NiwyLjAxLDIuMjd2LjMxaC0zLjE4di4wNWMuMDMuNzkuNDksMS4yOSwxLjIsMS4yOS41NCwwLC45MS0uMTksMS4wNy0uNTVoLjg2Wm0tMy4xMy0xLjQ1aDIuMjdjLS4wMi0uNzEtLjQ1LTEuMTctMS4xMS0xLjE3cy0xLjEyLjQ2LTEuMTcsMS4xN1oiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
              alt=""
            />
          </Link>
          <p className="mt-4 mb-3">Theo dõi, đăng ký kênh để nhận thông báo</p>
          <div className="flex justify-center gap-x-3">
            <Link target="_blank" to={"https://www.facebook.com/ImmaErauqs"}>
              <span className="inline-flex items-center justify-center w-8 h-8 transition-all border border-white rounded-lg shadow-sm shadow-white hover:text-primary hover:shadow-primary hover:border-primary group">
                <i className="fa-brands fa-facebook-f group-hover:animate-spin-once"></i>
              </span>
            </Link>
            <Link target="_blank" to={"https://www.instagram.com/erauqs102/"}>
              <span className="inline-flex items-center justify-center w-8 h-8 transition-all border border-white rounded-lg shadow-sm shadow-white hover:text-primary hover:shadow-primary hover:border-primary group">
                <i className="fa-brands fa-instagram group-hover:animate-spin-once"></i>
              </span>
            </Link>
            <Link target="_blank" to={"https://twitter.com/"}>
              <span className="inline-flex items-center justify-center w-8 h-8 transition-all border border-white rounded-lg shadow-sm shadow-white hover:text-primary hover:shadow-primary hover:border-primary group">
                <i className="fa-brands fa-twitter group-hover:animate-spin-once"></i>
              </span>
            </Link>
            <Link target="_blank" to={"https://www.tiktok.com/en/"}>
              <span className="inline-flex items-center justify-center w-8 h-8 transition-all border border-white rounded-lg shadow-sm shadow-white hover:text-primary hover:shadow-primary hover:border-primary group">
                <i className="fa-brands fa-tiktok group-hover:animate-spin-once"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-white">
        © Copyright 2023. All rights reserved
      </p>
    </div>
  );
};

export default MobileFooter;
