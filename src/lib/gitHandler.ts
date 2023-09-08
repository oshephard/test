import fs from "fs";
import git from "simple-git";

function gitHandler(url: string) {
  try {
    const date = new Date().toISOString();

    git().clone(url, {}, (err: any) => {
      if (err) {
        console.error(`Error cloning repository: ${err.message}`);
        return false;
      }

      fs.writeFile(
        `./tmp/${date}.txt`,
        `hello world on ${date}!`,
        function (err) {
          git("./tmp")
            .addRemote("temp", url, (err) => {
              if (err) {
                console.error(
                  `Error cloning repo or adding remote: ${err.message}`
                );
                return false;
              }
            })
            .add(".", (err) => {
              if (err) {
                console.error(`Error adding file to repo: ${err.message}`);
                return false;
              }
            })
            .commit(`Adding ${date}.txt`, (err) => {
              if (err) {
                console.error(`Error committing changes: ${err.message}`);
                return false;
              }
            })
            .push(["-u", "temp", "master"], (err) => {
              if (err) {
                console.error(`Error pushing to origin: ${err.message}`);
                return false;
              }
            })
            .removeRemote("temp");
        }
      );
      return true;
    });
  } catch (err) {
    return err;
  }
}

export default gitHandler;
