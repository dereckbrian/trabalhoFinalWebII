const MainCardsSection = ({ navigate }) => (

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <IconCard title="Pacotes" icon={<MailOutlined />} onClick={() => navigate('/userPage/pacotes')} />
    <IconCard title="Pets" icon={<GithubOutlined />} nClick={() => navigate('/pets')} />
    <IconCard title="Configurações de Conta" icon={<LockOutlined />} nClick={() => navigate('/configs')} />
    <IconCard title="Meus Pets" icon={<UserOutlined />} nClick={() => navigate('/meusPets')} />
    <IconCard title="Avisos" icon={<BellOutlined />} nClick={() => navigate('/avisos')} />
  </div>
);
<div className="flex flex-col flex-1 p-6 space-y-6">
          <div className="w-full bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-300">
            <MainCardsSection navigate={navigate} />
          </div>
        </div>