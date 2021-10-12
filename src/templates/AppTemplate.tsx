import { NavLink, Route, RouteComponentProps, Switch } from 'react-router-dom';

export type AppRoute = {
  label: string;
  path: string;
  exact?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

export type AppTemplateProps = {
  title: string;
  routes: AppRoute[];
};

export function AppTemplate({ title, routes }: AppTemplateProps) {
  return (
    <>
      <header>
        <h1 className="text-gray-500 font-bold md:text-lg mt-4">{title}</h1>

        <nav className="border-b border-gray-800 flex mt-4 overflow-x-auto scrollbar-none">
          {routes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              exact
              className="cursor-pointer px-5 py-3 border-b-4 border-transparent text-sm md:text-base"
              activeClassName="font-bold border-blue-500"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <section className="mt-6">
        <Switch>
          {routes.map(({ path, exact = true, component }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </section>
    </>
  );
}
