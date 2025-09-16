import { Client, Databases, ID, Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);
const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  //1. use appwrite sdk to check if it is already existed in the database or not
  try {
    const response = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);
    // 2. if it is existed then update the search count
    if (response.documents.length > 0) {
      const row = response.documents[0];
      const update = await database.updateDocument(
        DATABASE_ID,
        TABLE_ID,
        row.$id,
        {
          count: row.count + 1,
        }
      );
    }
    // 3. if it is not existed then create a new record with search count 1
    else {
      const created = await database.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        {
          searchTerm,
          movie_id: movie.id,
          count: 1,
          poster_url: `https://tmdb.org/t/p/w500${movie.poster_path}`,
        }
      );
      return created;
    }
  } catch (error) {
    console.error(error);
  }
};
export const getTrendingMovies = async () => {
  try {
    const response = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};
