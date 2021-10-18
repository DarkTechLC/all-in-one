import {
  AiOutlineGithub as GithubIcon,
  AiOutlineLinkedin as LinkedinIcon,
} from 'react-icons/ai';

import { Container } from './Container';

export function Footer() {
  return (
    <footer className="py-10 bg-gray-800 text-gray-400 absolute bottom-0 w-full">
      <Container>
        <img src="/logo.svg" alt="All in One" className="max-h-8" />

        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-2 mt-6">
          <p>
            Desenvolvido por{' '}
            <a
              href="http://github.com/darktechlc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-bold"
              tabIndex={0}
            >
              Luís Clício
            </a>
            .
          </p>

          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/darktechlc" tabIndex={0}>
                <GithubIcon className="h-8 w-8 transition-colors hover:text-gray-300" />
                <span className="sr-only">Perfil no Github</span>
              </a>
            </li>

            <li>
              <a href="https://linkedin.com/in/luisclicio" tabIndex={0}>
                <LinkedinIcon className="h-8 w-8 transition-colors hover:text-gray-300" />
                <span className="sr-only">Perfil no Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
