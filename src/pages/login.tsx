interface Ilogin {}
import { Button } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = ({}: Ilogin) => {
  const { data: session } = useSession();

  return (
    <div>
      {session && <Button onClick={() => signOut()}>Sign out</Button>}
      {!session && <Button onClick={() => signIn()}>Sign in</Button>}
    </div>
  );
};

export default Login;
