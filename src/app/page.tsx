import { getSession } from "@auth0/nextjs-auth0";

import Main from "./components/Main";
import Header from "./components/Header";
import { LoginForm } from "./components/LoginForm";

export default async function Home() {
  const session = await getSession();
  const token = session?.accessToken;

  return (
    <div>
      <Header />

      {token ? <Main token={token} /> : <LoginForm />}
    </div>
  );
}
