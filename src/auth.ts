import axios from "axios";

function startLoginProcess(state: string): void {
  const client_id = process.env.VUE_APP_CLIENT_ID;
  const href =
    "https://librewiki.net/rest.php/oauth2/authorize" +
    `?response_type=code&client_id=${client_id}` +
    `&state=${encodeURIComponent(state)}`;
  location.replace(href);
}

async function logout(): Promise<void> {
  await axios.post(`${process.env.VUE_APP_BACKEND_HOST}/auth/logout`, null, {
    withCredentials: true,
  });
}

async function getToken(code: string): Promise<void> {
  await axios.post(
    `${process.env.VUE_APP_BACKEND_HOST}/auth/login`,
    { code },
    {
      withCredentials: true,
    }
  );
}

// refresh token or wait until it is refreshed by another one
async function refreshToken(): Promise<void> {
  // make sure only one refresh request is sent
  await navigator.locks.request(
    "refreshToken",
    { ifAvailable: true },
    async (lock) => {
      try {
        if (lock) {
          await axios.post(
            `${process.env.VUE_APP_BACKEND_HOST}/auth/refresh`,
            null,
            {
              withCredentials: true,
            }
          );
        } else {
          await navigator.locks.request("refresh", () => null); // wait first refresh request done
        }
      } catch {
        logout();
        location.reload();
      }
    }
  );
}

export { startLoginProcess, getToken, refreshToken, logout };
