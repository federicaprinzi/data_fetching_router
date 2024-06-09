import useSWR from "swr";
export function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    async (url) => {
      const response = await fetch(url);
      return response.json();
    }
  );

  return {
    data,
    loading: !data && !error,
    error,
  };
}
