const request = async(url: string) => {
  try {
    const res = await fetch(url)
    const result = await res.json()

    return result.data || result
  } catch(e: any) {
 
    throw new Error(e)
  }
};

export const getUsers = async() => (
  request("https://reqres.in/api/users?page=2") 
);

export const getPicture = async(page: number) => (
  request(`https://picsum.photos/v2/list?page=${page}&limit=100`)
);
