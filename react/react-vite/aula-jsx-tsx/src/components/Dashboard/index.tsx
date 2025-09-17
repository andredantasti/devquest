import "./Dashboard.css";

type DashboardProps = {
  username: string | null;
};

const Dashboard = ({ username }: DashboardProps) => {
  return (
    <>
      <div>
        {username ? (
          <h1>Bem-Vindo, {username}</h1>
        ) : (
          <h2 className="not-logged">Você Precisa fazer login.</h2>
        )}
      </div>
    </>
  );
};

export { Dashboard };
