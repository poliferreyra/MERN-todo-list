import { getSession } from "@auth0/nextjs-auth0";

import Main from "./frontend/components/Main";
import Header from "./frontend/components/Header";
import { LoginForm } from "./frontend/components/LoginForm";



export default async function Home() {
  const session = await getSession();
  const token = session?.accessToken;

  return (
    <div>
      <Header />
    
      {token ? <Main token={token} /> : <LoginForm/>}

    </div>
  );
}
