import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

export function getSelectedPatientId() {
  const pathname = history.location.pathname;
  if (!pathname.includes('/patient')) {
    return undefined;
  }

  return pathname.split('/').pop();
}
