import { log } from "console";

export async function fetchUsers(results = 10, gender = "both") {
  const url = `https://randomuser.me/api/?results=${results}${gender !== "both" ? `&gender=${gender}` : ""}`;
//${results}${gender !== "both" ? `&gender=${gender}` : 
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
    console.log(data.results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return [];
  }
}
