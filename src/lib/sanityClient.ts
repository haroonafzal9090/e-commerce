import {createClient} from "next-sanity";

//import {apiVersion , datasset, projectid, useCdn} from "../env"

export const client = createClient({
    apiVersion : "2023-05-29",
    token:process.env.SANITY_ACCESS_TOKEN,
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:true,
})

