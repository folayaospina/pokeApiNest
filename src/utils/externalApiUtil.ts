export const callExternalAPI = async (url: string , paramsUrl?: string) => {
  try {
    const response = await fetch(`${url}${paramsUrl}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Unable to fetch data from the API POKEMONS');
    }
  } catch (error) {
    console.group('Error calling the API POKEMONS');
    console.error(error);
    console.groupEnd();
  }
};
