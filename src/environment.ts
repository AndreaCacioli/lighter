import { errors } from "./errors";

export const environment = {
  stage: "local",
  database_url: "unknown Url",

  getApiPath(): string {
    if (this.stage === "local") {
      return "http://localhost:8888/.netlify/functions";
    }
    else if (this.stage === "prod") {
      return "http://lighterteams.netlify.app/.netlify/functions";
    }
    throw errors.InvalidApiUrl;
  }

}
