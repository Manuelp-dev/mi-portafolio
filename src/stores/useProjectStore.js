import axios from "axios";
import { defineStore } from "pinia";
export const useProjectStore = defineStore('projects', {
    state:()=>({projects:[]}),
    actions: {
        async fetchProjects(){
            this.projects = await axios.get(/api/projects)
        }
    }
})