import { Link } from 'react-router-dom';
import {
  MdLockOutline as LockIcon,
  MdOutlineAdjust as TargetIcon,
} from 'react-icons/md';

export function Home() {
  return (
    <>
      <header className="flex justify-center gap-6 min-h-[90vh] md:-translate-y-16">
        <div className="flex flex-col flex-1 md:justify-center py-12">
          <h1 className="text-5xl font-bold">Foco e Simplicidade</h1>
          <h2 className="text-2xl text-gray-400 mt-4">
            Tenha diversas funções em um único lugar, facilite o gerenciamente e
            aumente o foco.
          </h2>

          {/* <Link
            to="/login"
            tabIndex={0}
            className="bg-blue-500 rounded-2xl max-w-max px-10 py-4 font-bold text-gray-50 mt-8 transition-colors hover:bg-blue-600 focus:ring-4"
          >
            Acesse já
          </Link> */}
        </div>

        <div className="hidden sm:flex flex-col flex-1 justify-center items-center">
          <img
            src="/img/target.png"
            alt="Foque no momento"
            className="max-h-96 animate-jump"
            style={{
              filter: 'drop-shadow(0 1.6rem 1.6rem rgba(211, 74, 59, 0.4))',
            }}
          />
        </div>
      </header>

      <main>
        <section>
          <h3 className="text-3xl font-bold mb-6">Características</h3>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-16 gap-y-6">
            <li>
              <div className="mb-2">
                <LockIcon className="h-8 w-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Seguro</h4>
                <p>
                  Todos os aplicativos funcionam apenas no seu navegador, sem
                  envio, ou coleta de dados.
                </p>
              </div>
            </li>

            <li>
              <div className="mb-2">
                <TargetIcon className="h-9 w-9" />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Minimalista</h4>
                <p>Design simples, direto e focado na tarefa.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold mb-6">Aplicativos disponíveis</h3>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-16 gap-y-6">
            <li>
              <div>
                <h4 className="text-xl font-bold mb-2">QR Code App</h4>
                <p>Um app completo para ler e criar QR Codes.</p>
                <Link
                  to="/qrcode"
                  tabIndex={0}
                  className="block font-bold text-blue-500 mt-4 py-1"
                >
                  Acesse já
                </Link>
              </div>
            </li>

            <li>
              <div>
                <h4 className="text-xl font-bold mb-2">Quick Notes App</h4>
                <p>
                  Armazene notas rapidamente, evite esquecê-las e deixe sua
                  mente focar no momento!
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
