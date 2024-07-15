import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                background:` url("https://s3-alpha-sig.figma.com/img/6922/88e6/c78056a3130b32520a1208594410002b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gnIfqxDLSmhFt~en-SumZrS~Q26DVJn25A~5al1CgOoPXZ9lPW55~EoLBosYBSnjsR6aGHV6tqEDRoVbk~ftymWmkQu0XUZUUHZqDxgnt~jXFHh663WnN-iK2GhKUXjq5sEYgNL5dWJ6ZiMKcR6ZvGXqg4hCpGptyTF4zodvIB7ztCo8PiMNmBhx2l3pcnKi5l132XF24gOCVAooYjg5O06Zw0rrYR2Tgn1YwAvvPGm5ZduIc6fWh8BlL9seSbJ3Lht7-JO80999Kq-EwAGa91Zp73J0hJJL8gX0hFDMzf-QW4Hwc0kMBa148gIemaTquUtU-j3fcYNXE~GYjevfhQ__")`,
                backgroundPosition:"center",
                backgroundSize:"cover",
                
            }}
            className="flex items-center justify-center"
        >
            <div className="flex items-center justify-center rounded-[12px] bg-[#F9F9F9] px-[57px] py-16">
                <Outlet />
            </div>
        </div>
    )
}
export default Auth;