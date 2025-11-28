import { init, retrieveLaunchParams } from "@telegram-apps/sdk-react";

export const envConfig = {
  telegramAuth:
    "user=%7B%22id%22%3A1165017205%2C%22first_name%22%3A%22%D0%9E%D0%BB%D0%B5%D1%81%D1%8F%22%2C%22last_name%22%3A%22%D0%A2%D0%B0%D0%BF%D0%B5%D1%80%D0%BE%22%2C%22username%22%3A%22kakayatobeliberda%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2Fp__518etic4JJRdL0DkN4x-AJuq_QJ62V3_B2GxK8hY.svg%22%7D&chat_instance=-2348944782996514016&chat_type=sender&auth_date=1764073700&signature=UFBzR7AAX3EHgI4rzONXuu-TWRo1s5W1zvTUD_gFXeg2If-dzU95eHDhPvfmEvv4CBJghM0tmhGeKg27JyJdCg&hash=3dd4ef60bd05d12a05e77919315ea4c7ff657e096e1c4bd693536091df932148",
  apiUrl: import.meta.env.VITE_API_URL,
};

try {
  init();
  const { initDataRaw } = retrieveLaunchParams();
  const telegramAuth = initDataRaw || "";
  envConfig.telegramAuth = telegramAuth;
  console.log(initDataRaw);
} catch (err) {
  console.error(err);
}
